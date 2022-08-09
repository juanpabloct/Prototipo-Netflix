import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Grid } from '@mui/material'
import { url } from './connect api/urlApi'
import { genres } from './Var Global/genres'
import { Genres } from './types/genres/TypeGenres';
import { DataMovies } from './types/TypeDataMovie';
const getData=async(genres:Genres[])=>{
  const allData:DataMovies[]=[]
  genres.map(()=>{
    const data=url(`/discover/movie?api_key=20f8bdc37feb2aa2ca15659e13d847d3&with_genres=${genres[0].name}`).then(res=>{console.log(res.data.results)})
  })
    console.log(allData);
    
}
function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    getData(genres)
  }, [])
  return (
   <Grid container direction={"column"} justifyContent={"center"} >
      <Navbar/>
      <main>

      </main>
   </Grid>
  )
}

export default App
