import {color_principal, color_negro} from './Variables'
import React from 'react'
import {Global, css} from 'frontity'

const Base = () => {

  return (
    <Global
      styles = {css`
        @import url('https://fonts.googleapis.com/css2?family=BioRhyme:wght@700&family=Roboto+Mono:wght@400;500;700&display=swap');

        *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html{
          background: ${color_principal};
          overflow-x: hidden;
        }

        body{
          max-width: 1920px;
          background-color: transparent;
          margin-left: auto;
          margin-right: auto;
        }

        a{
          text-decoration: none;
          color: ${color_negro};
        }
      `}
    />
  )
}

export default Base