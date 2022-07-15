import React from 'react';
import Eslogan from '../assets/static/img/eslogan.png';
import Mascara from '../assets/static/img/mascara.png'
import { connect, styled, css } from 'frontity';
import {color_principal, color_secundario, color_terciario, Fuente1, Fuente2} from '../styles/Variables'

const Container = styled.div`
  padding-top: 50px;
  background-color: ${color_principal};
  height: 330px;
  display: flex;
  justify-content: center;
`


const SpaceBetween = styled.div`
  width: 180px;
  display: table-cell;
`

const ItemCard = styled.div`
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
`

const Title = styled.p`
  font-size: 45px;
  font-family: ${Fuente2};
  font-weight: 900;
  height: 170px;
  width: 100%;
  padding-top:50px;
  letter-spacing:0.2rem;

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
`
const Two = styled.div`
  grid-column: 3;
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Three = styled.div`
  grid-column: 2/5;
  grid-row: 2;
  display:flex;
  justify-content: center;
  align-items: center;
`
const Four = styled.div`
  grid-column: 3;
  grid-row: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Five = styled.div`
  grid-column: 5;
  grid-row: 1/4;
`

const Bar = () => {
  return(
    <>
      <Container>
        <ItemCard>
          <Title>Delivery</Title>
          <SubTitle>Pide Ahora</SubTitle>
        </ItemCard>
        <SpaceBetween />
        <ItemCard>
          <Title>Nuestro Bar</Title>
          <SubTitle>Visita</SubTitle>
        </ItemCard>
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
    </>
  )
}

export default connect(Bar);