import SectionHeader from './SectionHeader';
import { Link } from 'react-router-dom';

const AboutMe = ({ isFullPage = false }) => {
    return (
        <section id="about" className="about-section">
            <SectionHeader title="about-me" />
            <div className="about-content">
                <div className="about-text">
                    <p>Hello, i’m Ananthu Sreekumar!</p>
                    <br />
                    <p>
                        I’m a self-taught front-end developer based in India. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                    </p>
                    <br />
                    <p>
                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                    </p>
                    <br />
                    {!isFullPage && <Link to="/about" className="btn">Read more -&gt;</Link>}
                </div>
                <div className="about-image">
                    <div className="image-placeholder"></div>
                </div>
            </div>
            <style>{`
        .about-section {
          padding: 4rem 0;
        }
        .about-content {
          display: flex;
          gap: 4rem;
          align-items: center;
        }
        .about-text {
          flex: 1;
          color: var(--gray);
          line-height: 1.6;
        }
        .about-image {
            flex: 1;
            display: flex;
            justify-content: center;
        }
        .image-placeholder {
            max-width: 300px;
            width: 100%;
            height: 350px; // Portrait aspect
            border: 1px solid var(--primary-color);
            background: linear-gradient(180deg, rgba(199, 120, 221, 0.1) 0%, rgba(30, 31, 36, 0) 100%);
        }
         @media (max-width: 768px) {
            .about-content {
                flex-direction: column;
            }
         }
      `}</style>
        </section>
    );
};

export default AboutMe;
