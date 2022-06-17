import React from 'react'
import {connect, styled, css} from 'frontity'
import BlogHeader from '../components/BlogHeader'
import ListOfBlogs from '../components/ListOfBlogs'
import BlogItem from '../components/BlogItem'
import {color_secundario} from '../styles/Variables'

const BlogContainer = styled.div`
  height: 57vh;
  background-color: ${color_secundario};
`

const Blogs = ({state}) => {
    const data = state.source.get(state.router.link)
    //console.log(data);
    return(
      <BlogContainer>
        <BlogHeader />
        <ListOfBlogs>
          {
            data.items.map(({id})=>{
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
      </BlogContainer>
    )
}

export default connect(Blogs)