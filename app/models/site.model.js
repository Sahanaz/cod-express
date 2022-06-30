module.exports = (sequelize, Sequelize) => {
    const Site = sequelize.define("site", {
        siteId: {
            type: Sequelize.STRING
        },
        siteName: {
            type: Sequelize.STRING
        },
        cewisId: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.ENUM,
            values: ['o', 'c']
        },
        createdAt: {
            allowNull: false,
            defaultValue: Sequelize.fn('now'),
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            defaultValue: Sequelize.fn('now'),
            type: Sequelize.DATE
        }
    });
    return Site;
};