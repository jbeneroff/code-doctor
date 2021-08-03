import React from 'react'
import Layout from '../../components/Layout/Layout'

export default function PostDetails(props) {
  return (
    <Layout user={props.user} setUser={props.setUser}>
      AllPost
    </Layout>
  )
}
