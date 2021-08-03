import React from 'react'
import Layout from '../../components/Layout/Layout'

export default function NewPost(props) {
  return (
    <Layout user={props.user} setUser={props.setUser}>
      Create new post
   </Layout>
  )
}
