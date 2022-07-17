import React from 'react'
import FlorO from '../assets/static/img/flor-naranj.png'
import ListOfBlogs from './ListOfBlogs'
import BlogItem from './BlogItem'
import { connect,styled } from 'frontity'
import {color_terciario, color_cuaternario, Fuente2, color_principal, color_secundario, Fuente1} from '../styles/Variables'

const ImageFlor = styled.img`

`
const AboutTitle = styled.div`
  margin-top: 280px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-left: 100px;
  padding-right: 100px;
`
const Title = styled.h2`
  text-transform: uppercase;
  font-size: 87px;
  font-family: ${Fuente2};
  color: ${color_terciario};
  text-align: center;
  -webkit-text-stroke: 2.5px ${color_terciario};
  letter-spacing:0.2rem;
`
const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 550px;

  `

const OurBlog = ({ state }) => {
  const data = state.source.get(/blogs/)
  let datos = [];
  data.items?.map(({ id }) => {
    datos.push(id);
    if(datos[3]){datos.splice(3,1)};
  })
  return(
    <>
      <AboutTitle>
        <ImageFlor src={FlorO} alt="" />
        <Title>De nuestro blog</Title>
        <ImageFlor src={FlorO} alt="" />
      </AboutTitle>
      <AboutContent>
        <ListOfBlogs>
          {
            datos.map((id)=>{
              const blog = state.source.blogs[id]
              const idMedia = blog.featured_media
              const media = state.source.attachment[idMedia]
              return(
                <BlogItem
                  key={id}
                  title={blog.title.rendered}
                  description={blog.excerpt.rendered}
                  cover={media&&media.source_url}
                  link={blog.link}
                />
              )
            })
          }
        </ListOfBlogs>
      </AboutContent>

    </>
  )
}

export default connect( OurBlog );
