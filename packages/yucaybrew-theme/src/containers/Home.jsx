import Base from '../styles/Base'
import React, {useEffect} from 'react';
import {connect, styled, css} from 'frontity'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Beers from '../pages/Beers'
import Blogs from '../pages/Blogs'
import Post from '../components/Post'

const ContainerHome = styled.div`
  width: 100%;
`
const Home = ({state, actions}) => {
  const data = state.source.get(state.router.link)

  useEffect(()=>{
    actions.source.fetch("/blogs")
  },[])
  return(
    <>
      <Base />
      <ContainerHome>
        <Header />
        {data.isHome &&
        <>
          <Hero />
          <Banner />
        </>
        }
        {data.isBeerArchive && <Beers />}
        {data.isBlogsArchive && <Blogs />}
        {data.isBlogs && <Post />}
      </ContainerHome>
    </>
  )
}

export default connect(Home);