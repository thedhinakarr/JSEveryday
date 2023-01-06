
import { body, validationResult } from "express-validator";

function userRegistrationValidations() {
    return [
        body('username', "Username Cannot Be Empty").notEmpty().isLength({ min: 2 }),
        body("email", "Email is Invalid").isEmail(),
        body("phone", "Phone Number is Invalid").isMobilePhone(),
        body("location", "Location Cannot be Empty").notEmpty().isLength({ min: 2 }),
        body('password',"Password Cannot be Empty").isLength({ min: 5 }),
        body('password2').custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Password confirmation does not match password');
            }
            // Indicates the success of this synchronous custom validator
            return true;
        })
    ]
}
function userLoginValidations(){
    body("email", "Email is Invalid").isEmail(),
    body('password',"Password Cannot be Empty").notEmpty()
}

function errorMiddleware(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    return next();
}

export { userRegistrationValidations, userLoginValidations, errorMiddleware }