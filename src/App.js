import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function FriendRequestTest({ request, onAccept, onDecline }) {
  return (
    <div className="friend-request">
      <img src={request.picture.data.url} alt={request.name} width={50} height={50} />
      <p>{request.name}</p>
      <button className="btn btn-success" style={{ marginRight: '10px' }} onClick={() => onAccept(request)}>Accept</button>
      <button class="btn btn-danger" onClick={() => onDecline(request)}>Decline</button>
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
