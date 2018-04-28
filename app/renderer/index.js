import {is} from 'electron-util';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'unstated';
import UNSTATED from 'unstated-debug';
import Root from './views/Root';

UNSTATED.isEnabled = is.development;
UNSTATED.logStateChanges = false;

require('electron-unhandled')({
	showDialog: !is.development,
});

render((
	<Provider>
		<Root/>
	</Provider>
), document.querySelector('#root'));
