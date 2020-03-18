import React, { useEffect } from "react";
import ButtonAppBar from "./Appbar";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import AuthPage from "./components/views/AuthPage";

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
    handleGoToLoginPage: handleGoToLogin
  };

  return (
    <AppProvider value={value}>
      <ButtonAppBar />
      <AuthPage />
    </AppProvider>
  );
}
