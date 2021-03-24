import DisplayCandidate from '../DisplayCandidate';
import './style.css';

const maps = [
    {
        name: 'user1'
    },
    {
        name: 'user2'
    },
    {
        name: 'user3'
    },
    {
        name: 'user4'
    },
    {
        name: 'user5'
    },
    {
        name: 'user6'
    },
    {
        name: 'user7'
    },
    {
        name: 'user8'
    },
    {
        name: 'user9'
    }
]
const DisplayAllCandidates = () => {
    return (
        <div className='flex-center'>
            {
                maps.map(user => <DisplayCandidate key={user.name} {...user} />)
            }
        </div>
    )
}

export default DisplayAllCandidates;
