import React, { useState } from 'react';

const TestHook = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <input
         type="text"
         value={name}
         placeholder="Enter a name of employee"
         onChange={e => setName(e.target.value)}
       />
      <p>
        <strong>{name}</strong>
      </p>
    </div>
  );
};
export default TestHook;