import React from 'react'
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import User from './components/User';

function App() {

  const [user, setUser] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      let api = await axios.get("https://jsonplaceholder.typicode.com/users")
      setUser(api.data);
    } 
    fetchData()
  }, [])

  return (
    <div className="App">
      <User users={user}/>
    </div>
  );
}

export default App;
