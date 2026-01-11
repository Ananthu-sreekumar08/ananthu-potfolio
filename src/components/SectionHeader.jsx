const SectionHeader = ({ title }) => {
    return (
        <div className="section-title">
            <h3>
                <span className="accent">#</span>{title}
            </h3>
        </div>
    );
};

export default SectionHeader;
