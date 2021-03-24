import _get from 'lodash/get';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CandidateProfile } from '../components';
import { Apis } from '../ServiceCalls';

const basicDetails = {
    profileFor: 'Self',
    name: 'Nandkumar Gangai',
    gender: 'Male',
    religion: 'Hindu',
    mobileNumber: '9876543210',
    email: 'nandkumargangai@gmail.com',
    password: 'Nandu@1234',
    confirmPassword: 'Nandu@1234'
};

const initialValues = {
    age: '',
    height: '',
    weight: '',
    bloodGroup: '',
    bodyType: '',
    physicalStatus: '',
    maritalStatus: '',
    motherTongue: '',
    drink: '',
    diet: '',
    smoke: '',

    dateAndTimeOfBirth: '',
    placeOfBirth: '',
    caste: '',
    subCaste: '',
    rassi: '',
    manglik: '',

    highestEducation: '',
    educationDetails: '',
    occupation: '',
    company: '',
    companyType: '',
    annualIncome: '',

    fathersOccupation: '',
    mothersOccupation: '',
    noOfSisters: '',
    noOfBrothers: '',

    ...basicDetails
};

const lifeStyleDetails = {
    age: '22',
    height: '160',
    weight: '65',
    bloodGroup: 'A',
    bodyType: 'N',
    physicalStatus: 'N',
    maritalStatus: 'S',
    motherTongue: 'MAR',
    drink: 'N',
    diet: 'V',
    smoke: 'N'
};

const religiousDetails = {
    dateAndTimeOfBirth: '12/03/1996 06:00',
    placeOfBirth: 'Pune',
    caste: 'Caste',
    subCaste: 'subCaste',
    rassi: 'rassi',
    manglik: 'N'
}

const educationAndCareer = {
    highestEducation: 'B',
    educationDetails: 'CSE',
    occupation: 'Engineer',
    company: 'Company',
    companyType: 'P',
    annualIncome: '500000'
}

const familyDetails = {
    fathersOccupation: 'Engineer',
    mothersOccupation: 'House Wife',
    noOfSisters: '1',
    noOfBrothers: '1'
}

const defaultValues = {
    ...basicDetails,
    ...lifeStyleDetails,
    ...religiousDetails,
    ...educationAndCareer,
    ...familyDetails
};

const ProfileComponent = ({ history }) => {
    const dispatch = useDispatch();

    const userInfo = useSelector(_ => _.user);
    const [userProfile, setUserProfile] = useState(defaultValues);

    useEffect(() => {
        async function fetchData() {
            const data = await Apis.getUserProfile(userInfo, history, null, dispatch);

            setUserProfile(_get(data, 'userProfile', initialValues));
        }
        fetchData();
        return () => { };
    }, []);

    const props = {
        userInfo,
        initialValues: defaultValues,
        onSubmit: Apis.updateUserProfile,
        history
    };

    return (
        <CandidateProfile {...props} />
    );
};

export default withRouter(ProfileComponent);
