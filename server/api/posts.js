const router = require('express').Router()
const {Post} = require('../db/models')
module.exports = router

//need to add security logic to allow the user to only see their own posts
router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll()
    res.status(200).json(posts)
  } catch (err) {
    console.error(err)
  }
})

router.post('/:userId/:deviceId', async (req, res, next) => {
  try {
    await Post.create({
      postType: req.body.postType,
      sideEffects: req.body.sideEffects,
      effectiveness: req.body.effectiveness,
      pain: req.body.pain,
      overallSatisfaction: req.body.overallSatisfaction,
      otherComments: req.body.otherComments,
      deviceId: req.params.deviceId,
      userId: req.params.userId
    })
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
  }
})
