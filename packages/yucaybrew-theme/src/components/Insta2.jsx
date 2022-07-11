import React from 'react';
import useFetch from "react-fetch-hook";
import { connect, styled, css } from 'frontity';
import {color_secundario, color_terciario, Fuente1, Fuente2} from '../styles/Variables'

const Upper = styled.section`
    background-color: ${color_secundario};
    height: 110px;
`

const Insta2 = ({state, libraries }) => {
  var instaObjects = [];
  const { isLoading, data } = useFetch(
    "https://zapier.com/engine/rss/123456789/myZapFeed",
    {
      formatter: response => response.text()
    }
  );

  if (data){
    let instaObjects = [];
    const items = data.match(/<item>(.|\n)*?<\/item>/g).map(function(val) {
      return val.replace(/<\/?b>/g, "");
    });
    items.map((item, index) => {
      const title = /<title>(.|\n)*?<\/title>/.exec(item);
      const link = /<link>(.*?)<\/link>/.exec(item);
      const enclosure = /<enclosure (.*?)<\/enclosure>/.exec(item);
      const image = enclosure[1].match(/"((?:\\.|[^"\\])*)"/);
      const encodedImage = image[1].replace(/&amp;/g, "&");

      instaObjects.push({
        title: title[1],
        link: link[1],
        image: encodedImage,
      });
    });
    
    return (
      <>
        <Upper />
        {instaObjects.map(({ title, link, image }, index) => {
          return (
            <div key={index} link={link}>
              <img src={image} alt={title} objectFit="cover" />
            </div>
          );
        })}
      </>
    );
  }
 return "Loading";
}

export default connect(Insta2);
