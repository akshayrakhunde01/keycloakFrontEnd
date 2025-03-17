import { useEffect, useState } from "react";
import Keycloak from 'keycloak-js';

const useAuth = () => {
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    const client = new Keycloak({
      url: 'http://127.0.0.1:8080', // Correct URL
      realm: 'myrealm', // Ensure this is correct
      clientId: 'myclient', // Ensure this is correct
    });

    client.init({ onLoad: 'login-required' }).then((res) => {
      setLogin(authenticated);
    }).catch(error => {
      console.error("Keycloak initialization failed", error);
      setLogin(false);
    });

    // Logout cleanup function
    return () => {
      client.logout({
        redirectUri: 'http://localhost:5174/', // Optional: Redirect after logout
      });
    };
  }, []);

  return isLogin;
};

export default useAuth;
