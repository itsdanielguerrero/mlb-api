//Defining my pitchingStats table
module.exports = (sequelize, Sequelize, Teams, Games, Players) => {
    return sequelize.define('pitchingStats', {
        playerId: {type: Sequelize.INTEGER, reference: {model: Players, key: 'id'}, primaryKey: true}, //PK and FK to Players
        gameId: {type: Sequelize.INTEGER, reference: {model: Games, key: 'id'}, primaryKey: true},//PK and FK to Games
        teamId: {type: Sequelize.INTEGER, reference: {model: Teams, key: 'id'}}, //FK to Teams
        win: {type: Sequelize.INTEGER},
        inningsPitched: {type: Sequelize.FLOAT},
        hits: {type: Sequelize.INTEGER},
        runs: {type: Sequelize.INTEGER},
        earnedRuns: {type: Sequelize.INTEGER},
        walks: {type: Sequelize.INTEGER},
        strikeOuts: {type: Sequelize.INTEGER}
    })
}

/*
CREATE TABLE pitchingStats (
  playerId INT NOT NULL,
  gameId INT NOT NULL,
  teamId INT NOT NULL,
  win TINYINT DEFAULT 0,
  inningsPitched DECIMAL(3,1),
  hits INT DEFAULT 0,
  runs INT DEFAULT 0,
  earnedRuns INT DEFAULT 0,
  walks INT DEFAULT 0,
  strikeOuts INT DEFAULT 0,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(playerId, gameId),
  FOREIGN KEY (playerId) REFERENCES players(id),
  FOREIGN KEY (gameId) REFERENCES games(id),
  FOREIGN KEY (teamId) REFERENCES teams(id)
);
*/