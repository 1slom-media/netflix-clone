import { useEffect, useState } from 'react'
import './App.css'
import firebase from './firebase/config';
import { Main } from './components/main';
import { Login } from './signin/login';

function App() {
  const [user,setUser]=useState(null);

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  })

  return (
    <div className="app">
      {user? <Main user={user}/> : <Login/>}
      
    </div>
  )
}

export default App
