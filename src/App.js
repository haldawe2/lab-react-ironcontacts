import './App.css';
import contacts from "./contacts.json";
import React, { useState } from 'react';

function App() {

  const [ contactList, setContacts ] = useState(contacts.splice(0, 5));

  const handleRandomContact = () => {
    const randomContact = contacts.splice(Math.floor(Math.random() * contacts.length), 1);
    setContacts([...contactList, randomContact[0]]);
  }

  const handleSortName = () => {
    const sortedListName = [...contactList].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setContacts(sortedListName);
  }

  const handleSortPopularity = () => {
    const sortedListPopularity = [...contactList].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedListPopularity);
  }

  const handleDelete = (id) => {
    console.log(id)
    const newList = [...contactList].filter(contact => contact.id !== id);
    setContacts(newList);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={handleRandomContact}>Add random contact</button>
      <button onClick={handleSortName}>Sort by Name</button>
      <button onClick={handleSortPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>
              <p>Picture</p>
            </th>
            <th>
              <p>Name</p>
            </th>
            <th>
              <p>Popularity</p>
            </th>
            <th>
              <p>Won an Oscar</p>
            </th>
            <th>
              <p>Won an Emmy</p>
            </th>
            <th>
              <p>Actions</p>
            </th>
          </tr>
        </thead>
        <tbody>

          {contactList.map((elem, i) => {
            return (
              <tr key={i}>
                <th>
                  <img src={elem.pictureUrl} alt={elem.name} />
                </th>
                <th>
                  <p>{elem.name}</p>
                </th>
                <th>
                  <p>{elem.popularity.toFixed(2)}</p>
                </th>
                <th>
                  <p>{elem.wonOscar && "🏆"}</p>
                </th>
                <th>
                  <p>{elem.wonEmmy && "🏆"}</p>
                </th>
                <th>
                  <button onClick={() => handleDelete(elem.id)}>Delete</button>
                </th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
