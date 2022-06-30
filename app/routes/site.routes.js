module.exports = app => {
    const sites = require("../controllers/site.controller.js");
    var router = require("express").Router();

    // Create a new Site
    router.post("/", sites.create);
    // Retrieve all Site
    router.get("/", sites.findAll);
    // Retrieve all published Site
    router.get("/published", sites.findAllPublished);
    // Retrieve a single Site with id
    router.get("/:id", sites.findOne);
    // Update a Site with id
    router.put("/:id", sites.update);
    // Delete a Site with id
    router.delete("/:id", sites.delete);
    // Create a new Site
    router.delete("/", sites.deleteAll);
    app.use('/api/sites', router);
};
