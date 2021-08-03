import React from 'react'
import Layout from '../../components/Layout/Layout'

export default function AllPosts(props) {
  return (
    <div>
      <Layout user={props.user} setUser= {props.setUser}>
        All Posts
      </Layout>
    </div>
  )
}
