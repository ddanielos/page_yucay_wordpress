import React from 'react';
import { connect, styled } from 'frontity';
import {color_principal, Fuente1} from '../styles/Variables'
import GoInsta from '../assets/static/img/instagram.png';

const ModalDiv = styled.div`
  background-color: rgba(0,0,0,0.85);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: grid;
  justify-content: center;
  align-items: center;
`
const ModalDialog = styled.div`
  background: ${color_principal};
  padding: 10px;
  width: 95vw;
  height: 95vh;
  max-width: 1000px;
  max-height: 700px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  & video {
    margin-left: 40px;
    height: 80vh;
    max-height: 600px;
    max-width: 600px;
    object-fit: cover;
    border: 4px solid black;
    @media (max-width: 600px) {
      width: 350px;
      height: 350px;
      margin: auto;
    }
  }
  & p {
    padding: 30px;
    font-family: ${Fuente1};
    font-weight: bold;
    letter-spacing: 0.05rem;
    line-height: 25px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0px;
    margin: auto;
  }
`
const Img = styled.img`
  margin-left: 40px;
  height: 80vh;
  max-height: 600px;
  max-width: 600px;
  object-fit: cover;
  border: 4px solid black;

  @media (max-width: 600px) {
    width: 350px;
    height: 350px;
    margin: auto;
  }
`
const ImgInsta = styled.img`
  height: 40px;
  width: 40px;
`

const Modal = ({state, closeModal}) => {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  }

  return (
    <>
      <ModalDiv onClick={closeModal}>
        <ModalDialog onClick={handleModalDialogClick}>
          {
            state.theme.typeInsta === "VIDEO"?
              <video controls autoPlay={true}><source src={state.theme.imageInstaURL} type="video/mp4"/></video>
            :
              <Img src={state.theme.imageInstaURL} alt=""/>
          }
          <div>
            <p>{state.theme.imageInstaCaption}</p>
            <p><ImgInsta src={GoInsta}/>Like y comentario</p>
          </div>
        </ModalDialog>
      </ModalDiv>
    </>
  )
}

export default connect(Modal);