function exampleMsgCtrl(req, res) {
  return res.json({ success: true, msg: 'Hello, world!' })
}

module.exports = exampleMsgCtrl
