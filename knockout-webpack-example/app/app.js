// This file is written in JavaScript ES6 (ECMAScript 6)
import MasterViewModel from 'app/master-viewmodel.js';
import ko from 'knockout';

import 'app/components';

ko.applyBindings(new MasterViewModel(), document.getElementById('root'));