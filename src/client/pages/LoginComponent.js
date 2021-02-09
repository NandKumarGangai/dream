import { LoginPage } from '../components';

const initialValues = {
    password: '',
    email: '',
};

const LoginComponent = () => {

    const onSubmit = values => {
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
    };

    const props = {
        initialValues,
        onSubmit
    };

    return (
        <LoginPage {...props} />
    );
};

export default LoginComponent;
