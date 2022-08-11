import React from 'react';
import {connect, styled, css} from 'frontity'
import background from '../assets/static/img/background_hero.png';
import title from '../assets/static/img/hero.png';
import logo from '../assets/static/img/logo.png';
import {Fuente1, size_menu_1920, color_principal} from '../styles/Variables'


const StyleHero = styled.div`
   width: 100%;
   max-width: 1920px;
`
const HeroBackground = styled.div`
   max-width: 1920px;
   max-height: 826px;
   width: 100%;
   visibility: visible;
   height: 43vw;
   display: flex;
   align-items: center;
   background-position: center top;
   flex-direction: column;
   justify-content: space-evenly;

   @media (max-width: 600px) {
      position: absolute;
      width: 100vw;
      height: 461px;
      top: 0px;
      backdrop-filter: blur(4px);
      object-fit: fill;
   }
`
const HeroBackgroundDevice = styled.div`
   visibility: hidden;
   height: 0px;
   width: 100vw;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
`
const HeroTitle = styled.img`
   margin-left: auto;
   margin-right: auto;
   padding-top: 130px;

   @media (max-width: 600px) {
      position: absolute;
      width: 216px;
      top: 30px
   }
`
const HeroSlogan = styled.h2`
   color: ${color_principal};
   font-size: ${size_menu_1920};
   text-transform: uppercase;
   font-family: ${Fuente1};
   font-weight: bold;
   letter-spacing: -1.26px;
   border-bottom: 2px solid ${color_principal};
   word-spacing: 0.4em;

   @media (max-width:600px){
      position: absolute;
      top: 380px;
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      line-height: 15px;
   }
`

const Hero = () => {
   return(
      <>
         <StyleHero>
            <HeroBackground style={{backgroundImage:`url(${background})`}}>
               <HeroTitle src={ title } alt="Cerveceria artesanal"/>
               <HeroSlogan>De nuestra tierra a tu casa</HeroSlogan>
               <div className="hero__border"></div>
            </HeroBackground>
            <HeroBackgroundDevice style={{backgroundImage:`url(${background})`}}>
               <img className="hero__logo" src={ logo } alt="Cerveceria artesanal"/>
               <p className="Todas">Todas las cervezas</p>
            </HeroBackgroundDevice>
            <div className="dark"></div>
         </StyleHero>
      </>
   )
}
export default connect(Hero);