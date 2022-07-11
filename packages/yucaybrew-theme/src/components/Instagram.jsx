import React from 'react';
import { connect, styled, css } from 'frontity';
import {color_secundario, color_terciario, Fuente1, Fuente2} from '../styles/Variables'

const Upper = styled.section`
    background-color: ${color_terciario};
    height: 1170px;
`

const Instagram = ({state, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source.page[71]
    const Html2react = libraries.html2react.Component;
    return(
        <>
            <Upper />
            <Html2react html={page.content.rendered}/>
        </>
    )
}

export default connect(Instagram);
