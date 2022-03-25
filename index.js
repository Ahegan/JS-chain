// database lib import
const sqlite3 = require('sqlite3').verbose();

// import local module for improved colored logging
const Color = require('./modules/Color.js');

// name of the database file
const dbname = 'chain.db'


// opens the databse
let db = new sqlite3.Database(dbname, sqlite3.OPEN_READWRITE, (err) => {
    // if an error occurs 
    if (err) {
        throw Color.fgRed + err + Color.reset;
    };

    // if it opens properly
    console.info(`${Color.fgGreen}Database succesfully started on OPEN_READWRITE mode from ${dbname} file ${Color.reset}\n`)
})



// close the databse
db.close((err) => {
    // if an error occurs 
    if (err) {
        throw err;
    };

    // if it closes properly
    console.info(`${Color.fgGreen}Database from  ${dbname} file succesfully closed ${Color.reset}\n`)
})