import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SocialSidebar from './SocialSidebar';
import InteractiveBackground from './InteractiveBackground';

const Layout = () => {
    return (
        <div className="layout">
            <InteractiveBackground />
            <SocialSidebar />
            <Navbar />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
