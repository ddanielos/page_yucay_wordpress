import React from 'react'
import ArteIcon from '../assets/static/img/arte-icon.png'
import SanaIcon from '../assets/static/img/sana-icon.png'
import SunImg from '../assets/static/img/sol-naciente.png'
import News from './News'
import { connect,styled } from 'frontity'
import {color_cuaternario, Fuente2, color_principal, color_secundario, Fuente1} from '../styles/Variables'

const Container = styled.div`
  margin-top: 80px;
  color: ${color_principal};
  & h2{
    font-size: 5.6rem;
    text-transform: uppercase;
    font-family: ${Fuente2};
    letter-spacing:0.1rem;
  }
  & p{
    font-size: 1.3rem;
    line-height: 38px;
    font-family: ${Fuente1};
    letter-spacing:0.1rem;
  }
`
const Banner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom:-3px;
`
const Art = styled.img`
  margin-top: -150px;
  object-fit:none ;
`
const Sun = styled.img`
  object-fit:none ;
`
const Sana = styled.img`
  margin-top: -150px;
  object-fit:none ;

`
const Container1 = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  flex-direction: row;
`
const Section1 = styled.div`
  padding-top: 80px;
  padding-left: 80px;
  width: 50%;
  height: 100%;
  background-color: #f08165;
`
const Section2 = styled.div`
  padding-top: 80px;
  padding-left: 80px;
  width: 50%;
  height: 100%;
  background-color: #d44620;
`
const Container2 = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  flex-direction: row;
`
const Section3 = styled.div`
  padding-top: 80px;
  padding-left: 80px;
  width: 50%;
  height: 100%;
  background-color: #e06e46;
`
const Section4 = styled.div`
  padding-top: 80px;
  padding-left: 80px;
  width: 50%;
  height: 100%;
  background-color: #d44620;
`

const Footer = () => {
  return(
    <>
      <Container>
        <Banner>
          <Art src={ArteIcon}/>
          <Sun src={SunImg}/>
          <Sana src={SanaIcon}/>
        </Banner>
        <Container1>
          <Section1>
            <h2>Contacto</h2>
            <p>Email: contacto@yucaybrew.com</p>
            <p>Wapp: +51 913165855</p>
            <p>Dirección: Plaza Manco II 107 Yucay Urubamba</p>
          </Section1>
          <Section2>
            <h2>Suscripcion</h2>
            <p>Abre una Yucay y suscríbete:</p>
            <News />

          </Section2>
        </Container1>
        <Container2>
          <Section3>
            <h2>Visitanos</h2>
            <p>Miércoles - Sábado: 12:00 - 22:00</p>
            <p>Domingo: 11:00 - 22:00</p>
          </Section3>
          <Section4>
            <p>Envíos y devoluciones</p>
            <p>Métodos de pago</p>
          </Section4>
        </Container2>
      </Container>
    </>
  )
}

export default connect( Footer );