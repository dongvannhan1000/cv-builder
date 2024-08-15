import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './App.css';

function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [cv, setCV] = useState({
    generalInfo: { name: '', email: '', phone: '' },
    educations: [{ id: Date.now(), school: '', study: '', date: '' }],
    experiences: [{ id: Date.now(), company: '', position: '', responsibilities: '', startDate: '', endDate: '' }]
  });

  const handleChange = (section) => (e, id) => {
    const { name, value } = e.target;
    setCV(prevCV => ({
      ...prevCV,
      [section]: Array.isArray(prevCV[section])
        ? prevCV[section].map(item => 
            item.id === id ? { ...item, [name]: value } : item
          )
        : { ...prevCV[section], [name]: value }
    }));
  };

  const addNewItem = (section) => {
    setCV(prevCV => ({
      ...prevCV,
      [section]: [
        ...prevCV[section],
        section === 'educations'
          ? { id: Date.now(), school: '', study: '', date: '' }
          : { id: Date.now(), company: '', position: '', responsibilities: '', startDate: '', endDate: '' }
      ]
    }));
  };

  const removeItem = (section, id) => {
    setCV(prevCV => ({
      ...prevCV,
      [section]: prevCV[section].filter(item => item.id !== id)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="App">
      <h1>CV Builder</h1>
      <form onSubmit={handleSubmit}>
        {isEditing ? (
          <div key="editing">
            <GeneralInfo
              info={cv.generalInfo}
              onChange={handleChange('generalInfo')}
              isEditing={isEditing}
            />
            {cv.educations.map((edu) => (
              <Education
                key={edu.id}
                education={edu}
                onChange={(e) => handleChange('educations')(e, edu.id)}
                onRemove={() => removeItem('educations', edu.id)}
                isEditing={isEditing}
              />
            ))}
            <button className="add-button" type="button" onClick={() => addNewItem('educations')}>Add Education</button>
            {cv.experiences.map((exp) => (
              <Experience
                key={exp.id}
                experience={exp}
                onChange={(e) => handleChange('experiences')(e, exp.id)}
                onRemove={() => removeItem('experiences', exp.id)}
                isEditing={isEditing}
              />
            ))}
            <button className="add-button" type="button" onClick={() => addNewItem('experiences')}>Add Experience</button>
            <button type="submit" className="submit-button">Generate CV</button>
          </div>
        ) : (
          <div key="viewing">
            <GeneralInfo
              info={cv.generalInfo}
              onChange={handleChange('generalInfo')}
              isEditing={isEditing}
            />
            {cv.educations.map((edu) => (
              <Education
                key={edu.id}
                education={edu}
                onChange={(e) => handleChange('educations')(e, edu.id)}
                onRemove={() => removeItem('educations', edu.id)}
                isEditing={isEditing}
              />
            ))}
            {cv.experiences.map((exp) => (
              <Experience
                key={exp.id}
                experience={exp}
                onChange={(e) => handleChange('experiences')(e, exp.id)}
                onRemove={() => removeItem('experiences', exp.id)}
                isEditing={isEditing}
              />
            ))}
            <button type="button" className="submit-button" onClick={handleEdit}>Edit CV</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;