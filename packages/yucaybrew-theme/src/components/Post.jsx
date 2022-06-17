import React from 'react';
import { connect, styled, css } from 'frontity';
import {color_terciario} from '../styles/Variables'

const Upper = styled.section`
    background-color: ${color_terciario};
    height: 170px;
`

const Post = ({state}) => {
  const data = state.source.get(state.router.link)
  console.log(data.id)
  const blog = state.source.blogs[data.id]
  console.log(blog)
  return (
    <>
      <Upper />
      <h2>{blog.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{__html: blog.content.rendered}}></div>
    </>
  )
}

export default connect(Post);
