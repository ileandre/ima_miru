const { Router } = require('express');
const showsRouter = require('./shows');
const usersRouter = require('./users');

const router = Router();

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRouter);
// if it has /shows, look at the shows routes
router.use('/shows', showsRouter);

module.exports = router