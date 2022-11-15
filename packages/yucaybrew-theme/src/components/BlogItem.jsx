import React from 'react'
import {connect, styled, css} from 'frontity'
import BlogImage from '../assets/static/img/agua-cervecera.png'
import {useEffect, useState} from 'react'
import Link from '../components/Link'
import {color_principal, Fuente1} from '../styles/Variables'

const BlogItemContainer = styled.div`
  padding: 60px 0 60px 0;
  @media (max-width: 600px) {
  padding: 30px 0 30px 0;
  }
`
const BlogItemWraper = styled.div`
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0px 0px 25px rgba(198, 106, 72, 0.5);
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 450px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 250ms ease;
  &:hover{
    box-shadow: rgb(210, 120, 90) 0px 10px 15px -5px;
    transform: translateY(-2%);
  }
  @media (max-width: 600px) {
    width: 300px;
  }
`
const BlogItemImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: scale-down;
  margin: auto;
`
const BlogItemCard = styled.div`
  height: 200px;
  display: flex;
  background: ${color_principal};
  flex-direction: column;
  justify-content: space-evenly;
  transition: 450ms opacity;
  padding: 20px;
  text-align: justify;
  line-height: 1.4rem;
`
const BlogItemTitle = styled.h3`
  font-family: ${Fuente1};
  text-transform: uppercase;
  font-size: 1.0rem;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`
const BlogItemDescription = styled.p`
  font-family: Fuente1;
  font-size: 1rem;
  @media (max-width: 600px) {
    font-size: 13px;
  }
`
const BlogItemImgContainer = styled.div`
  width: 400px;
  height: 250px;
  overflow: hidden;
  position: relative;
`

const BlogItem = (props) => {
  const [isMounted, setMount] = useState(false);
  const { title, description, cover, link } = props;

  useEffect(()=>{
    setMount(true);
  },[]);

  return(
      <BlogItemContainer>
        <Link href={link}>
          <BlogItemWraper>
              <BlogItemImgContainer><BlogItemImg src={cover}/></BlogItemImgContainer>
              <BlogItemCard>
                  <BlogItemTitle>
                    {title}
                  </BlogItemTitle>
                  {
                    isMounted ? (
                      <>
                        <BlogItemDescription dangerouslySetInnerHTML={{__html: description}}></BlogItemDescription>
                      </>
                    ):null
                  }
              </BlogItemCard>

          </BlogItemWraper>
        </Link>
      </BlogItemContainer>
  )
}

export default connect(BlogItem);