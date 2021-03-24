import PageWrapper from '../../pages/Templates/PageWrapper';
import PersonalInformation from './PersonalInformation';

const CandidateProfile = (props) => {
    return (
        <PageWrapper>
            <PersonalInformation { ...props } />
        </PageWrapper>
    )
}

export default CandidateProfile;
