import './App.css';

import { useState } from 'react';

import Login from './user/Login';
import Register from './user/Register';
import HomePage from './HomePage';


function App() {

  const [status, setStatus] = useState("");
  const [user, setUser] = useState("");

  if (status === ""){
    return (
      <div className="App">
        <Login setUser={setUser} setStatus={setStatus} />
      </div>
    );
  }else if(status === "new"){
    return (
      <div className="App">
        <Register setUser={setUser} setStatus={setStatus} />
      </div>
    );
  }else{
    return (
      <div className="App">
        <HomePage user ={user} setStatus={setStatus} /> 
      </div>
    );
  }
}

export default App;
