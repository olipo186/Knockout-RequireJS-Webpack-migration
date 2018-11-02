import ko from 'knockout';
import MasterViewModel from 'app/master-viewmodel.js';
import ReactComponentLoader from 'utils/react-component-loader';

import 'app/utils/react-component-binding';

ko.components.loaders.unshift(ReactComponentLoader);

import 'app/components';
import HelloMessage from 'app/components/hello-message';
import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';


ko.applyBindings(new MasterViewModel(), document.getElementById('root'));

var mountNode = document.querySelector('#react-content');

ReactDOM.render(
    <HelloMessage name="there" />,
    mountNode
);
