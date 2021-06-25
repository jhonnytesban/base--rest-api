const { Router } = require('express')
const router = Router()

const { getAllUser, createUser, putUser, patchUser, deleteUser } = require('../controller/user.controller')

router.get('/', getAllUser)
router.post('/', createUser)
router.put('/:id', putUser)
router.patch('/:id', patchUser)
router.delete('/:id', deleteUser)

module.exports = router