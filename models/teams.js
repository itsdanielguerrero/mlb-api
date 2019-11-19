//Definging my teams table
module.exports = (sequelize, Sequelize) => { 
    return sequelize.define('teams', {
        id: {
            type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
        },
        location: {type: Sequelize.STRING},
        mascot: {type: Sequelize.STRING},
        abbreviation: {type: Sequelize.STRING},
        league: {type: Sequelize.STRING},
        division: {type: Sequelize.STRING}
    })
}

/*CREATE TABLE teams (
  id INT AUTO_INCREMENT,
  location VARCHAR(255),
  mascot VARCHAR(255),
  abbreviation VARCHAR(3),
  league ENUM('AL', 'NL') NOT NULL,
  division ENUM('East', 'Central', 'West') NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);*/