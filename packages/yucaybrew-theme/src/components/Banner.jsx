import React from 'react';
import {connect, styled, css} from 'frontity'
import Ave from '../assets/static/img/ave.png';
import Blandas from '../assets/static/img/blandas.png';
import Proceso from '../assets/static/img/proceso.png';
import {color_secundario, Fuente1, color_principal} from '../styles/Variables'
//import '../assets/styles/styles.styl';
const StyleBanner = styled.div`
   max-width: 1920px;
   max-height: 464px;
   background-color: ${color_secundario};
   height: 24vw;
   @media (max-width: 600px) {
      position: absolute;
      width: 375px;
      height: 163px;
      left: 0px;
      top: 461px;
   }
`
const BannerContainer = styled.div`
   height: 100%;
   display: flex;
   justify-content: space-around;
   align-items: center;
`
const BannerLeft = styled.div`
   visibility: visible;
   display: inline-grid;
   justify-items: center;
   @media (max-width: 600px) {
      display: none;
   }
`
const BannerRight = styled.div`
   display: inline-grid;
   justify-items: center;
   @media (max-width: 600px) {
      display: none;
   }
`
const BannerLeftImg = styled.img`
   padding: 10px 0px;
`
const BannerLeftImgAve = styled.img`
   padding: 10px 0px;
   transform: scaleX(-1)
`
const BannerLeftImgBlandas = styled.img`
   padding: 10px 0px;
   width: 26vw;
   max-width: 495px;
   min-width: 319px;
`
const BannerCenter = styled.div`
   height: 100%;
   display: flex;
   align-items: center;
`
const BannerCenterContainer = styled.div`
   max-height: 254px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   @media (max-width: 600px) {
      flex-direction: column;
   }
`
const BannerFrases = styled.p`
   font-family: ${Fuente1};
   font-size: 16px;
   font-weight: 700;
   letter-spacing: 2pt;
   color: ${color_principal};
   padding-top: 30px;
   padding-bottom: 30px;
   @media (max-width: 600px) {
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: 15px;
      padding-top: 15px;
      padding-bottom: 15px;
   }
`
const BannerTodas = styled.p`
   padding: 20px;
   border: 8px solid ${color_principal};
   font-family: ${Fuente1};
   font-size: 36px;
   font-weight: 700;
   color: ${color_principal};
   text-transform: uppercase;
   letter-spacing:0.1rem;
   @media (max-width: 600px) {
      padding-top: 10px;
      padding-left: 33px;
      width: 320px;
      height: 45px;
      font-size: 19px;
      border: 4px solid ${color_principal};
   }
`

const Banner = () => {
   return(
      <>
         <StyleBanner>
            <BannerContainer>
               <BannerLeft>
                  <BannerLeftImg src={Proceso} alt="proceso"/>
                  <BannerLeftImgBlandas src={Blandas} alt="Tierras blandas"/>
                  <BannerLeftImgAve src={Ave} alt=""/>
               </BannerLeft>
               <BannerCenter>
                  <BannerCenterContainer>
                     <BannerFrases>ch'alla!</BannerFrases>
                     <BannerTodas>Todas las cervezas</BannerTodas>
                     <BannerFrases>Apoya negocios locales</BannerFrases>
                  </BannerCenterContainer>
               </BannerCenter>
               <BannerRight>
                  <BannerLeftImg src={Proceso} alt="proceso"/>
                  <BannerLeftImgBlandas src={Blandas} alt="Tierras blandas"/>
                  <BannerLeftImgAve src={Ave} alt=""/>
               </BannerRight>
            </BannerContainer>
         </StyleBanner>
      </>
   )
}

export default connect(Banner);