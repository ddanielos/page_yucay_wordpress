import Base from '../styles/Base'
import React, {useEffect} from 'react';
import {connect, styled, css} from 'frontity'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Beers from '../pages/Beers'
import Blogs from '../pages/Blogs'
import Post from '../components/Post'
import Contact from '../components/Contact';
import Bar from '../components/Bar';
import Instagram from '../components/Instagram';
import About from '../components/About';
import OurBlog from '../components/OurBlog';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

const ContainerHome = styled.div`
  width: 100%;
`
const Home = ({state, actions}) => {
  const data = state.source.get(state.router.link)

  useEffect(()=>{
    actions.source.fetch("/blogs");
    actions.source.fetch("/beers");
  },[])

  const openModal = (caption, media_url, type) => {
    actions.theme.setImageInstaURL(media_url)
    actions.theme.setImageInstaCaption(caption)
    actions.theme.setTypeInsta(type)
    actions.theme.setIsOpenModal(true)
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function(){window.scrollTo(x, y)};
  }
  const closeModal = () => {
    actions.theme.setIsOpenModal(false)
    window.onscroll = null;
  }

  return(
    <>
      <Base />
      <ContainerHome>
        {<Header />}
        {data.isHome &&
        <>
          <Hero />
          <Banner />
          <Bar />
          {state.theme.isOpenModal && <Modal closeModal={closeModal}/>}
          <Instagram openModal={openModal}/>
          <About />
          {/*
          <OurBlog />
          <Footer />
          */}
        </>
        }
        {data.isBeerArchive && <Beers />}
        {data.isBlogsArchive && <Blogs />}
        {data.isBlogs && <Post />}
        {data.isPage && <Contact />}
      </ContainerHome>
    </>
  )
}

export default connect(Home);