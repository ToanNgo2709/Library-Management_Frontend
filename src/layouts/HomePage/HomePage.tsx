import { Carousel } from "./components/Carousel";
import { ExportTopBooks } from "./components/ExploreTopBooks";
import { Hero } from "./components/Hero";
import { LibraryServices } from "./components/LibraryServices";

export const HomePage = () => {
  return (
    <>
      <ExportTopBooks />
      <Carousel />
      <Hero />
      <LibraryServices />
    </>
  );
};
