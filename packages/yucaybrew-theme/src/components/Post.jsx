import React from 'react';
import { connect, styled, css } from 'frontity';
import {color_secundario, color_terciario, Fuente1, Fuente2} from '../styles/Variables'

const Upper = styled.section`
    background-color: ${color_terciario};
    height: 170px;
`
const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  & h2 {
    padding-top: 20px;
    padding-bottom: 10px;
    color: ${color_secundario};
    text-transform: uppercase;
    font-family: ${Fuente2};
  }

  & div{
    line-height:25px;
  }

  & strong{
    text-transform: uppercase;
  }

  & img{
    border: 0.5px solid #000000;
    max-width: 700px;
    height: auto;
  }

  & figure{
    padding-top:20px;
    padding-bottom:20px;
    background-image: none !important;
    text-align: center;
  }
  & ul{
    list-style: none;
  }

  & blockquote {
    font-style: italic;
    font-size: 1rem;
    font-family: ${Fuente2};
  }
  & blockquote p{
    text-align: center;
  }
  & blockquote cite{
    quotes: "« " " »";
  }
  & blockquote cite:before {
    content: open-quote;
  }
  & blockquote cite:after {
    content: close-quote;
  }
`

const Post = ({state}) => {
  const data = state.source.get(state.router.link)
  console.log(data.id)
  const blog = state.source.blogs[data.id]
  console.log(blog)
  return (
    <>
      <Upper />
      <Container>
        <h2>{blog.title.rendered}</h2>
        <div dangerouslySetInnerHTML={{__html: blog.content.rendered}}></div>
      </Container>
    </>
  )
}

export default connect(Post);
