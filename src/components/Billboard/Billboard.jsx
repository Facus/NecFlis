import React from 'react'
import "./Billboard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { useApi } from './hooks/useApi';
import { apiCategory } from '../../apiConfig';

const Billboard = () => {

    const [movies, loading, error, randomMovie, randomMovieImg] = useApi(apiCategory.popularMovies);
    
    
    return (
        <>
            <div className='billboard' 
                style={
                    loading
                      ? { backgroundImage: "none" }
                      : {
                          backgroundImage: `url(${randomMovieImg})`,
                        }
                  }>
            
                <div>
                    <div className='billboard-title'>{loading? "Cargando..." : randomMovie?.title}</div>
                    <div className='billboard-description'>{loading? `Cargando... ${error}` : randomMovie?.overview}</div>
                    <div className='billboard-btns'>
                        <div className='billboard-btn-1'><FontAwesomeIcon icon={faPlay} /> Reproducir</div>
                        <div className='billboard-btn-2'
                            onClick={() => {
                                console.log(movies);
                            }}
                        ><FontAwesomeIcon icon={faCircleInfo} /> Más información</div>
                    </div>
                </div>
                <div className='billboard-btn-mute'><FontAwesomeIcon icon={faVolumeHigh} /></div>
                
            </div>
            
      </>
  )
}

export default Billboard;
