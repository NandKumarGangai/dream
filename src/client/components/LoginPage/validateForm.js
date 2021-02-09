import * as yup from 'yup';
import { requiredFieldValidator } from '../../Helpers/Validators';

export const validate = {
    email: value => requiredFieldValidator('Email', value),
    password: value => requiredFieldValidator('Password', value)
};

export const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .required("Please enter your password")
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
    // confirmPassword: yup
    //     .string()
    //     .required("Please confirm your password")
    //     .when("password", {
    //         is: password => (password && password.length > 0 ? true : false),
    //         then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
    //     })
});