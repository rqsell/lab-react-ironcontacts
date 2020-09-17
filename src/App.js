import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
//IT 1
//get the first five contacts in an array
//display the contacts in a table: picture, name, popularity

function App() {
  return <div className="App">{DisplayFive()}</div>;
}

function DisplayFive(props) {
  return contacts
    .map((eachcontact) => {
      return (
        <table id="contact">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>

          <tr>
            <td>
              <img id="contactimage" src={eachcontact.pictureUrl} />
            </td>
            <td> {eachcontact.name}</td>
            <td>{eachcontact.popularity}</td>
          </tr>
        </table>
      );
    })
    .splice(0, 5);
  // for (let i = 0; i < contacts.length; i++) {
  //   if (i < 5 === true) {
  //     return <div>{contacts[i].name}</div>;
  //   }
  // }
}
export default App;
