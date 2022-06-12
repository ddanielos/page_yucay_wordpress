import React from 'react'
import {connect} from 'frontity'
import ListOfBlogs from '../components/ListOfBlogs'
import BlogItem from '../components/BlogItem'
//import '../assets/styles/styles.styl'

const Blogs = ({state}) => {
    const data = state.source.get(state.router.link)
    //console.log(data);
    return(
      <>
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
                    cover={media&&media.media_details.sizes["post-thumbnail"].source_url}
                    link={blog.link}
                  />
                )
              })
            }
        </ListOfBlogs>
      </>
    )
}

export default connect(Blogs)