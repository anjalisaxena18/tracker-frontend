import React, { useState } from 'react';

const Screenshots = () => {
  const [isTracking, setIsTracking] = useState(false);

  const handleToggleTracker = () => {
    const endpoint = isTracking ? 'stop' : 'start';
    fetch(`http://localhost:5000/api/tracker/${endpoint}`, { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setIsTracking(!isTracking);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Records</h1>
      <button onClick={handleToggleTracker} style={styles.button}>
        {isTracking ? 'Stop Tracker' : 'Start Tracker'}
      </button>
    </div>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
    marginRight: '10px',
    align   : 'flex-start',
  },
};

export default Screenshots;
