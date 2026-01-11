import { Link } from 'react-router-dom';
import heroImg from '../assets/hero_img.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="accent">Ananthu</span>.I am a <span className="accent">Full Stack Engineer</span> and <span className="accent">Creative Developer</span>
        </h1>
        <p className="hero-subtitle">
          crafts responsive websites where technologies meet creativity
        </p>
        <Link to="/contact" className="btn">Contact me !!</Link>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Ananthu" className="hero-img-real" />
      </div>
      <style>{`
        .hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 4rem 0;
          min-height: 80vh;
        }
        .hero-content {
          max-width: 500px;
        }
        .hero h1 {
          font-size: 2.5rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: var(--text-white);
        }
        .hero-subtitle {
          color: var(--gray);
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }
        
        .hero-image {
            position: relative;
            z-index: 1;
        }

        .hero-img-real {
            max-width: 300px;
            width: 100%;
            height: auto;
            border-radius: 20px; /* Modern touch */
            border: 3px solid var(--primary-color);
            /* Double Neon Glow Shadow */
            box-shadow: 
                0 0 10px var(--primary-color),
                10px 10px 0px rgba(0,0,0,0.5); 
            filter: grayscale(100%) contrast(1.1);
            transition: all 0.3s ease;
            background: var(--bg-color); /* Cutout fallback */
        }

        .hero-img-real:hover {
            filter: grayscale(0%) contrast(1);
            transform: scale(1.02) rotate(-1deg);
            box-shadow: 
                0 0 20px var(--primary-color),
                15px 15px 0px var(--text-color);
            border-color: var(--text-white);
        }
        
        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            text-align: center;
            justify-content: center;
          }
          .hero-content {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
