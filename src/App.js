import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
import img from './profile/emna.jpg';
import PropTypes from "prop-types";
function App() {
  const styleObject={color:"white",fontFamily:"time new romain",fontWeight:"bolder",fontSize:"30px", backgroundColor:"pink",textAlign:"center",padding:"30px"}
  const show=(x)=>{
   alert (x) 
  }
  return (
    <div style={styleObject}>
   <Profile fct={show} fullName="Emna Ben Guedria" bio="Front-End student" profession="Textile Engineer" >{img}</Profile>
    </div>
  );
}
Profile.propTypes={
  fullName:PropTypes.string,
  bio:PropTypes.string,
  profession:PropTypes.string,
};
export default App;
