import React from 'react';
import Eslogan from '../assets/static/img/eslogan.png';
import Mascara from '../assets/static/img/mascara.png'
import { connect, styled, css } from 'frontity';
import {color_principal, color_secundario, color_terciario, Fuente1, Fuente2} from '../styles/Variables'

const ContainerMaster = styled.div`
  
`

const Container = styled.div`
  padding-top: 50px;
  background-color: ${color_principal};
  height: 330px;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    height: 180px;
  }
`


const SpaceBetween = styled.div`
  width: 180px;
  display: table-cell;

  @media (max-width: 600px) {
    display: none;
  }
`

const ItemCardDelivery = styled.div`
  width: 750px;
  display: table-cell;
  text-align: center;
  & p{
    text-transform: uppercase;
    color: ${color_principal};
    background-color: ${color_terciario};
    text-align: center;
    display: inline-block;
  }
  @media (max-width: 600px) {
    display: none;
  }
`
const ItemCardBar = styled.div`
  width: 750px;
  display: table-cell;
  text-align: center;
  & p{
    text-transform: uppercase;
    color: ${color_principal};
    background-color: ${color_terciario};
    text-align: center;
    display: inline-block;
  }
  @media (max-width: 600px) {

  }
`

const Title = styled.p`
  font-size: 45px;
  font-family: ${Fuente2};
  font-weight: 900;
  height: 170px;
  width: 100%;
  padding-top:50px;
  letter-spacing:0.2rem;

  @media (max-width: 600px) {
    padding-top:25px;
    width: 327px;
    height: 92px;
    font-size: 25px;
    font-style: normal;
    font-weight: 800;
    line-height: 39px;
    test-align: center;
    letter-spacing: 0.085em;
  }
`

const SubTitle = styled.p`
  font-size: 20px;
  font-family: ${Fuente1};
  height: 80px;
  width: 200px;
  padding-top:22px;
  border: 8px solid ${color_principal};
  margin-top: -35px;
  letter-spacing:0.2rem;
  @media (max-width: 600px) {
    width: 134px;
    height: 48px;
    border: 6px solid ${color_principal};
    padding-top:12px;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.09em;
  }
`
const BannerHashtag = styled.div`
  text-transform: uppercase;
  font-size: 60px;
  font-family: ${Fuente2};
  font-weight: 900;
  color: ${color_terciario};
  text-align: center;
  -webkit-text-stroke: 2.5px ${color_terciario};
  letter-spacing:0.2rem;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1px;
  grid-auto-rows: minmax(50px, 180px);
  @media (max-width: 600px) {
    display: block;
  }
`
const MascaraEspejo = styled.img`
  transform: scaleX(-1)
`
const EsloganImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
`
const One = styled.div`
  grid-column: 1;
  grid-row: 1/4;
  @media (max-width: 600px) {
    & img{
      width: 346px;
      height: 346px;
    }
  }
`
const Two = styled.div`
  grid-column: 3;
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
  }
`
const Three = styled.div`
  grid-column: 2/5;
  grid-row: 2;
  display:flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
  }
`

const FaceMobile = styled.h2`
  display: none;
  @media (max-width: 600px) {
    display: block;
    font-family: 'BioRhyme';
    font-style: normal;
    font-weight: 800;
    font-size: 27px;
    line-height: 40px;
    text-align: center;
    color: ${color_terciario};
    letter-spacing: 0.09em;
    -webkit-text-stroke: 1px ${color_principal};
    margin-top: -85px;
  }
`
const Four = styled.div`
  grid-column: 3;
  grid-row: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
  }
`
const Five = styled.div`
  grid-column: 5;
  grid-row: 1/4;
  @media (max-width: 600px) {
    display: none;
  }
`

const Bar = () => {
  return(
    <>
      <ContainerMaster>
        <Container>
          <ItemCardDelivery>
            <Title>Delivery</Title>
            <SubTitle>Pide Ahora</SubTitle>
          </ItemCardDelivery>
          <SpaceBetween />
          <ItemCardBar>
            <Title>Nuestro Bar</Title>
            <SubTitle>Visita</SubTitle>
          </ItemCardBar>
        </Container>
        <BannerHashtag>
          <One>
            <img src={Mascara}/>
          </One>
          <Two>
            <EsloganImg src={Eslogan}/>
          </Two>
          <Three>
            <h2>#yucaybrewery</h2>
          </Three>
          <Four>
            <EsloganImg src={Eslogan}/>
          </Four>
          <Five>
            <MascaraEspejo src={Mascara}/>
          </Five>
        </BannerHashtag>
        <FaceMobile>#YUCAYBREWERY</FaceMobile>
      </ContainerMaster>
    </>
  )
}

export default connect(Bar);