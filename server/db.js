const db = {};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

db.users = require('../models/user.js')(sequelize, Sequelize);
db.workoutPrograms = require('../models/workoutprogram.js')(sequelize, Sequelize);
db.days = require('../models/day.js')(sequelize, Sequelize);
db.repSchemes = require('../models/repscheme.js')(sequelize, Sequelize);
db.sessions = require('../models/session.js')(sequelize, Sequelize);

// associations
db.users.hasMany(db.workoutPrograms)
db.workoutPrograms.belongsTo(db.users)

db.workoutPrograms.hasMany(db.days)
db.days.belongsTo(db.workoutPrograms)

db.days.hasMany(db.repSchemes)
db.repSchemes.belongsTo(db.days)

db.workoutPrograms.hasMany(db.sessions)
db.sessions.belongsTo(db.workoutPrograms)