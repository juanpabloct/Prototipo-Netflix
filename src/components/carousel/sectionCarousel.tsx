import { useData } from "../../Hooks Personalities";
import { Carousel } from "./Carousel";
import "./styles.css";
export const SectionCarousel = () => {
  const data = useData();
  return (
    <div className="contain_all_carousel">
      {data.map((movie, id) => {
        return (
          <div key={id} className="containCarouselGender">
            <Carousel gender={movie} width={"100%"}/>;
          </div>
        );
      })}
    </div>
  );
};
