import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../functionalities/getData";
import { GetPopular } from "../functionalities/getPopular";
import { reducer } from "../main";
import { setLoading } from "../reducers/valuesMovieReducers";
import { genres } from "../Var Global/genres";
export const useData = () => {
  return useSelector((state: reducer) => state.data.data);
};
export const useShowMovie = () => {
  return useSelector((state: reducer) => state.data.showMovie);
};
export const usePopulars = () => {
  return useSelector((state: reducer) => state.data.popular);
};

export const useChargeData = () => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    const timeData = setTimeout(() => {
      GetPopular(dispatch);
      getData(genres, dispatch);
    }, 600);
    return () => clearTimeout(timeData);
  }, []);
  dispatch(setLoading(false));
};
