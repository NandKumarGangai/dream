import PageWrapper from '../../pages/Templates/PageWrapper';
import DisplayAllCandidates from './DisplayAllCandidates';

const HomePage = (props) => {
  return (
    <PageWrapper>
      <DisplayAllCandidates { ...props } />
    </PageWrapper>
  )
}

export default HomePage;
