import '../styles/Experience.css';
import PropTypes from 'prop-types';

const Experience = ({ experience, onChange, isEditing }) => {
  return (
    <div className="experience">
      <h2>Work Experience</h2>
      {isEditing ? (
        <>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={experience.company}
            onChange={onChange}
          />
          <input
            type="text"
            name="position"
            placeholder="Position Title"
            value={experience.position}
            onChange={onChange}
          />
          <textarea
            name="responsibilities"
            placeholder="Main Responsibilities"
            value={experience.responsibilities}
            onChange={onChange}
          />
          <input
            type="date"
            name="startDate"
            placeholder="Start Date"
            value={experience.startDate}
            onChange={onChange}
          />
          <input
            type="date"
            name="endDate"
            placeholder="End Date"
            value={experience.endDate}
            onChange={onChange}
          />
        </>
      ) : (
        <div>
          <p>Company: {experience.company}</p>
          <p>Position: {experience.position}</p>
          <p>Responsibilities: {experience.responsibilities}</p>
          <p>Start Date: {experience.startDate}</p>
          <p>End Date: {experience.endDate}</p>
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