// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const fs = require("fs");
const path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    // Read  the db.json file and return all saved notes as JSON
    app.get("/api/notes", function(req, res) {
        const notes_db = (fs.readFileSync("./db/db.json", function(error) {
            if (error) throw error;
        }))
        res.send(JSON.parse(notes_db));
    });

};