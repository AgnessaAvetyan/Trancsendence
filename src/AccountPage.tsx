import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AccountPage: React.FC = () => {

  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();

  const handleAuthorize = () => {
    // Call your authentication API or perform your authorization logic here
    // If the user is authorized, set the isAuthorized state to true
    setIsAuthorized(true);
    alert(333);
    // Navigate to another page
    // navigate('/profile');
  };

  return (
    <div>
      {
      if (isAuthorized)
      {navigate('/profile');}

      }
      {/* {!isAuthorized && handleAuthorize} */}
      {/* <button onClick={handleAuthorize}>Authorize</button> */}
    </div>
  );
}

export default AccountPage;