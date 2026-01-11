import SectionHeader from './SectionHeader';
import { FaDiscord, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <SectionHeader title="contacts" />
            <div className="contact-content">
                <div className="contact-text">
                    <p>
                        I’m interested in freelance opportunities.
                    </p>
                </div>
                <div className="contact-box">
                    <h3>Message me here</h3>
                    <div className="contact-item">
                        <FaDiscord className="accent" />
                        <span>levi_leviosa</span>
                    </div>
                    <div className="contact-item">
                        <FaEnvelope className="accent" />
                        <span>ananthuceal@gmail.com</span>
                    </div>
                </div>
            </div>
            <style>{`
        .contact-section {
          padding: 4rem 0;
        }
        .contact-content {
          display: flex;
          justify-content: space-between;
          gap: 2rem;
        }
        .contact-text {
          color: var(--gray);
          max-width: 500px;
        }
        .contact-box {
          border: 1px solid var(--gray);
          padding: 1rem;
        }
        .contact-box h3 {
          color: var(--text-white);
          margin-bottom: 1rem;
          font-size: 1rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray);
          margin-bottom: 0.5rem;
        }
        @media (max-width: 768px) {
            .contact-content {
                flex-direction: column;
            }
        }
      `}</style>
        </section>
    );
};

export default Contact;
