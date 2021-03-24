
const unMapBasicDetails = ({
    basicDetails: {
        name,
        email,
        profileFor,
        religion,
        gender,
        mobileNumber
    } = {}
}) => ({
    name,
    email,
    profileFor,
    religion,
    gender,
    mobileNumber
});

module.exports = {
    unMapBasicDetails
}