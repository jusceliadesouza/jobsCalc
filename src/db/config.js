const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

//conexção do BD
module.exports = () => open({
    filename: './database.sqlite',
    driver: sqlite3.Database
})