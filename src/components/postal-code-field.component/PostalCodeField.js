import { useState } from 'react';
import './PostalCodeField.css';

function PostaCodeField({onEnter}) {
  const [postalCode, setPostalCode] = useState('')

  const handleSearchWeather = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onEnter(postalCode)
    }
  };

  return (
    <div className="container">
      <div className="input-container">
        <input placeholder="CEP"  onChange={(e)=>setPostalCode(e.target.value)} onKeyDown={handleSearchWeather} />
      </div>
    </div>
  );
}

export default PostaCodeField;
