import { useEffect, useState } from "react";
import { Movie, TypeMoviesInfo } from "../../types/data/index";
import { ComplementImage } from "../../Var Global/complementImage";

export const Carousel = ({ gender }: { gender: TypeMoviesInfo }) => {
  const [avanzar, setAvanzar] = useState(0);
  const valor = `-${avanzar}%`;
  return (
    <div>
      <h1 className="gender">{gender.name}</h1>
      <button onClick={() => setAvanzar(avanzar !== 80 ? avanzar + 5 : 0)}>
        {">"}
      </button>
      <div className="parentSlider">
        <div
          className="contain_carousel"
          style={{ transform: `translateX(${valor})` }}
        >
          {gender.movies.map((movie: Movie) => {
            return (
              <div key={movie.id} className="contentImage">
                <img
                  src={ComplementImage + movie.poster_path}
                  alt={movie.title}
                />
                <figcaption>{movie.title}</figcaption>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
