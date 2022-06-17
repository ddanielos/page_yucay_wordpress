import React from 'react'
import {connect, styled, css} from 'frontity'

const StyleListOfBlogs = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 80vw;
    margin: auto;
`

const ListOfBlogs = ({children}) => {
    return(
        <StyleListOfBlogs>
            {children}
        </StyleListOfBlogs>

    )
}

export default connect(ListOfBlogs);