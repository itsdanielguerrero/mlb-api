const Sequelize = require('sequelize') //importing sequelize
const allConfigs = require('../config/sequelize') //importing configuration for connectin to DB
const TeamsModel = require('./teams')
const GamesModel = require('./games')
const PlayersModel = require('./players')
const HittingStatsModel = require('./hittingStats')
const PitchingStatsModel = require('./pitchingStats')
const Op = Sequelize.Op //importing operators for sequelize (and, or, <, >... etc)

const config = allConfigs['development']

//connecting to the DB
const connection = new Sequelize (config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
})

//set up models for export
const Teams = TeamsModel(connection, Sequelize)
const Games = GamesModel(connection, Sequelize, Teams)
const Players = PlayersModel(connection, Sequelize, Teams)
const HittingStats = HittingStatsModel(connection, Sequelize, Teams, Games, Players)
const PitchingStats = PitchingStatsModel(connection, Sequelize, Teams, Games, Players)

//define relationships

Players.belongsTo(Teams)
Teams.hasMany(Players)

/*
Games.belongsTo(Teams)
HittingStats.belongsTo(Players)
HittingStats.belongsTo(Games)
HittingStats.belongsTo(Teams)
PitchingStats.belongsTo(Players)
PitchingStats.belongsTo(Games)
PitchingStats.belongsTo(Teams)
Teams.hasMany(Games)
Teams.hasMany(Players)
Teams.hasMany(HittingStats)
Teams.hasMany(PitchingStats)
*/

module.exports = { //exporting my models and Operators for querying
    Teams,
    Games,
    Players,
    HittingStats,
    PitchingStats,
    Op
}