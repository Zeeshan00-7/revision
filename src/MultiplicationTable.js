import React, { useState } from 'react';

function MultiplicationTable() {
  const [number, setNumber] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setNumber(value);
  };

  const generateTable = () => {
    if (number === '') {
      return null;
    }

    const rows = [];
    for (let i = 1; i <= 10; i++) {
      rows.push(
        <tr key={i}>
          <td>{`${number} × ${i}`}</td>
          <td>=</td>
          <td>{number * i}</td>
        </tr>
      );
    }
    return rows;
  };

  return (
    <div className="multiplication-table">
      <input type="number" className="input-field" value={number} onChange={handleInputChange} />
      {number !== '' && (
        <table>
          <tbody>
            {generateTable()}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MultiplicationTable;
