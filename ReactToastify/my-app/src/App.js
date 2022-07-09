import React from 'react'
import logo from './logo.svg';
import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './component/Nav';




const App = () => {

  const notify = () =>{
    toast("Email Send", { position: toast.POSITION.TOP_LEFT})
    toast.success("Successfull Email Send", { position: toast.POSITION.TOP_CENTER, autoClose: 8000})
    toast.info("Info Email Send", { position: toast.POSITION.TOP_RIGHT, autoClose: false})
    toast.warn("Warning Email Send", { position: toast.POSITION.BOTTOM_LEFT})
    toast.error("Error Email Send", { position: toast.POSITION.BOTTOM_RIGHT})
    toast(" Email Send", { position: toast.POSITION.BOTTOM_CENTER})
  }

  return (
    <>

<Nav />


     {/** message  */}
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    </>
  )
}

export default App

