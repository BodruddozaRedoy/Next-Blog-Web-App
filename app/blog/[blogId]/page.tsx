import React from 'react'

export default async function BlogDetailsPage ({params}:{params:Promise<{blogId:string}>}) {
    console.log(await params)
    const {blogId} = await params
  return (
    <div>BlogDetailsPage id: {blogId}</div>
  )
}
