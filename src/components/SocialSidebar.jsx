import { FaGithub, FaDiscord, FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import socialsData from '../data/socials.json';

const iconMap = {
  FaGithub: FaGithub,
  FaDiscord: FaDiscord,
  FaEnvelope: FaEnvelope,
  FaLinkedin: FaLinkedin,
  FaTwitter: FaTwitter
};

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <div className="line"></div>
      <div className="icons">
        {socialsData.map((social) => {
          const IconComponent = iconMap[social.icon] || FaEnvelope;
          return (
            <a key={social.platform} href={social.link} target="_blank" rel="noreferrer">
              <IconComponent />
            </a>
          );
        })}
      </div>
      <style>{`
        .social-sidebar {
          position: fixed;
          left: 20px;
          top: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 99;
        }
        .line {
          width: 1px;
          height: 190px;
          background-color: var(--gray);
        }
        .icons {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 5px;
        }
        .icons a {
          color: var(--gray);
          font-size: 1.5rem;
          transition: color 0.3s;
        }
        .icons a:hover {
          color: var(--primary-color);
        }
        @media(max-width: 768px) {
            .social-sidebar {
                display: none;
            }
        }
      `}</style>
    </div>
  );
};

export default SocialSidebar;
