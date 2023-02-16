import clientPromise from '../../../lib/mongo_client_promise'
import React from 'react'

export async function getServerSideProps({ req, res }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  try {
    const client = await clientPromise
    const db = client.db('posts')
    const agent = req.headers['user-agent']
    const post = await db.collection('posts').insertOne({
      agent,
    })
  } catch (e) {
    console.error(e)
    throw new Error(e).message
  }

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {},
  }
}

const Token = () => {
  return <></>
}

export default Token
