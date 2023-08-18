import React from 'react';
import './App.css';
import ReviewForm from './components/ReviewForm';

function App() {
  const handleFormSubmit = (data) => {
    // Handle the form submission, e.g., sending the data to a server
    console.log(data);
  };

  return (
    <div className="App">
      <h1>Feedback Form</h1>
      <ReviewForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;

