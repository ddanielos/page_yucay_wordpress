import React from 'react'
import {connect} from 'frontity'
//import '../assets/styles/styles.styl'

const ListOfBlogs = ({children}) => {
    return(
        <div className="list-of-blogs">
            {children}
        </div>

    )
}

export default connect(ListOfBlogs);