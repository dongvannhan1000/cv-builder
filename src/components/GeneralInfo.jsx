import '../styles/GeneralInfo.css';
import PropTypes from 'prop-types';

const GeneralInfo = ({ info, onChange, isEditing }) => {
  return (
    <div className="general-info">
      <h2>General Information</h2>
      {isEditing ? (
        <div className="input-group">
          <div className="input-field">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={info.name}
              onChange={onChange}
              placeholder="John Doe"
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={info.email}
              onChange={onChange}
              placeholder="johndoe@example.com"
            />
          </div>
          <div className="input-field">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={info.phone}
              onChange={onChange}
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>
      ) : (
        <div className="info-display">
          <p><strong>Name:</strong> {info.name}</p>
          <p><strong>Email:</strong> {info.email}</p>
          <p><strong>Phone:</strong> {info.phone}</p>
        </div>
      )}
    </div>
  );
};

GeneralInfo.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired
};

export default GeneralInfo;