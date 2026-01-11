import { FaGithub, FaDiscord, FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import socialsData from '../data/socials.json';

const iconMap = {
  FaGithub: FaGithub,
  FaDiscord: FaDiscord,
  FaEnvelope: FaEnvelope,
  FaLinkedin: FaLinkedin,
  FaTwitter: FaTwitter
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <span className="accent">#</span>Ananthu
            </div>
            <p className="footer-email">ananthuceal@email.com</p>
            <p className="footer-desc">Frontend engineer and full stack developer based in India</p>
          </div>
          <div className="footer-socials">
            <h3>Media</h3>
            <div className="social-icons">
              {socialsData.map((social) => {
                const IconComponent = iconMap[social.icon] || FaEnvelope;
                return (
                  <a key={social.platform} href={social.link} target="_blank" rel="noreferrer">
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
      </div>
      <style>{`
        .footer {
          margin-top: 4rem;
          border-top: 1px solid var(--gray);
          padding: 2rem 0;
        }
        .footer-top {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .logo-link { 
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700; 
          margin-bottom: 1rem;
          color: var(--text-white);
        }
        .logo-img {
            height: 30px;
            width: auto;
        }
        .footer-email {
          color: var(--gray);
          margin-bottom: 0.5rem;
        }
        .footer-desc {
          color: var(--text-white);
          max-width: 300px;
        }
        .footer-socials h3 {
          color: var(--text-white);
          margin-bottom: 1rem;
          font-weight: 500;
        }
        .social-icons {
          display: flex;
          gap: 1rem;
          font-size: 1.2rem;
        }
        .social-icons a {
             color: var(--gray);
             transition: color 0.3s;
        }
         .social-icons a:hover {
             color: var(--text-white);
        }

        .footer-bottom {
          text-align: center;
          color: var(--gray);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
