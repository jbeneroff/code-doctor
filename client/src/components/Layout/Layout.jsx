import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Layout(props) {
  return (
    <div>
      <Navbar user={props.user} setUser={props.setUser} />
      <div>{`User: ${props.user?.username}`}</div>
      <div>{props.children}</div>
      <Footer />
    </div>
  )
}
