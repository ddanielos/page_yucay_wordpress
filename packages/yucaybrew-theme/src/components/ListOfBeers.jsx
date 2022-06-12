import React from 'react'
import {connect} from 'frontity'
//import '../assets/styles/styles.styl'

const ListOfBeers = ({children}) => {
    return(
        <div className="listOfBeers">
            <section className="upper">
            </section>
            <h1 className="title"></h1>

            {children}
        </div>
        
    )
}

export default connect(ListOfBeers);