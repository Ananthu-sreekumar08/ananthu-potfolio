import SkillGroup from './SkillGroup';
import SectionHeader from './SectionHeader';
import skillsData from '../data/skills.json';

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <SectionHeader title="skills" />
            <div className="skills-content">
                <div className="skills-graphic">
                    {/* Decorative graphic place holder */}
                    <div className="decoration-box"></div>
                </div>
                <div className="skills-grid">
                    {Object.entries(skillsData).map(([category, items]) => (
                        <SkillGroup key={category} category={category} skills={items} />
                    ))}
                </div>
            </div>
            <style>{`
        .skills-section {
          padding: 4rem 0;
        }
        .skills-content {
            display: flex;
            gap: 2rem;
            justify-content: space-between;
        }
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          max-width: 60%;
        }
        .skills-graphic {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .decoration-box {
            width: 150px;
            height: 150px;
            border: 1px solid var(--primary-color);
            position: relative;
        }
        .decoration-box::before {
             content: '';
             position: absolute;
             top: 20px;
             left: 20px;
             width: 100px;
             height: 100px;
             border: 1px solid var(--gray);
        }

        @media (max-width: 768px) {
            .skills-content {
                flex-direction: column;
            }
            .skills-grid {
                max-width: 100%;
            }
            .skills-graphic {
                display: none;
            }
        }
      `}</style>
        </section>
    );
};

export default Skills;
