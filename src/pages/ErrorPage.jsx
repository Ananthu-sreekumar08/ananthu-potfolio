import { Link, useRouteError } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <SectionHeader title="error::404" />

            <div className="gb-shell minimal" style={{ marginBottom: '2rem', width: 'fit-content' }}>
                <div className="gb-screen-bezel">
                    <div className="gb-screen-glass" style={{ minWidth: '300px', minHeight: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h2 style={{ fontFamily: '"Press Start 2P", cursive', color: '#1a1025' }}>
                            GAME OVER
                        </h2>
                    </div>
                </div>
            </div>

            <p style={{ color: 'var(--gray)', marginBottom: '1rem', fontFamily: '"Fira Code", monospace' }}>
                {error.statusText || error.message}
            </p>

            <Link to="/" className="btn">
                INSERT COIN (HOME)
            </Link>
        </div>
    );
};

export default ErrorPage;
