import AboutMe from "../components/AboutMe";
import SectionHeader from "../components/SectionHeader";

const AboutPage = () => {
    return (
        <div>
            <AboutMe isFullPage={true} />

            <section className="hobbies-section">
                <SectionHeader title="my-fun-facts" />
                <div className="fun-facts-list">
                    <div className="fact-item">I like to make 3D enviroments</div>
                    <div className="fact-item">I’m learning C++</div>
                    <div className="fact-item">I love movies</div>
                </div>
            </section>

            <style>{`
                .hobbies-section {
                    margin-top: 2rem;
                    padding-bottom: 4rem;
                }
                .fun-facts-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                .fact-item {
                    border: 1px solid var(--border-color);
                    padding: 0.5rem 1rem;
                    color: var(--gray);
                    font-size: 0.9rem;
                    transition: all 0.2s;
                }
                .fact-item:hover {
                    color: var(--text-white);
                    border-color: var(--text-white);
                }
            `}</style>
        </div>
    );
};
export default AboutPage;
