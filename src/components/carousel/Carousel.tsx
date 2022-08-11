import { Movie, TypeMoviesInfo } from '../../types/data/index';
import { ComplementImage } from '../../Var Global/complementImage';

export const Carousel=({gender}:{gender:TypeMoviesInfo})=>{
    console.log(gender);
    
    return (
        <div style={{width:"80%"}}>
            <h1>{gender.name}</h1>
            <div className='contain_carousel'>{
                gender.movies.map((movie:Movie)=>{
                    return (
                        <figure>
                            <img src={ComplementImage+movie.poster_path} alt={movie.title} />
                            <figcaption>{movie.title}</figcaption>
                        </figure>
                )
                })
                }</div>
        </div>

    )
}