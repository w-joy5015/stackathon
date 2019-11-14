const Sequelize = require('sequelize')
const db = require('../db')

const Device = db.define('device', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  manufacturerUrl: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJigHRateAPTSp8MjH3M6crq5K8_W8os2tuuwYtOninnHFCTPWQg&s'
  },
  info: {
    type: Sequelize.TEXT
  }
})

module.exports = Device
