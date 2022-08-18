import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar';
import Footer from './Footer';
import { Route, Switch, Redirect } from 'react-router-dom';

import $ from "jquery";
import { findDOMNode } from 'react-dom';
//import "jquery-ui-dist/jquery-ui";



const AdminLayout = () => {


  return (
    <>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" class="d-flex flex-column">

          <div id="content">
            <Navbar />

            <main>



            </main>
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}




export default AdminLayout

