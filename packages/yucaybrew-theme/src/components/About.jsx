import React from 'react'
import FlorO from '../assets/static/img/flor-naranj.png'
import LogoAlt from '../assets/static/img/logo-alt.png'
import { connect,styled } from 'frontity'
import {color_terciario, color_cuaternario, Fuente2, color_principal, color_secundario, Fuente1} from '../styles/Variables'

const ImageFlor1 = styled.img`
  @media (max-width: 600px) {
    width: 68px;
    margin: auto;
  }
`
const ImageFlor2 = styled.img`
  @media (max-width: 600px) {
    display: none;
  }
`
const AboutTitle = styled.div`
  margin-top: 90px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-left: 100px;
  padding-right: 100px;
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0px;
  }
`
const Title = styled.h2`
  text-transform: uppercase;
  font-size: 87px;
  font-family: ${Fuente2};
  color: ${color_terciario};
  text-align: center;
  -webkit-text-stroke: 2.5px ${color_terciario};
  letter-spacing:0.2rem;

  @media (max-width: 600px) {
    font-size: 30px;
    text-align: center;
    -webkit-text-stroke: 1.5px ${color_terciario};
    margin: auto;
  }
`
const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 550px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  `
const AboutUs = styled.div`
  color: ${color_principal};
  background-color: ${color_secundario};
  width: 50vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 600px) {
    width: 100vw;
  }
`
const What = styled.div`
  color: ${color_principal};
  background-color: ${color_cuaternario};
  width: 50vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 600px) {
    width: 100vw;
  }
`
const Parrafo = styled.section`
  width: 500px;
  text-align: center;
  padding-top: 50px;
  & h2{
    text-transform: uppercase;
    font-family: ${Fuente2};
    font-size:2.5rem;
    font-weight:900;
    letter-spacing:0.2rem;
    padding-bottom:1.3rem;
    @media (max-width: 600px) {
      font-size: 20px;
      padding-bottom: 10px;
    }
  }
  & p{
    font-family: ${Fuente1};
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    line-height: 30px;
    padding-top: 2rem;
    text-align: justify;
    @media (max-width: 600px) {
      width: 300px;
      margin: auto;
      padding-top: 10px;
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 15px;
      text-align: justify;
      letter-spacing: 0.09em;
    }
  }
  @media (max-width: 600px) {
    height: 360px;
    padding-top: 55px;
  }
`
const SectionLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: -290px;
  @media (max-width: 600px) {
    margin-top: -255px;
  }
`
const Logo = styled.img`
  margin: auto;
  @media (max-width: 600px) {
    width: 98px;
    opacity: 0.7;
  }
`

const About = () => {
  return(
    <>
      <AboutTitle>
        <ImageFlor1 src={FlorO} alt="" />
        <Title>Quienes Somos</Title>
        <ImageFlor2 src={FlorO} alt=""  />
      </AboutTitle>
      <AboutContent>
        <AboutUs>
          <Parrafo>
            <h2>Quienes Somos</h2>
            <p>Somos una cervecería artesanal desde 2014 localizada en el corazón del Valle Sagrado de los inKas, en el pueblo de Yucay.</p>
            <p>Creemos que las cosas buenas de la vida requieren valentia para lograr la verdadera independencia haciendo algo que se ama.</p>
            <p>Somos dueños y empleados. Revisamos cada etapa del proceso cervecero con ingenio.</p>
          </Parrafo>
        </AboutUs>
        <What>
          <Parrafo>
            <h2>Que queremos</h2>
            <p>Queremos inspirar.</p>
            <p>Queremos generar una comunidad en torno a lo que más felices nos hace. Nuestra tierra, nuestra cultura y el proceso cervecero.</p>
            <p>Esperamos poder compartir cultura. Enseñarles el lugar donde vivimos y trabajamos. Las riquezas de la tierra y los rituales familiares que rodean la elaboración de la cerveza Yucay.</p>
          </Parrafo>
        </What>
      </AboutContent>
      <SectionLogo>
        <Logo src={LogoAlt}/>
      </SectionLogo>
    </>
  )
}

export default connect( About );