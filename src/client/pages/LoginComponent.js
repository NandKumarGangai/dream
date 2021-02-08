import { useFormik } from 'formik';
import * as yup from 'yup';
import { LoginPage } from '../components';

const validationSchema = yup.object({
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

const LoginComponent = () => {
    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
            fetch('/test', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            .then(response => response.json())
            .then(response => console.log('response: ', response))
            .catch(err => console.error(err));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <LoginPage formik={formik} />
        </form>
    );
};

export default LoginComponent;


