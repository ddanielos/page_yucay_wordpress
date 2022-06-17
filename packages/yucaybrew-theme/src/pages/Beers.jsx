import React from 'react';
import {connect} from 'frontity';
import ListOfBeers from '../components/ListOfBeers';
import BeerItem from '../components/BeerItem';
//import '../assets/styles/styles.styl'


const Beers = ({state}) => {
    let count = 0;
    const data = state.source.get(state.router.link)
    //console.log(data);
    return(
      <ListOfBeers>
        {
          data.items.map(({id})=>{
            count = count + 1
            const beer = state.source.beer[id]
            return(
              <BeerItem
                key={id}
                title={beer.title.rendered}
                cover={beer.acf.cover}
                details={beer.acf.description}
                description={beer.acf.details}
                pair={beer.acf.pair}
                abv={beer.acf.abv}
                intensity={beer.acf.intensity}
                count={count}
              />
            )
          })
        }
      </ListOfBeers>
    )
}

export default connect(Beers);