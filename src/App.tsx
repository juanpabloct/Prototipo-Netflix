import { useEffect } from "react";
import "./App.css";
import { genres } from "./Var Global/genres";
import { useDispatch, useSelector } from "react-redux";
import { GetPopular } from "./functionalities/getPopular";
import { getData } from "./functionalities/getData";
import { setLoading } from "./reducers/valuesMovieReducers";
import { Content } from "./components/content/content";
import { Cargando } from "./components/cargando/cargando";
import { SeccionLogoNetflix } from "./components/navbar/seccionLogoNetflix";
import { reducer } from "./main";
function App() {
  document.title = "Netflix";
  const { loading } = useSelector((state: reducer) => state.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading());
    GetPopular(dispatch);
    getData(genres, dispatch);
  }, [dispatch, GetPopular, getData, setLoading]);
  if (!loading) return <Content />;
  else
    return (
      <>
        <SeccionLogoNetflix />
        <Cargando />
      </>
    );
}

export default App;
