import '../styles/Experience.css';
import PropTypes from 'prop-types';

const Experience = ({ experience, onChange, isEditing }) => {
  return (
    <div className="experience">
      <h2>Work Experience</h2>
      {isEditing ? (
        <div className="input-group">
          <div className="input-field">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={experience.company}
              onChange={onChange}
              placeholder="Tech Solutions Inc."
            />
          </div>
          <div className="input-field">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              name="position"
              value={experience.position}
              onChange={onChange}
              placeholder="Senior Software Developer"
            />
          </div>
          <div className="input-field">
            <label htmlFor="responsibilities">Main Responsibilities</label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              value={experience.responsibilities}
              onChange={onChange}
              placeholder="Describe your main duties and achievements..."
            />
          </div>
          <div className="date-range">
            <div className="input-field">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={experience.startDate}
                onChange={onChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={experience.endDate}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="info-display">
          <p><strong>Company:</strong> {experience.company}</p>
          <p><strong>Position:</strong> {experience.position}</p>
          <p><strong>Responsibilities:</strong> {experience.responsibilities}</p>
          <p><strong>Duration:</strong> {experience.startDate} to {experience.endDate}</p>
        </div>
      )}
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    responsibilities: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired
};

export default Experience;