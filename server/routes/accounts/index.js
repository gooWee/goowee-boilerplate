var express = require('express')
var router = express.Router()

const exampleMsgCtrl = require('./controllers/exampleMsgCtrl')
const getUsersCtrl = require('./controllers/getUsersCtrl')

router.route('/example-message').get(exampleMsgCtrl)

router.route('/users').get(getUsersCtrl)

module.exports = router
