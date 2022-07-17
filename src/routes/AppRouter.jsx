import { Routes, Route } from "react-router-dom";

import { Footer, Navigation } from "../components";
import { Landing, SignUp, SignIn, ArticleDetails, Article, CulturalTour, CulturalTourDetails } from "../views";

export const AppRouter = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route index path="/" element={<Landing />} />

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
        <Route path="/cultural-tour" element={<CulturalTour />} />
        <Route path="/cultural-tour/:id" element={<CulturalTourDetails />} />
      </Routes>

      <Footer />
    </>
  );
};
