import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignIn:React.FC = () => {

  // const openInNewTab = (url: string) =>{
  //     window.open(url, '_blank', 'noreferrer');
  // }
  // const [showModal, setShowModal] = useState(false);

  // const handleOpenModal = () => {
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };
  
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    window.open("https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-9bf87a7dc6727592572c086dcb74d50c619a0e3065ade141ccb0b92282caaf07&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2F&response_type=code", "_self", "width=200,height=200");
  }

  return (
    <div 
      style={{
        width: "300px", 
        height: "200px", 
        // backgroundColor: "white", 
        // border: "1px solid black",
        position: "absolute",
        left: "center", 
        top: "200px" 
    }}
    >
    <div 
      style={{
        display: "flex", 
        color: "green",
        flexDirection: "column", 
        alignItems: "center",
        backgroundColor: "lightgray", 
        borderRadius: "9%",
        border: "5px solid rgb(0, 120, 1)",
        padding: "10px" 
      }}
    >
      <p>
        Login here! 
        <img 
          src="https://cdn.pixabay.com/photo/2012/04/18/22/43/arrow-38128_640.png" 
          // alt="An example image" 
          style={{
              width: "20px", 
              height: "17px",
              marginTop: "10px"
          }}
        />
      </p>
      <div 
        style={{
          padding: "20px",
        // border: "1px solid green"
        }}
      >
        <div>
          <button style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px 20px",
            borderRadius: "15px"
          }} 
          onClick={handleClick}>Sign in with 42</button>
        </div>
      </div>
    </div>
  </div>
);};
  
export default SignIn;
  