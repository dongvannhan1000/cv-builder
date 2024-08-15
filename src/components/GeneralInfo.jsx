import '../styles/GeneralInfo.css';
import PropTypes from 'prop-types';

const GeneralInfo = ({ info, onChange, isEditing }) => {
  return (
    <div className="general-info">
      <h2>General Information</h2>
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={info.name}
            onChange={onChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={info.email}
            onChange={onChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={info.phone}
            onChange={onChange}
          />
        </>
      ) : (
        <div>
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
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