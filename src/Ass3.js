import React, { useState } from 'react';

function Ass3()  {
  const [inputNumber, setInputNumber] = useState(0);

  const handleInputChange = (e) => {
    setInputNumber(e.target.value);
  };

  const generateTable = () => {
    const rows = [];
    for (let i = 1; i <= inputNumber; i++) {
      rows.push(<tr key={i}><td>Row {i}</td></tr>);
    }
    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  };

  return (
    <div className="table-generator">
      <input
        type="number"
        value={inputNumber}
        onChange={handleInputChange}
      />
      {generateTable()}
    </div>
  );
}

export default Ass3;
