const csv = require("csvtojson");
const { Readable } = require("stream");
const db = require("../database");

module.exports = { 
    doImport: (request, response) => {
        console.log("DO IMPORT");

        if (!request.files || Object.keys(request.files).length === 0) {
            console.log("file exists");
            return response.status(400).send("No files where uploaded");
        }

        const file = request.files.csvfile;

        console.log(file);

        csv({
            delimiter: ";"
        })
        .fromStream(Readable.from(file.data))
        .subscribe(async csvRow =>  {
            try {
                await db.query(`INSERT INTO registry (
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

                response.status(200);
            } catch(e) {
                console.error(e.message);
            }
        }, error => {
            console.error(error.stack);
            response.status(error.status);
            return;
        });
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