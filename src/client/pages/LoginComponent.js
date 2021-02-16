import { withRouter } from 'react-router-dom';
import { LoginPage } from '../components';
import { Apis } from '../ServiceCalls';

const initialValues = {
    password: 'Nandu@1234',
    email: 'nandkumargangai@gmail.com',
};

const LoginComponent = ({ history }) => {

    const onSubmit = (values, { resetForm }) => {
        console.log(JSON.stringify(values, null, 2));
        Apis.userLogin(values, history, resetForm)
    };

    const props = {
        initialValues,
        onSubmit
    };

    return (
        <LoginPage {...props} />
    );
};

export default withRouter(LoginComponent);
