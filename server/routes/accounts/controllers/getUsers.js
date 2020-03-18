const { getUsers } = require('../../../../db/queries/users')

async function getUsersCtrl(req, res) {
  const users = await getUsers()

  return res.json({ success: true, users })
}

module.exports = getUsersCtrl
