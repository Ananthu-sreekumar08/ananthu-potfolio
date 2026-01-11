import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "projects",
                element: <ProjectsPage />,
            },
            {
                path: "skills",
                element: <SkillsPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "contact",
                element: <ContactPage />,
            },
        ],
    },
], {
    basename: "/ananthu-potfolio"
});
