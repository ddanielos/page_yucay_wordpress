import React from 'react';
import { connect, styled, css } from 'frontity';
import {color_secundario, color_terciario, Fuente1, Fuente2} from '../styles/Variables'

const Upper = styled.section`
    background-color: ${color_terciario};
    height: 1170px;
`

const Instagram = ({state, libraries }) => {
    return(
        <>
            <Upper />
        </>
    )
}

export default connect(Instagram);
