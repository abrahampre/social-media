const router = require('express').Router();

//set up all get and post ad /api/users
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller')


router
.route('/')
.get(getAllUser)
.post(createUser);

//set up get One, Put and  Delete

router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

module.exports = router;