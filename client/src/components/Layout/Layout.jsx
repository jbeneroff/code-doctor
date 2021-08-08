import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Layout.css'

export default function Layout(props) {
  //  if (props.user === undefined) {
  //    return props.user?.name === null
  //  attempted to  }
  
  return (
    <div className='layout'>
      <Navbar user={props.user} setUser={props.setUser} />
      <main>
        {/* <div>{`User: ${props.user?.username}`}</div> */}
        <div>{props.children}</div>
      </main>
      <Footer />
    </div>
  )
}
