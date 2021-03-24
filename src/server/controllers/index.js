const { userLoginController } = require('./UserLogin');
const { userRegistrationController } = require('./UserRegistration');
const { userProfileUpdateController } = require('./UserProfileUpdate');
const { getUserProfileInfoController } = require('./GetUserProfileInfo');
const { getCandidateProfilesController } = require('./GetCandidateProfiles');

module.exports = {
    userLoginController,
    userRegistrationController,
    userProfileUpdateController,
    getUserProfileInfoController,
    getCandidateProfilesController
}