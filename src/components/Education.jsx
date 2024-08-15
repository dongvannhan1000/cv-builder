import '../styles/Education.css';
import PropTypes from 'prop-types';

const Education = ({ education, onChange, isEditing }) => {
  return (
    <div className="education">
      <h2>Education</h2>
      {isEditing ? (
        <>
          <input
            type="text"
            name="school"
            placeholder="School Name"
            value={education.school}
            onChange={onChange}
          />
          <input
            type="text"
            name="study"
            placeholder="Title of Study"
            value={education.study}
            onChange={onChange}
          />
          <input
            type="date"
            name="date"
            value={education.date}
            onChange={onChange}
          />
        </>
      ) : (
        <div>
          <p>School: {education.school}</p>
          <p>Study: {education.study}</p>
          <p>Date: {education.date}</p>
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
  isEditing: PropTypes.bool.isRequired
};

export default Education;