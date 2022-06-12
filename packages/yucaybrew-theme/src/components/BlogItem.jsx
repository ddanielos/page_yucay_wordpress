import React from 'react'
import {connect} from 'frontity'
import BlogImage from '../assets/static/img/agua-cervecera.png'
//import '../assets/styles/styles.styl'
import {useEffect, useState} from 'react'
import Link from '../components/Link'

const BlogItem = (props) => {
  const [isMounted, setMount] = useState(false);
  const { title, description, cover, link } = props;

  useEffect(()=>{
    setMount(true);
  },[]);

  return(
      <div className="blog-item-container">
        <Link href={link}>
          <div className="blog-item-wraper">
              <img className="blog-item-image" src={cover}/>
              <div className="blog-item-card">
                  <h2 className="blog-item-title">
                    {title}
                  </h2>
                  {
                    isMounted ? (
                      <>
                        <p className="blog-item-description" dangerouslySetInnerHTML={{__html: description}}></p>
                      </>
                    ):null
                  }
              </div>

          </div>
        </Link>
      </div>
  )
}

export default connect(BlogItem);