import React, { useEffect } from "react";
import ButtonAppBar from "./Appbar";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import SignIn from "./components/views/Login";
import Register from "./components/views/Register";
import AppContext from "./context/AppContext";


export default function App() {
  const [isSigninPage, setSigninPage] = React.useState(true);
  
  const handleGoToRegister = () => {
    setSigninPage(false);
  };
  const handleGoToLogin = () => {
    setSigninPage(true);
  };

  const value = {
    isSigninPageOpened: isSigninPage,
    handleGoToRegisterPage: handleGoToRegister,
    handleGoToLoginPage: handleGoToLogin,
  };

  useEffect(() => {
    console.log(isSigninPage)
  }, []);

  return (
      
      <AppProvider value={value}>
      <ButtonAppBar />
      {isSigninPage ? <SignIn /> : <Register />}
      </AppProvider>

      )}
    
  

