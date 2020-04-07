#!/usr/bin/env node
const Inquirer = require('inquirer');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

async function getTemplateFiles(templateFolder) {
  const files = await readdir(templateFolder);
  return Promise.all(
    files.map(async (file) => {
      const contents = (await readFile(path.join(templateFolder, file))).toString();
      return {
        compiled: _.template(contents),
        filename: file.replace(/\.tmpl$/, ''),
      };
    })
  );
}

async function ask(question) {
  return (await Inquirer.prompt({ ...question, name: '_' }))._;
}

async function createComponent(componentType, componentName, srcFolder, templateFolder) {
  const folderName = _.kebabCase(componentName);
  try {
    const newComponentPath = path.join(srcFolder, componentType, folderName);
    await mkdir(newComponentPath);

    const templates = await getTemplateFiles(templateFolder);

    await Promise.all(
      templates.map(async ({ filename, compiled }) => {
        const contents = compiled({ componentName, componentType });

        await writeFile(path.join(newComponentPath, filename), contents);
      })
    );
  } catch (e) {
    if (e.code === 'EEXIST') {
      // eslint-disable-next-line no-console
      console.error(`Component with name ${folderName} already exists!`);
    } else {
      // eslint-disable-next-line no-console
      console.error(e);
    }

    process.exit();
  }
}

(async function() {
  const rootFolder = path.join(__dirname, '../../');

  const project = await ask({
    type: 'list',
    message: 'Project',
    choices: [
      { name: 'Global Design System', value: 'packages/global-design-system/src' },
      { name: 'Client', value: 'packages/client/src/components' },
    ],
  });

  const srcFolder = path.join(rootFolder, project);
  const templateFolder = path.join(srcFolder, '.template');

  const componentType = await ask({
    type: 'list',
    message: 'Component type',
    choices: ['Atoms', 'Molecules', 'Organisms'],
  });

  const componentName = await ask({
    type: 'input',
    message: 'Component name (No dashes, React component naming style (NavLink)',
  });

  createComponent(componentType.toLowerCase(), componentName, srcFolder, templateFolder);
})();
