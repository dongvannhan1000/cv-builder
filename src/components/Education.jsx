import '../styles/Education.css';
import PropTypes from 'prop-types';

const Education = ({ education, onChange, onRemove, isEditing }) => {
  return (
    <div className="education">
      <h2>Education</h2>
      {isEditing ? (
        <div className="input-group">
          <div className="input-field">
            <label htmlFor="school">School Name</label>
            <input
              type="text"
              id="school"
              name="school"
              value={education.school}
              onChange={onChange}
              placeholder="University of Example"
            />
          </div>
          <div className="input-field">
            <label htmlFor="study">Field of Study</label>
            <input
              type="text"
              id="study"
              name="study"
              value={education.study}
              onChange={onChange}
              placeholder="Computer Science"
            />
          </div>
          <div className="input-field">
            <label htmlFor="date">Graduation Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={education.date}
              onChange={onChange}
            />
          </div>
          <button type="button" onClick={onRemove} className="remove-button">Remove Education</button>
        </div>
      ) : (
        <div className="info-display">
          <p><strong>School:</strong> {education.school}</p>
          <p><strong>Field of Study:</strong> {education.study}</p>
          <p><strong>Graduation Date:</strong> {education.date}</p>
        </div>
      )}
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.shape({
    school: PropTypes.string.isRequired,
    study: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired
};

export default Education;