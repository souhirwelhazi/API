import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
    const [listOfUser, setListOfUser] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setListOfUser(response.data);
        })
        .catch(error => {
          console.error("Il y a eu une erreur!", error);
        });
    }, []);
  
    const nextUser = () => {
      setCurrentIndex(currentIndex + 1);
    };
  
    const prevUser = () => {
      setCurrentIndex(currentIndex - 1);
    };
  
    return (
      <div>
        <div className='user-card' style={{  flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'pink', margin: '10px', padding: '10px' }}>
          <div  className='user-info' style={{ flex: 1 }}>
            <p><strong>Name :</strong> {listOfUser[currentIndex]?.name}</p>
            <p><strong>Username :</strong> {listOfUser[currentIndex]?.username}</p>
            <p><strong>Email :</strong> {listOfUser[currentIndex]?.email}</p>
            <p><strong>Phone :</strong> {listOfUser[currentIndex]?.phone}</p>
          </div>
          <div style={{ flex: 1 }}>
            <p><strong>Street :</strong> {listOfUser[currentIndex]?.address?.street}</p>
            <p><strong>Suite :</strong> {listOfUser[currentIndex]?.address?.suite}</p>
            <p><strong>City :</strong> {listOfUser[currentIndex]?.address?.city}</p>
            <p><strong>Zipcode :</strong> {listOfUser[currentIndex]?.address?.zipcode}</p>
          </div>
          <div style={{ flex: 1 }}>
            <p><strong>Website :</strong> {listOfUser[currentIndex]?.website}</p>
            <p><strong>Company :</strong> {listOfUser[currentIndex]?.company?.name}</p>
            <p><strong>CatchPhrase :</strong> {listOfUser[currentIndex]?.company?.catchPhrase}</p>
            <p><strong>BS :</strong> {listOfUser[currentIndex]?.company?.bs}</p>
          </div>
        </div>
        <button className='nav-button' style={{marginRight: '15px'}} onClick={prevUser} disabled={currentIndex === 0}>Previous</button>
        <button className='nav-button' onClick={nextUser} disabled={currentIndex === listOfUser.length - 1}>Next</button>
      </div>
    );
  }
  
  export default UserList;
  


