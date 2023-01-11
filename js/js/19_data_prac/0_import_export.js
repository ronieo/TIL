// ### 가져오기, 내보내기

import _ from 'lodash'; // From `node_modules!`
import getType from './getType' // getType.js
import getRandom from './getRandom' // getRandom.js

console.log('import lodash: ',_.camelCase('save the world'));
console.log('import getType: ',getType([1, 2, 3]));
console.log('import getRandom: ',getRandom(), getRandom());