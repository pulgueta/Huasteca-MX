import { Routes, Route, Navigate } from "react-router-dom";

import { Footer, Navigation } from "../components";
import { Landing, SignUp, SignIn, Article, ArticleDetails, CulturalTour, CityReport, CulturalTourDetails, About, ForgotPassword } from "../views";

export const AppRouter = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route index path="/" element={<Landing />} />

        <Route path="/inicio-sesion" element={<SignIn />} />
        <Route path="/registro" element={<SignUp />} />
        <Route path="/proyectos" element={<Article />} />
        <Route path="/proyectos/:id" element={<ArticleDetails />} />
        <Route path="/recorridos-culturales" element={<CulturalTour />} />
        <Route path="/recorridos-culturales/:id" element={<CulturalTourDetails />} />
        <Route path="/reportes-ciudadanos" element={<CityReport />} />
        <Route path="/acerca-de" element={<About />} />
        <Route path="/restablecer" element={<ForgotPassword />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  );
};
