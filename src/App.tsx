import { useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { genres } from "./Var Global/genres";
import { useDispatch, useSelector } from "react-redux";
import { reducer } from "./main";
import { ShowMovie } from "./components/showMovie/showMovie";
import { GetPopular } from "./functionalities/getPopular";
import { getData } from "./functionalities/getData";
import { setLoading } from "./reducers/valuesMovieReducers";
import { Cargando } from "./components/cargando/cargando";
import { Content } from "./components/content/content";
function App() {
  document.title = "Netflix";
  const { loading, data, error, showMovie, popular } = useSelector(
    (state: reducer) => state.data
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading());
    setTimeout(() => {
      GetPopular(dispatch);
      getData(genres, dispatch);
    }, 3000);
  }, [dispatch, GetPopular, getData, setLoading]);
  if (loading) {
    return (
      <div className="estate_charge">
        <Navbar />
        <Cargando />
      </div>
    );
  } else {
    return (
      <>
        <Content />
      </>
    );
  }
}

export default App;
