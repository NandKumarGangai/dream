
const mapLifeStyleDetails = (output, {
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
    output.lifeStyleDetails = {
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
    };

    return output;
};

const mapReligiousDetails = (output, {
    dateAndTimeOfBirth,
    placeOfBirth,
    caste,
    subCaste,
    rassi,
    manglik,
}) => {
    output.religiousDetails = {
        dateAndTimeOfBirth,
        placeOfBirth,
        caste,
        subCaste,
        rassi,
        manglik,
    };

    return output;
};

const mapEducationAndCareer = (output, {
    highestEducation,
    educationDetails,
    occupation,
    company,
    companyType,
    annualIncome
}) => {
    output.educationAndCareer = {
        highestEducation,
        educationDetails,
        occupation,
        company,
        companyType,
        annualIncome
    };

    return output;
};

const mapFamilyDetails = (output, {
    fathersOccupation,
    mothersOccupation,
    noOfSisters,
    noOfBrothers
}) => {
    output.familyDetails = {
        fathersOccupation,
        mothersOccupation,
        noOfSisters,
        noOfBrothers
    };

    return output;
};

module.exports = {
    mapLifeStyleDetails,
    mapReligiousDetails,
    mapEducationAndCareer,
    mapFamilyDetails
}