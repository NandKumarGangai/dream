import * as yup from 'yup';
import {
    emailValidator,
    passwordValidator,
    nameValidator
} from '../../Helpers/Validators';

export const validate = {
    email: emailValidator,
    password: passwordValidator,
    firstName: (name) => nameValidator('First Name', name),
    lastName: (name) => nameValidator('Last Name', name),
    re_password: passwordValidator
};

export const validationSchema = yup.object({
    profileFor: yup
        .string('Please select')
        .required('Profile for is required'),
    name: yup
        .string('Enter your first name')
        .required('Email is required'),
    gender: yup
        .string('Please select gender')
        .required('Gender is required'),
    religion: yup
        .string('Enter you religion')
        .required('Religion is required'),
    mobileNumber: yup.string('Enter your mobile number')
        .required('Mobile number is required')
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, 'Must be exactly 10 digits')
        .max(10, 'Must be exactly 10 digits'),
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
    confirmPassword: yup
        .string()
        .required("Please confirm your password")
        .when("password", {
            is: password => (password && password.length > 0 ? true : false),
            then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
        })
});