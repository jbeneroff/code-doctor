import React from 'react'
import Layout from '../../components/Layout/Layout'

export default function Home(props) {
  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div>
        Home
      </div>
   </Layout>
  )
}
