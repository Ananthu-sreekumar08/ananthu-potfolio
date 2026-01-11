import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <Projects limit={3} />
            <Skills />
            <AboutMe />
            <Contact />
        </>
    );
};
export default Home;
