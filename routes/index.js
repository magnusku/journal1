const express = require("express");
const {doImport, getJournals} = require("../service/journal.js");

const router = express.Router();
router.use("/", express.static("webapp/dist"));
router.use("/upload", express.static("public"));

router.get("/api/journal", getJournals);
router.post("/api/journal/import", doImport);


router.use((error, request, response, next) => {
    console.error(error.stack);
    response.status(error.status).send(error.message);
});

module.exports = router;