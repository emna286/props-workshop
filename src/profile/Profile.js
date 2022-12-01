import React from 'react'

function Profile(props) {
  return (
    <div>
      Hello I'm {props.fullName},I'm a {props.bio}, I'm a {props.profession}
      <br/>
      <br/>
      <img src={props.children}></img>
      <br/>
      <br/>
      <button onClick={props.fct(props.fullName)}>click</button>
    </div>
  )
}
Profile.defaultProps={
    fullName:"emna"
}
export default Profile
