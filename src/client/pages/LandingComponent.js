import _get from 'lodash/get';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Apis } from '../ServiceCalls';
import { HomePage } from '../components';

const LandingComponent = ({ history }) => {
    const dispatch = useDispatch();
    const userInfo = useSelector(_ => _.user);
    const [candidateProfiles, setCandidateProfiles] = useState([]);
    // const [userProfile, setUserProfile] = useState(defaultValues);

    useEffect(() => {
        async function fetchData() {
            const data = await Apis.getCandidateProfiles(userInfo, history, null, dispatch);
            console.log('data: ', data);
            setCandidateProfiles(_get(data, 'users', {}));
        }
        fetchData();
        return () => { };
    }, []);

    const props = {
        candidateProfiles,
        history
    }

    return (
        <HomePage { ...props }/>
    )
};

export default withRouter(LandingComponent);
