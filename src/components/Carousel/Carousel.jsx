import React from 'react';
import Slider from "react-slick";
import Card from '../Card/Card';
import useApi from '../../hooks/useApi';
import { settingsSlider } from "./settings";
import "./Carousel.css"

const Carousel = ({title, category}) => {
    const [medias, loading, error] = useApi(category);
  return (
      <div className='carousel-container'>
        <h3 className='carousel-title'>{title}</h3>
        <Slider {...settingsSlider} >
            {loading ? (
                <div>Loading...</div>
            ) : (
                medias.map((media) => (
                    <Card
                        key={media.id}
                        title={media.title || media.name}
                        imgPath={media.backdrop_path}
                    />
                ))
            )}
            
        </Slider>
      </div>
  )
}

export default Carousel