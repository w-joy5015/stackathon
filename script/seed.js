'use strict'

const db = require('../server/db')
const {User, Device, Post} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'jane-doe@email.com',
      password: '123',
      patientOrCaregiver: 'patient'
    }),
    User.create({
      email: 'bob-smith@email.com',
      password: '123',
      patientOrCaregiver: 'caregiver'
    })
  ])

  const devices = await Promise.all([
    Device.create({
      name: 'Nexplanon',
      manufacturerUrl: 'https://www.nexplanon.com/',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIy822m-VCNACR4wQMjqOIj9o03b-6doz_zFN8vOYbUR0iy4up&s',
      info:
        'Birth control implant inserted under the skin of the upper arm, effective for up to 4 years.'
    }),
    Device.create({
      name: 'MIC-KEY button',
      manufacturerUrl: 'https://www.mic-key.com/',
      imageUrl:
        'http://pandaenvos.nl/wp-content/uploads/2019/05/MIC-KEY-button-1000x600.jpg',
      info:
        'Gastrostomy feeding tube used to access the stomach for providing nourishment, fluids, and medications.'
    }),
    Device.create({
      name: 'Adapta Pacemaker',
      manufacturerUrl:
        'https://www.medtronic.com/us-en/healthcare-professionals/products/cardiac-rhythm/pacemakers/adapta.html',
      imageUrl:
        'https://img.medicalexpo.com/images_me/photo-g/70691-9969954.jpg',
      info: 'Internal pacemaker for bradycardia (slow heart rate)'
    })
  ])

  const posts = await Promise.all([
    Post.create({
      postType: 'retrospective',
      sideEffects: ['fatigue'],
      effectiveness: 'very effective',
      pain: 2,
      overallSatisfaction: 8,
      deviceId: 1,
      userId: 1
    })
  ])

  console.log(
    `seeded ${users.length} users, ${posts.length} posts, and ${
      devices.length
    } devices`
  )
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
