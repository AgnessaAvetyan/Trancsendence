import React from "react";
import SignIn from "./SignIn";
import AccountPage from "./AccountPage"

const BackgroundText:React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: "url('http://24glo.com/game/pong/paddles-and-ball.png')",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }}
    >
    <div
      style={{
        padding: "100px",
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        zIndex: "1"
      }}
    >
      <h1>Welcome!</h1>
      <SignIn />
      <AccountPage/>
    </div>
    </div>
  );
};
  
export default BackgroundText;
