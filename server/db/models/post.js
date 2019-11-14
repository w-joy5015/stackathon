const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  postType: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['longitudinal', 'retrospective']]
    }
  },
  sideEffects: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  effectiveness: {
    type: Sequelize.STRING,
    validate: {
      isIn: [
        [
          'very effective',
          'moderately effective',
          'somewhat effective',
          'not effective at all'
        ]
      ]
    }
  },
  pain: {
    type: Sequelize.INTEGER
  },
  overallSatisfaction: {
    type: Sequelize.INTEGER
  },
  otherComments: {
    type: Sequelize.TEXT
  }
})

module.exports = Post
