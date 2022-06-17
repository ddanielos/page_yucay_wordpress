import React from 'react'
import {connect, styled, css} from 'frontity'
import ibuLogo from '../assets/static/img/lupulo.png'
import ohLogo from '../assets/static/img/alcohol.png'
import {Fuente1, Fuente2, color_secundario, color_terciario} from '../styles/Variables'

const BeerItemContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    padding: 4vw 0 4vw 0;
`
const BeerContainer = styled.div`
    display: flex;
    margin: 0 2vw 0 2vw;
    padding-top: 30px;
    justify-content: space-around;
    max-width: 1020px;
`
const BeerItemDetails = styled.div`
    padding: 1vw 2.5vw 1vw 2.5vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const BeerTitle = styled.h2`
    font-family: ${Fuente2};
    color: ${color_secundario};
    font-size: 2.2rem;
    flex-grow: 1;
`
const BeerParameters = styled.ul`
    display: flex;
    justify-content: flex-start;
    flex-grow: 2;
`
const BeerParametersItem = styled.li`
    padding: 0px 30px 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const BeerParametersSpan = styled.span`
    text-transform: uppercase;
    font-size: 1.2rem;
    font-style: bold;
    font-family: ${Fuente2};
    color: ${color_terciario};
`
const IconIbu = styled.img`
    max-width: 72px;
    height: auto;
`
const IconOh = styled.img`
    max-width: 65px;
    height: auto;
`
const BeerDetails = styled.h2`
    text-transform: uppercase;
    font-family: ${Fuente1};
    font-size: 1rem;
    color: ${color_terciario};
    flex-grow: 1;
`
const BeerDescription = styled.div`
    padding: 0 0 5px 0;
    text-transform: none;
    font-family: ${Fuente1};
    line-height: 1.4rem;
    text-align: justify;
    flex-grow: 1;
`
const BeerPair = styled.h3`
    padding: 0 0 5px 0;
    text-transform: uppercase;
    font-family: ${Fuente1};
    font-size: 1rem;
    color: ${color_terciario};
    flex-grow: 1;
`

const BeerItem = (props) => {
    const { title, cover, description, details, pair, abv, intensity, count } = props;

    return(
        <BeerItemContainer>
            <BeerContainer css={count%2==0 && css`flex-direction:row-reverse`}>
                <div className="beer-style-logo">
                    <img className="style-logo" src={cover} alt='' />
                </div>
                <BeerItemDetails>
                    <BeerTitle>{title}</BeerTitle>
                    <BeerParameters>
                        <BeerParametersItem>
                            <BeerParametersSpan><IconIbu src={ibuLogo} alt="" /></BeerParametersSpan>
                            <BeerParametersSpan>{intensity}</BeerParametersSpan>
                        </BeerParametersItem>
                        <BeerParametersItem>
                            <BeerParametersSpan><IconOh src={ohLogo} alt="" /></BeerParametersSpan>
                            <BeerParametersSpan>{abv}</BeerParametersSpan>
                        </BeerParametersItem>
                    </BeerParameters>
                    <BeerDetails>{details}</BeerDetails>
                    <BeerDescription>{description}</BeerDescription>
                    <BeerPair>maridala con:{`  ${pair}`}</BeerPair>
                </BeerItemDetails>
            </BeerContainer>
        </BeerItemContainer>
    )
}

export default connect(BeerItem);
