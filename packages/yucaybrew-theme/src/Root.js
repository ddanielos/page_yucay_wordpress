import React from 'react';
import Home from './containers/Home';
import {connect} from 'frontity'

const Root = () => {
  return(
    <>
      <Home />
    </>
  )
}

export default connect(Root);