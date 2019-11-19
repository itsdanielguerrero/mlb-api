//Defining my players table
module.exports = (sequelize, Sequelize, Teams) => {
    return sequelize.define('players', {
        id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        firstName: {type: Sequelize.STRING},
        lastName: {type: Sequelize.STRING},
        position: {type: Sequelize.STRING},
        throws: {type: Sequelize.ENUM('R','L','B')},
        hits: {type: Sequelize.ENUM('R','L','B')},
        currentTeamId: {type: Sequelize.INTEGER, reference: {model: Teams, key: 'id'}} //FK to teams
    })
}

/*
CREATE TABLE players (
  id INT AUTO_INCREMENT,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  position VARCHAR(10),
  throws ENUM('R','L','B'),
  hits ENUM('R','L','B'),
  currentTeamId INT NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY (currentTeamId) REFERENCES teams(id)
);
*/