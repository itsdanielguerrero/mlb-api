//Defining my hittingStats table
module.exports = (sequelize, Sequelize, Teams, Games, Players) => {
    return sequelize.define('hittingStats', {
        playerId: {type: Sequelize.INTEGER, reference: {model: Players, key: 'id'}, primaryKey: true}, //PK and FK to players
        gameId: {type: Sequelize.INTEGER, reference: {model: Games, key: 'id'}, primaryKey: true}, //PK and FK to games
        teamId: {type: Sequelize.INTEGER, reference: {model: Teams, key: 'id'}}, //FK to teams
        atBats: {type: Sequelize.INTEGER},
        runs: {type: Sequelize.INTEGER},
        hits: {type: Sequelize.INTEGER},
        doubles: {type: Sequelize.INTEGER},
        triples: {type: Sequelize.INTEGER},
        homeRuns: {type: Sequelize.INTEGER},
        runsBattedIn: {type: Sequelize.INTEGER},
        walks: {type: Sequelize.INTEGER},
        strikeOuts: {type: Sequelize.INTEGER},
        steals: {type: Sequelize.INTEGER},
    })
}

/*
CREATE TABLE hittingStats (
  playerId INT NOT NULL,
  gameId INT NOT NULL,
  teamId INT NOT NULL,
  atBats INT DEFAULT 0,
  runs INT DEFAULT 0,
  hits INT DEFAULT 0,
  doubles INT DEFAULT 0,
  triples INT DEFAULT 0,
  homeRuns INT DEFAULT 0,
  runsBattedIn INT DEFAULT 0,
  walks INT DEFAULT 0,
  strikeOuts INT DEFAULT 0,
  steals INT DEFAULT 0,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(playerId, gameId),
  FOREIGN KEY (playerId) REFERENCES players(id),
  FOREIGN KEY (gameId) REFERENCES games(id),
  FOREIGN KEY (teamId) REFERENCES teams(id)
);
*/