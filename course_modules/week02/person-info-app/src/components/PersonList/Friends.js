import React from 'react'

function Friends({friendInfo}) {

  return (

    <div className='friends-container'>
      <span>FRIENDS ({friendInfo.length})</span>
      {/* get array items by using map method */}
      {friendInfo.map((friend) => 
        (
          <div className='friend-section'>
            <img src={friend.avatar} alt="friendInfo-avatar" />
            <ul style={{listStyleType: "none"}}> 
              <li>Firstname: {friend.firstName}</li>
              <li>Gender: {friend.gender}</li>
              <li>Birthday: {friend.birthday}</li>
              <li>Phone: {friend.phone}</li>
            </ul>
          </div>
      )
      )}

    </div>
  );
};

export default Friends;