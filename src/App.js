import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function FriendRequestTest({ request, onAccept, onDecline }) {
  return (
    <div className="friend-request d-flex align-items-center">
      <img src={request.picture.data.url} alt={request.name} className="friend-request-picture mr-3 rounded-circle" />
      <div className="friend-request-info">
        <p className="friend-request-name">{request.name}</p>
        <div className="friend-request-buttons d-flex justify-content-between">
          <button className="btn btn-warning mx-2" onClick={() => onAccept(request)}>Confirmer</button>
          <button class="btn btn-light" onClick={() => onDecline(request)} 
  style={{
    backgroundColor: "transparent",
    border: "1px solid violet",
    color: "violet",
    transition: "all 0.3s",
    '&:hover': {
      backgroundColor: "violet",
      color: "white"
    }
  }}
>
  Supprimer l'invitation
</button>
        </div>
      </div>
    </div>
  );
}


function App() {
  const [friendRequestsData, setFriendRequestsData] = useState([
    { id: 1, name: "Yosr Trabelsi", picture: {data: {url: "https://randomuser.me/api/portraits/med/women/1.jpg"}} },
    { id: 2, name: "Ines Yotto", picture: {data: {url: "https://randomuser.me/api/portraits/med/women/2.jpg"}} },
    { id: 3, name: "Thomas Hoareau", picture: {data: {url: "https://randomuser.me/api/portraits/med/men/1.jpg"}} },
    { id: 4, name: "Sinthy", picture: {data: {url: "https://randomuser.me/api/portraits/med/men/2.jpg"}} },
    { id: 5, name: "Mohcine Ergui", picture: {data: {url: "https://randomuser.me/api/portraits/med/men/3.jpg"}} },
    
  ]);

  const handleAccept = (request) => {
    try {
      alert(`Accepted request from ${request.name}`);
      
      setFriendRequestsData(friendRequestsData.filter(r => r.id !== request.id));
    } catch (error) {
      console.error(error);
      
      alert("Error accepting friend request");
    }
  }

  const handleDecline = (request) => {
    try {
      alert(`Declined request from ${request.name}`);
       
      setFriendRequestsData (friendRequestsData.filter(r => r.id !== request.id));
    } catch (error) {
      console.error(error);
      
      alert("Error declining friend request");
    }
  }

  return (
    <div className="container">
      {friendRequestsData.map((request) => (
        <FriendRequestTest
          key={request.id}
          request={request}

          onAccept={handleAccept}
          onDecline={handleDecline}
        />
      ))}
    </div>
  );
}

export default App;
