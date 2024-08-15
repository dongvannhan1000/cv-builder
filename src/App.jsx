import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './App.css';

function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [cv, setCV] = useState({
    generalInfo: { name: '', email: '', phone: '' },
    education: { school: '', study: '', date: '' },
    experience: { company: '', position: '', responsibilities: '', startDate: '', endDate: '' }
  });

  const handleChange = (section) => (e) => {
    const { name, value } = e.target;
    setCV(prevCV => ({
      ...prevCV,
      [section]: {
        ...prevCV[section],
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="App">
      <h1>CV Application</h1>
      <form onSubmit={handleSubmit}>
        <GeneralInfo
          info={cv.generalInfo}
          onChange={handleChange('generalInfo')}
          isEditing={isEditing}
        />
        <Education
          education={cv.education}
          onChange={handleChange('education')}
          isEditing={isEditing}
        />
        <Experience
          experience={cv.experience}
          onChange={handleChange('experience')}
          isEditing={isEditing}
        />
        {isEditing ? (
          <button type="submit">Submit CV</button>
        ) : (
          <button type="button" onClick={() => setIsEditing(true)}>Edit CV</button>
        )}
      </form>
    </div>
  );
}

export default App;