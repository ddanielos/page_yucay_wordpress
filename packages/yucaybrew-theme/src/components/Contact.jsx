import React from 'react';
import { connect, styled, css } from 'frontity';
import {color_secundario, color_terciario, Fuente1, Fuente2} from '../styles/Variables'

const Upper = styled.section`
    background-color: ${color_terciario};
    height: 170px;
`
const LineText = styled.section`
    height: 10vh;
`
const Container = styled.div`
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0px 0px 25px rgba(76, 75, 16, 0.4);
    display: flex;
    flex-direction: column;

    margin: auto;
    max-width: 500px;
    padding: 20px 15px 20px 15px;
    & *{
        width: 100%;
    }
    & figure{
        width: 100%;
        text-align: center;
    }
    & img{
        max-width:150px;
        height: auto;
    }
    & p{
        font-family: ${Fuente2};
        font-weight: bold;
        line-height: 30px;
        padding-bottom: 9px;
    }
    & input{
        height: 25px;
        border: 1px solid ${color_terciario};
        padding: 1px 3px 1px 3px;
        border-radius: 4px;
        font-family: ${Fuente1};
    }
    & textarea{
        height: 100px;
        border: 1px solid ${color_terciario};
        padding: 1px 3px 1px 3px;
        border-radius: 4px;
        resize: none;
    }
    & div div form p{
        font-family: ${Fuente1};
        font-weight: normal;
        padding-top: 10px;
        padding-bottom: 1px;
        line-height: 20px;
        text-transform: uppercase;
        font-size: 11.5px;
    }
`
const Contact = ({state, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source.page[data.id]
    const Html2react = libraries.html2react.Component;

    return(
        <>
            <Upper />
            <LineText />
            <Container>
                <Html2react html={page.content.rendered}/>
            </Container>
        </>
    )
}

export default connect(Contact);
