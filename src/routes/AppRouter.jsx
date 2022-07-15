import { Routes, Route } from "react-router-dom";

import { Footer, Navigation } from "../components";
import { Landing, SignUp, SignIn, ArticleDetails } from "../views";

export const AppRouter = () => {
  return (
    <>
      <Navigation />
      
      <Routes>
        <Route index path="/" element={<Landing />} />

        <Route path="/inicio-sesion" element={<SignIn />} />
        <Route path="/registro" element={<SignUp />} />
        <Route path="/article-details" element={<ArticleDetails />} />
      </Routes>

      <Footer />
    </>
  );
};
