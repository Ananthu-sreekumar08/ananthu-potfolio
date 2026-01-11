const SkillGroup = ({ category, skills }) => {
    return (
        <div className="skill-group">
            <h4 className="skill-category-title">{category}</h4>
            <div className="skill-list">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-item">{skill}</span>
                ))}
            </div>
            <style>{`
        .skill-group {
          border: 1px solid var(--gray);
          height: fit-content;
        }
        .skill-category-title {
          padding: 0.5rem;
          border-bottom: 1px solid var(--gray);
          color: var(--text-white);
          font-weight: 600;
        }
        .skill-list {
          padding: 0.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .skill-item {
          color: var(--gray);
          font-size: 0.9rem;
        }
      `}</style>
        </div>
    );
};

export default SkillGroup;
