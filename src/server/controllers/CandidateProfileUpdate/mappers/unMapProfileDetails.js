const unMapBasicDetails = ({
    profileFor,
    name,
    gender,
    religion,
    mobileNumber: {
        number
    },
    email

}) => {
    return {
        basicDetails: {
            profileFor,
            name,
            gender,
            religion,
            number,
            email
        }
    };
};

const unMapLifeStyleDetails = ({
    age,
    height,
    weight,
    bloodGroup,
    bodyType,
    physicalStatus,
    maritalStatus,
    motherTongue,
    drink,
    diet,
    smoke
}) => {
    return {
        lifeStyleDetails: {
            age,
            height,
            weight,
            bloodGroup,
            bodyType,
            physicalStatus,
            maritalStatus,
            motherTongue,
            drink,
            diet,
            smoke
        }
    };
};

const unMapReligiousDetails = ({
    dateAndTimeOfBirth,
    placeOfBirth,
    caste,
    subCaste,
    rassi,
    manglik,
}) => {
    return {
        religiousDetails: {
            dateAndTimeOfBirth,
            placeOfBirth,
            caste,
            subCaste,
            rassi,
            manglik,
        }
    };
};

const unMapEducationAndCareer = ({
    highestEducation,
    educationDetails,
    occupation,
    company,
    companyType,
    annualIncome
}) => {
    return {
        educationAndCareer: {
            highestEducation,
            educationDetails,
            occupation,
            company,
            companyType,
            annualIncome
        }
    };
};

const unMapFamilyDetails = ({
    fathersOccupation,
    mothersOccupation,
    noOfSisters,
    noOfBrothers
}) => {
    return {
        familyDetails: {
            fathersOccupation,
            mothersOccupation,
            noOfSisters,
            noOfBrothers
        }
    };
};

module.exports = {
    unMapBasicDetails,
    unMapLifeStyleDetails,
    unMapReligiousDetails,
    unMapEducationAndCareer,
    unMapFamilyDetails
}