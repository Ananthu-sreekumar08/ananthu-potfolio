import Projects from '../components/Projects';

const ProjectsPage = () => {
    return (
        <div>
            {/* Reusing the Projects component but could add more full-page specific things here */}
            <div style={{ marginTop: '2rem' }}>
                <Projects />
            </div>
        </div>
    );
};
export default ProjectsPage;
