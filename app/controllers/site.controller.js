const db = require("../models");
const Site = db.sites;
const Op = db.Sequelize.Op;

// Create and Save a new Site
exports.create = (req, res) => {
    // // Validate request
    // if (!req.body.title) {
    //     res.status(400).send({
    //         message: "Content can not be empty!"
    //     });
    //     return;
    // }
    // Create a Site
    const site = {
        siteId: req.body.siteId,
        siteName: req.body.siteName,
        cewisId: req.body.cewisId,
        status: req.body.status
    };
    // Save Site in the database
    Site.create(site)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Site."
            });
        });
};

// Retrieve all Sites from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
    Site.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving sites."
            });
        });
};

// Find a single Site with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Site.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Site with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Site with id=" + id
            });
        });
};

// Update a Site by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Site.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Site was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Site with id=${id}. Maybe Site was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Site with id=" + id
            });
        });
};

// Delete a Site with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Site.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Site was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Site with id=${id}. Maybe Site was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Site with id=" + id
            });
        });
};

// Delete all Sites from the database.
exports.deleteAll = (req, res) => {
    Site.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Sites were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all sites."
            });
        });
};

// Find all published Sites
exports.findAllPublished = (req, res) => {
    Site.findAll({ where: { status: 'a' } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving sites."
            });
        });
};
