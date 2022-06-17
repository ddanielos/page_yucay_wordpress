import React from 'react'
import {connect, styled, css} from 'frontity'
import {color_principal, color_secundario, color_terciario, Fuente2} from '../styles/Variables'

const StyleListOfBeers = styled.div`
    display: inline-block;
    background-color: ${color_principal};
`
const Upper = styled.section`
    background-color: ${color_terciario};
    height: 170px;
`

const ListOfBeers = ({children}) => {
    return(
        <StyleListOfBeers>
            <Upper />
            {children}
        </StyleListOfBeers>
    )
}

export default connect(ListOfBeers);