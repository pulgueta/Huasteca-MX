import { Routes, Route } from "react-router-dom";

import { Footer, Navigation } from "../components";
import { Landing, Registro, Signin, ArticleDetails } from "../views";

export const AppRouter = () => {
  return (
    <>
      <Navigation />
      
      <Routes>
        <Route index path="/" element={<Landing />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/articleDetails" element={<ArticleDetails />} />
      </Routes>

      <Footer />
    </>
  );
};
