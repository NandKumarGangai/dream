import HomePage from './HomePage';
import './style.css';

const Glassmorphism = () =>
(<div className='landing-page-container'>
    <div className="card">{'Nandkumar Gangai'}</div>
</div>);

const Neumorph = () =>
    <div className='flower-container'>
        <div className="flower">
            {'Nandkumar Gangai'}
        </div>
        <div>
            <div class="balloon"></div>
            <div class="balloon"></div>
            <div class="balloon"></div>
            <div class="balloon"></div>
            <div class="balloon"></div>
            <div class="balloon"></div>
            <div class="balloon"></div>
            <div class="balloon"></div>
        </div>
    </div>;

const Neumorph2 = () =>
    <div className='vd-card-container'>
        <div className="vd-card">
            {'Lorem, ipsum.'}
        </div>
        <div>
            <div class="balloon"></div>
            <div class="balloon"></div>
            <div class="balloon"></div>
            <div class="balloon"></div>
            <div class="balloon"></div>
            <div class="balloon"></div>
            <div class="balloon"></div>
            <div class="balloon"></div>
        </div>
    </div>;

const LandingPage = () => {
    return (
        // <Glassmorphism />
        // <Neumorph />
        // <Neumorph2 />
        <HomePage />
    )
}

export default LandingPage;
