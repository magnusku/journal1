const csv = require("csvtojson");
const { Readable } = require("stream");
const db = require("../database");

async function saveToDB(fileData) {
    await csv({
        delimiter: ";"
    })
    .fromStream(Readable.from(fileData))
    .subscribe( csvRow =>  {
        try {
            db.query(`INSERT INTO registry (
                personalNumber, 
                firstName, 
                lastName, 
                birthDay, 
                address,
                changed
            ) 
            values ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP)
            ON CONFLICT (personalNumber)
            DO UPDATE SET
            firstName = $2,
            lastName = $3,
            birthDay = $4,
            address = $5,
            changed = CURRENT_TIMESTAMP`, Object.values(csvRow));
        } catch(e) {
            console.error(e.message);
            response.status(400).send("Failed to execute database query")
        }
    });
}

module.exports = { 
    doImport: (request, response) => {
        if (!request.files || Object.keys(request.files).length === 0) {
            response.status(400).send("No files where uploaded");
        }

        const file = request.files.csvfile;

        if (!file.name.endsWith(".csv")) {
            response.status(400).send("Only csv files are supported");
        }

        (async () => {
            await saveToDB(file.data);
            response.sendStatus(200);
        })()
        
    },

    getJournals: async (request, response) => {
        console.log("GET JOURNALS");
        try {
            const result = await db.query("SELECT * FROM registry ORDER BY changed DESC");
            response.status(200).send(result.rows);
        } catch(e) {
            console.error(e.message)
            response.status(e.status).send("Could not read from registry");
        }
    }

};