import React, { useState, useEffect } from 'react';

function BorrowList() {
  const [entries, setEntries] = useState(() => {
    const storedEntries = localStorage.getItem('borrowList');
    return storedEntries ? JSON.parse(storedEntries) : [];
  });
  const [amount, setAmount] = useState('');
  const [person, setPerson] = useState('');
  const [returnBy, setReturnBy] = useState('');
  const [remark, setRemark] = useState('');

  useEffect(() => {
    localStorage.setItem('borrowList', JSON.stringify(entries));
  }, [entries]);

  const addEntry = () => {
    if (!amount || !person || !returnBy) {
      alert('Please fill in all fields');
      return;
    }
    const newEntry = { amount, person, returnBy, remark, paid: false };
    setEntries([...entries, newEntry]);
    setAmount('');
    setPerson('');
    setReturnBy('');
    setRemark('');
  };

  const removeEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };

  const markAsPaid = (index) => {
    const updatedEntries = [...entries];
    updatedEntries[index].paid = true;
    setEntries(updatedEntries);
  };

  const clearAllEntries = () => {
    localStorage.removeItem('borrowList');
    setEntries([]);
  };

  return (
    <div className='BL' style={{ margin: '80px 0px' }}>
      <h2 className='BL-h'>Borrow List</h2>
      <div className='BL-input'>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Person"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        />
        <input
          type="date"
          placeholder="Return by"
          value={returnBy}
          onChange={(e) => setReturnBy(e.target.value)}
        />
        <input
          type="text"
          placeholder="Remark"
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
        />
        <button onClick={addEntry} className="btn btn-secondary">Add Entry</button>
        <button onClick={clearAllEntries} className="btn btn-secondary">Clear All Entries</button>
      </div>
      <table className='BL-list' style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '10px', fontSize: '1.5rem', margin: '30px' }}>Amount</th>
            <th style={{ border: '1px solid black', padding: '10px', fontSize: '1.5rem' }}>Borrowed from</th>
            <th style={{ border: '1px solid black', padding: '10px', fontSize: '1.5rem' }}>Return by</th>
            <th style={{ border: '1px solid black', padding: '10px', fontSize: '1.5rem' }}>Remark</th>
            <th style={{ border: '1px solid black', padding: '10px', fontSize: '1.5rem' }}>Status</th>
            <th style={{ border: '1px solid black', padding: '10px', fontSize: '1.5rem' }}>Remove</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '10px', fontSize: '1.1em' }}>{entry.amount}</td>
              <td style={{ border: '1px solid black', padding: '10px', fontSize: '1.1em' }}>{entry.person}</td>
              <td style={{ border: '1px solid black', padding: '10px', fontSize: '1.1em' }}>{entry.returnBy}</td>
              <td style={{ border: '1px solid black', padding: '10px', fontSize: '1.1em' }}>{entry.remark}</td>
              <td style={{ border: '1px solid black', padding: '10px', fontSize: '1.1em' }}>
                {!entry.paid ? (
                  <button onClick={() => markAsPaid(index)} className="btn btn-info">Mark as Paid</button>
                ) : (
                  <span>&#9989;</span>
                )}
              </td>
              <td style={{ border: '1px solid black', padding: '10px', fontSize: '1.1em' }}>
                <button onClick={() => removeEntry(index)} className="btn btn-info">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BorrowList;
