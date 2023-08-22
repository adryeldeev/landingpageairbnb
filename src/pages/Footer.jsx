import React, { useState } from 'react';
import '../styles/FooterStyles.css'
const Footer = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [roomType, setRoomType] = useState('');
  const [guests, setGuests] = useState(1);

  const roomTypeIncrements = {
    entire: 10,
    private: 20,
    shared: 40,
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setGuests(parseInt(event.target.value, 10)); // Convertendo o valor para número
  };

  const handleRoomTypeChange = (event) => {
    setRoomType(event.target.id);
  };

  const roomTypeIncrement = roomTypeIncrements[roomType] || 0;
  const roomPrice = guests * 90; // Preço base multiplicado pelo número de hóspedes
  const totalPrice = roomPrice + roomTypeIncrement;

  return (
    <footer> 

      <h1>What you could earn in <span>Boston</span></h1>
      <div className="options">
        <div className="radios">

        <div className="input">
          <input type="radio" id="entire" checked={roomType === 'entire'} onChange={handleRoomTypeChange} />
          <label htmlFor="radio">Entire place</label>
        </div>
        <div className="input">
          <input type="radio" id="private" checked={roomType === 'private'} onChange={handleRoomTypeChange} />
          <label htmlFor="private">Private room</label>
        </div>
        <div className="input">
          <input type="radio" id="shared" checked={roomType === 'shared'} onChange={handleRoomTypeChange} />
          <label htmlFor="shared">Shared room</label>
        </div>
        </div>
        <div className="selections">
          <input type="text" placeholder="e.g. San Francisco" />
          <select name="viagem" onChange={handleSelectChange} value={guests}>
            <option value="1">1 Guest</option>
            <option value="2">2 Guest</option>
          </select>
        </div>
        <div className="price">
          <span> ${totalPrice}</span>
          <p>weekly average</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;