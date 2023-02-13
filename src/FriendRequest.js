import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function FriendRequest({ request }) {
    return (
      <div>
        <p>{request.name} has sent you a friend request</p>
        <button type="button" class="btn btn-warning">Accept</button>
        <button type="button" class="btn btn-danger">Decline</button>
      </div>
    );
  }
  export default FriendRequest;