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

    //Writing and saving a new note note to save
    app.post("/api/notes", function(req, res) {

        //Receive a new note to save on the request body
        const title = req.body.title;
        const text = req.body.text;

        //Add the new note to the db.json file,
        const notes_db = JSON.parse((fs.readFileSync("./db/db.json", function(error) {
                if (error) throw error;
            })))
            // The note id is determined by incrementing the last note id
        const lastNote = notes_db[notes_db.length - 1];
        notes.push({
            "title": title,
            "text": text,
        });
        fs.writeFileSync("./db/db.json", JSON.stringify(notes_db), function(error) {
                if (error) throw error;
            })
            //Return the new note to the client.
        res.send(notes_db);
    });

};