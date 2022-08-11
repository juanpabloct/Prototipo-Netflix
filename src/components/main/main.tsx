import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../App";
import { reducer } from "../../main";
import { setLoading } from "../../reducers/valuesMovieReducers";
import { TypeMoviesInfo } from "../../types/data";
import { genres } from "../../Var Global/genres";

export const Main = () => {
  const dispatch = useDispatch();
  const {
    backdrop_path,
    adult,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
  } = useSelector((reduce: reducer) => {
    return reduce?.data.showMovie;
  });
  console.log(poster_path);

  useEffect(() => {
    getData(genres, dispatch);
  }, [dispatch]);
  return (
    <div>
      <img src={"https://image.tmdb.org/t/p/w500/" + backdrop_path} alt="" />
    </div>
  );
};
