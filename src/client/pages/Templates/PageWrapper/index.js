import { withRouter } from 'react-router-dom';
import NavigationBar from '../../../components/NavigationBar';
import './style.css';

const PageWrapper = ({ children, history }) => {
    return (
        <div>
            <NavigationBar history={history} />
            <div className="mt-6">
                { children }
            </div>
        </div>
    )
}

export default withRouter(PageWrapper);
