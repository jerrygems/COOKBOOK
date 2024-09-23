// isAdminContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const IsAdminContext = createContext();

export const IsAdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkRole = async () => {
      try {
        const token = localStorage.getItem('vulntoken');
        if (!token) {
          console.log('there is no token');
          return;
        }

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/check`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setIsAdmin(data.message === 'admin');
        } else {
          console.log('response not okay');
        }
      } catch (err) {
        console.log(err);
      }
    };

    checkRole();
  }, []);

  return (
    <IsAdminContext.Provider value={{ isAdmin }}>
      {children}
    </IsAdminContext.Provider>
  );
};

export const useIsAdmin = () => useContext(IsAdminContext);
