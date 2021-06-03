const csv = require("csvtojson");
const { Readable } = require("stream");
const db = require("../database");

module.exports = { 
    doImport: (request, response) => {
        console.log("DO IMPORT");

        if (!request.files || Object.keys(request.files).length === 0) {
            return response.status(400).send("No files where uploaded");
        }

        const file = request.files.csvfile;

        if (!file.name.endsWith(".csv")) {
            return response.status(400).send("Only csv files are supported");
        }

        csv({
            delimiter: ";"
        })
        
        .fromStream(Readable.from(file.data))
        .subscribe( csvRow =>  {
            try {
                db.query(`INSERT INTO registry (
                    personalNumber, 
                    firstName, 
                    lastName, 
                    birthDay, 
                    address
                ) 
                values ($1, $2, $3, $4, $5)
                ON CONFLICT (personalNumber)
                DO UPDATE SET
                firstName = $2,
                lastName = $3,
                birthDay = $4,
                address = $5`, Object.values(csvRow));
            } catch(e) {
                console.error(e.message);
            }
        }).on("done", error => error ? response.status(error.status) : response.status(200));
    },

    getJournals: async (request, response) => {
        console.log("GET JOURNALS");
        try {
            const result = await db.query("SELECT * FROM registry ORDER BY birthDay");
            response.status(200).send(result.rows);
        } catch(e) {
            console.error(e.message)
            response.status(e.status).send("Could not read journals");
        }
    }

};