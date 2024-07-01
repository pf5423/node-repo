// local variable
const secret = 'secret code'

// variables to be shared
const public = 'public'
const word = 'word'

// access the module object and configure the exports object
module.exports = { public, word }

// alternate ways to add items to the export object
module.exports.items = [45, 'e']

const person = {
    name: "frank"
}

module.exports.randomPerson = person