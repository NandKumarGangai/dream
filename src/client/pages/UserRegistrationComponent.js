import { withRouter } from 'react-router-dom';
import { UserRegistrationPage } from '../components';
import { Apis } from '../ServiceCalls';

const initialValues = {
    firstName: 'Nandkumar',
    lastName: 'Gangai',
    email: 'nandkumargangai@gmail.com',
    password: 'Nandu@1234',
    confirmPassword: 'Nandu@1234'
};

const UserRegistrationComponent = ({ history }) => {

    const onSubmit = (values, { resetForm }) => {
        console.log(JSON.stringify(values, null, 2));
        Apis.addNewUser(values, history, resetForm);
        // fetch('/test', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(values)
        // })
        //     .then(response => response.json())
        //     .then(response => console.log('response: ', response))
        //     .catch(err => console.error(err));
    };

    const props = {
        initialValues,
        onSubmit
    };

    return (
        <UserRegistrationPage {...props} />
    );
};

export default withRouter(UserRegistrationComponent);
