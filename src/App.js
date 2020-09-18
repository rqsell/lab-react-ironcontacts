import React, { useState } from 'react';

import './App.css';
import contacts from './contacts.json';
//IT 1
//get the first five contacts in an array
//display the contacts in a table: picture, name, popularity

function App() {
  let [firstFive, setFirstFive] = useState(contacts.splice(0, 5));
  let [restOfContacts, setRestOfContacts] = useState(contacts);
  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button onClick={GetRandom}>GetRandom</button>
      <button onClick={sortByPopularity}> Sort by Popularity</button>
      <button onClick={sortbyName}> Sort by Name</button>
      {/* <button onClick={sortName}>Sort Name</button>
      <button onClick={sortPopularity}>Sort Popularity</button> */}
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        <FiveCelebs />
      </table>
    </div>
  );

  function FiveCelebs() {
    return firstFive.map((eachFamousPerson) => {
      return (
        <tr style={{ margin: '0 auto', padding: '20px' }}>
          <td>
            <img
              style={{ width: '50px' }}
              src={eachFamousPerson.pictureUrl}
              alt="Holywood"
            />
          </td>
          <td>
            <p>{eachFamousPerson.name}</p>
          </td>
          <td>
            <p>{eachFamousPerson.popularity.toFixed(2)}</p>
          </td>
          <td>
            {/* <button id={eachFamousPerson.id} onClick={deleteRow}>
              Delete
            </button> */}
          </td>
        </tr>
      );
    });
  }

  function GetRandom() {
    // let [firstFive, setFirstFive] = useState(contacts.splice(0, 5));
    // let [restOfContacts, setRestOfContacts] = useState(contacts);
    let random = Math.floor(Math.random() * restOfContacts.length);
    let randomContact = restOfContacts[random];
    //Create a copy of original hooks
    let newDisplayContacts = [...firstFive];
    let newRestofContacts = [...restOfContacts];
    //remove random variable from new rest of contacts so it does not get displayed again
    newRestofContacts.splice(random, 1);
    newDisplayContacts.push(randomContact);
    //link hooks to originals
    setFirstFive(newDisplayContacts);
    setRestOfContacts(newRestofContacts);

    return (
      <div>
        <tr>
          <td>
            <img id="contactimage" src={random.pictureUrl} />
          </td>
          <td> {randomContact.name}</td>
          <td>{randomContact.popularity}</td>
        </tr>
      </div>
    );
  }
  function sortbyName() {
    // let [firstFive, setFirstFive] = useState(contacts.splice(0, 5));
    // let [restOfContacts, setRestOfContacts] = useState(contacts);
    let newSortedNames = [...firstFive].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFirstFive(newSortedNames);
  }
  function sortByPopularity() {
    // let [firstFive, setFirstFive] = useState(contacts.splice(0, 5));
    // let [restOfContacts, setRestOfContacts] = useState(contacts);
    let newSortedContacts = [...firstFive].sort(
      (a, b) => b.popularity - a.popularity
    );
    setFirstFive(newSortedContacts);
  }
}

export default App;
