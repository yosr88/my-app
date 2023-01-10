import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FriendRequestTest({ request, onAccept, onDecline }) {
  return (
    <div>
      <p>{request.name} vous a envoyé une demande d'ami</p>
      <button type="button" className="btn btn-success" onClick={() => onAccept(request)}>
        Accepter
      </button>
      <button type="button" className="btn btn-danger" onClick={() => onDecline(request)}>
        Refuser
      </button>
    </div>
  );
}

export default FriendRequestTest;
