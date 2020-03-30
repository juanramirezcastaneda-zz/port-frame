import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './favicon.ico';

import { HelloWorld } from './components/HelloWorld';

ReactDOM.render(<HelloWorld firstName={'Juan'} lastName={'Ramirez'} />, document.getElementById('app'));
