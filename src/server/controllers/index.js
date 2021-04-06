const { userLoginController } = require('./UserLogin');
const { userRegistrationController } = require('./UserRegistration');
const { userProfileUpdateController } = require('./CandidateProfileUpdate/index');
const { getUserProfileInfoController } = require('./GetUserProfileInfo');
const { getCandidateProfilesController } = require('./GetCandidateProfiles');

module.exports = {
    userLoginController,
    userRegistrationController,
    userProfileUpdateController,
    getUserProfileInfoController,
    getCandidateProfilesController
}