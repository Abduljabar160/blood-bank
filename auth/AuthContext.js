import React, { createContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load stored token when component is mounted
  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        console.error(e);
      }

      setToken(userToken);
      setLoading(false);
    };

    bootstrapAsync();
  }, []);

  // Store token whenever it changes
  useEffect(() => {
    if (token === null) {
      SecureStore.deleteItemAsync('userToken');
    } else {
      SecureStore.setItemAsync('userToken', token);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
