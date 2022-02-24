import React from 'react'

function Children({childInfo}) {

  return (
    <div className='children-container'>
      <span>CHILDREN ({childInfo.length})</span>
      {/* get array items by using map method */}
      {childInfo.map((child) => 
      (
        <div className='child-section'>
          <img src={child.avatar} alt="child-avatar" />
          <ul style={{listStyleType: "none"}}> 
            <li>Firstname: {child.firstName}</li>
            <li>Gender: {child.gender}</li>
            <li>Birthday: {child.birthday}</li>
          </ul>
        </div>

        )
    )}
    </div>
  );
};

export default Children;

