import React from "react";
import Person from './Person';
import Children from './Children';
import Friends from './Friends';


function PersonList({personInfoList}) {
  // send the manipulated data as props to Person.js, Children.js and Friends.js
  return (
    <div className="info-container"> 
      <Person personInfo={personInfoList}/>
      <div className="array-container">
        <Children childInfo={personInfoList.children} />
        <Friends friendInfo={personInfoList.friends} />
      </div>
    </div>
  );
}

export default PersonList;
