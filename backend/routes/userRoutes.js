import { Router } from 'express';
import { signUpController, signinController} from "../controller/userController.js"
import verifyToken from '../middlewares/verifyToken.js';
const router = Router({mergeParams: true});



router.post('/signup', signUpController)
router.post('/signin', signinController)


export default router;
