const { Router } = require('express')
const controllers = require('../controllers/shows')
const restrict = require('../helpers/restrict')

const router = Router()
router.get('/', controllers.getShows)
router.get('/:id', controllers.getShow)
// SET THE BOTTOM 3 AS RESTRICT
router.post('/', controllers.createShow)
router.put('/:id', controllers.updateShow)
router.delete('/:id', controllers.deleteShow)


module.exports = router