import express from 'express'
import userCtrl from '../controllers/social.user.controller'
import authCtrl from '../controllers/social.auth.controller'

const router = express.Router()

router.route('/api/social/users')
  .get(userCtrl.list)
  .post(userCtrl.create)

router.route('/api/social/users/photo/:userId')
  .get(userCtrl.photo, userCtrl.defaultPhoto)
router.route('/api/social/users/defaultphoto')
  .get(userCtrl.defaultPhoto)

router.route('/api/social/users/follow')
    .put(authCtrl.requireSignin, userCtrl.addFollowing, userCtrl.addFollower)
router.route('/api/social/users/unfollow')
    .put(authCtrl.requireSignin, userCtrl.removeFollowing, userCtrl.removeFollower)

router.route('/api/social/users/findpeople/:userId')
   .get(authCtrl.requireSignin, userCtrl.findPeople)

router.route('/api/social/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)

router.param('userId', userCtrl.userByID)

export default router
