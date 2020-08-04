import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get('https://randomuser.me/api/?results=6');
      setEmployees(response.data.results);
    };
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={employees}>
      {props.children}
    </UserContext.Provider>
  );
};
