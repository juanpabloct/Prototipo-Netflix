import { useData } from "../../Hooks Personalities"
import { TypeMoviesInfo } from '../../types/data/index';
import { Carousel } from "./Carousel";
import "./styles.css"
export const SectionCarousel=()=>{
    const data=useData()
    console.log(data);
    
    return (
    <div className="contain_all_carousel">
        {data.map((movie)=>{
            return <Carousel gender={movie}/>
        })}
    </div>
    )
}