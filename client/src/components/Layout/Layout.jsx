import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Layout.css'

export default function Layout(props) {

  return (
    <div className='layout'>
      <Navbar user={props.user} setUser={props.setUser} />
      <main>
        <div>{props.children}</div>
      </main>
      <Footer />
    </div>
  )
}
