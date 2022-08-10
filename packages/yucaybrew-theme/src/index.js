import React from 'react';
import Root from './Root';

export default {
  name: "yucaybrew-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isOpenModal: false,
      imageInstaURL: "",
      imageInstaCaption: "",
      typeInsta:"",
    }
  },
  actions: {
    theme: {
      setIsOpenModal: ({state}) => value => {
        state.theme.isOpenModal = value;
      },
      setImageInstaURL: ({state}) => value => {
        state.theme.imageInstaURL = value;
      },
      setImageInstaCaption: ({state}) => value => {
        state.theme.imageInstaCaption = value;
      },
      setTypeInsta: ({state}) => value => {
        state.theme.typeInsta = value;
      }
    }
  }
};
