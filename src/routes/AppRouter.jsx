import { Routes, Route } from "react-router-dom";

import { Footer, Navigation } from "../components";
import { Landing, SignUp, SignIn, ArticleDetails, Article, CulturalTour, CulturalTourDetails } from "../views";

export const AppRouter = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route index path="/" element={<Landing />} />

        <Route path="/inicio-sesion" element={<SignIn />} />
        <Route path="/registro" element={<SignUp />} />
        <Route path="/articulos" element={<Article />} />
        <Route path="/articulos/:id" element={<ArticleDetails />} />
        <Route path="/recorrido-cultural" element={<CulturalTour />} />
        <Route path="/recorrido-cultural/:id" element={<CulturalTourDetails />} />
      </Routes>

      <Footer />
    </>
  );
};
