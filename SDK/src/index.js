import React from 'react';

const MyFormComponent = ({ showForm }) => {
  if (!showForm) {
    return null;
  }

  return (
    <form>
      <input type="text" placeholder="Enter something..." />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyFormComponent;
