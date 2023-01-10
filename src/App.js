import React, { useState, useEffect } from "react";
import FriendRequestTest from "./FriendRequestTest";

function App() {
  const [friendRequests, setFriendRequests] = useState([
    { id: 1, name: "Yosr Trabelsi", },
    { id: 2, name: "Ines Yotto" },
    { id: 3, name: "Thomas Hoareau" },
    { id: 4, name: "Sinthy" },
    { id: 5, name: "Mouhcine Ergui" },
  ]);

  function handleAccept(request) {
    try {
      alert(`Accepted request from ${request.name}`);
      
      setFriendRequests(friendRequests.filter(r => r.id !== request.id));
    } catch (error) {
      console.error(error);
      
      alert("Error accepting friend request");
    }
  }

  function handleDecline(request) {
    try {
      alert(`Declined request from ${request.name}`);
       
      setFriendRequests(friendRequests.filter(r => r.id !== request.id));
    } catch (error) {
      console.error(error);
      
      alert("Error declining friend request");
    }
  }

  return (
    <div>
      {friendRequests.map((request) => (
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
