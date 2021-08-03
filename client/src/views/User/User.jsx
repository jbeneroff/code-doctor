import React from 'react'
import Layout from "../../components/Layout/Layout"

export default function User(props) {
  return (
    <Layout user={props.user} setUser={props.setUser}>
User Profile
    </Layout>
  )
}
