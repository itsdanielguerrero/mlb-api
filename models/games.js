//Defining my games table
module.exports = (sequelize, Sequelize, Teams) => {
    return sequelize.define('games', {
        id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        homeTeamId: {type: Sequelize.INTEGER},
        awayTeamId: {type: Sequelize.INTEGER},
        homeScore: {type: Sequelize.INTEGER, reference: {model: Teams, key: 'id'}}, //FK to Teams
        awayScore: {type: Sequelize.INTEGER, reference: {model: Teams, key: 'id'}},
        startTime: {type: Sequelize.DATE}
    })
}

/*
CREATE TABLE games (
  id INT AUTO_INCREMENT,
  homeTeamId INT NOT NULL,
  awayTeamId INT NOT NULL,
  homeScore INT,
  awayScore INT,
  startTime TIMESTAMP NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY (homeTeamId) REFERENCES teams(id),
  FOREIGN KEY (awayTeamId) REFERENCES teams(id)
);
*/