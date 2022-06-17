import React from 'react'
import { connect, styled, css } from 'frontity'
import Hero from '../assets/static/img/flor_s_fondo.png'
import {color_principal, color_secundario, Fuente2} from '../styles/Variables'

const BlogUpper = styled.section`
  background-color: ${color_secundario};
  height: 170px;
`
const BlogHeaderContainer = styled.section`
  background-color: ${color_secundario};
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`
const BlogTitleContainer = styled.div`
  border: 8px solid ${color_principal};
  display: flex;
  align-items: center;
`
const BlogTitleContainerImg = styled.img`
  width: 250px;
`
const BlogHeaderTitle = styled.h2`
  font-family: ${Fuente2};
  color: ${color_principal};
  padding-right: 20px;
  font-size: 2.5rem;
`

const BlogHeader = () => {
  return(
    <>
      <BlogUpper />
      <BlogHeaderContainer>
          <BlogTitleContainer>
              <BlogTitleContainerImg src={Hero} alt="" />
              <BlogHeaderTitle>Blog cervecero</BlogHeaderTitle>
          </BlogTitleContainer>
      </BlogHeaderContainer>
    </>
  )
}

export default connect(BlogHeader);