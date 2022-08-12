import { useEffect } from "react";
import { useData } from "../../Hooks Personalities";
import { TypeMoviesInfo } from "../../types/data/index";
import { Carousel } from "./Carousel";
import "./styles.css";
export const SectionCarousel = () => {
  const data = useData();
  return (
    <div className="contain_all_carousel">
      {data.map((movie, id) => {
        return <Carousel gender={movie} key={id} />;
      })}
    </div>
  );
};
