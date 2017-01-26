const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(
    config.database, config.username, config.password, config
  );
}

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

db.users = require('../models/user.js')(sequelize, Sequelize);
db.workoutPrograms = require('../models/workoutprogram.js')(sequelize, Sequelize);
db.days = require('../models/day.js')(sequelize, Sequelize);
db.repSchemes = require('../models/repscheme.js')(sequelize, Sequelize);
db.sessions = require('../models/session.js')(sequelize, Sequelize);
db.teams = require('../models/team.js')(sequelize, Sequelize);

// associations
db.users.hasMany(db.workoutPrograms)
db.workoutPrograms.belongsTo(db.users)

db.workoutPrograms.hasMany(db.days)
db.days.belongsTo(db.workoutPrograms)

db.days.hasMany(db.repSchemes)
db.repSchemes.belongsTo(db.days)

db.workoutPrograms.hasMany(db.sessions)
db.sessions.belongsTo(db.workoutPrograms)
db.sessions.belongsTo(db.repSchemes)

module.exports = db;
