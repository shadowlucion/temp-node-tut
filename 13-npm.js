// npm -i <packageName>
// for local download


// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)


// package.json - manifest file(stores important infor about package/project)
// manual approad (create in root)
// npm init (step by step press enter)
// npm init -y (everything default)
// npm i lodash

const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);