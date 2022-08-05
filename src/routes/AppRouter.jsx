import { Routes, Route, Navigate } from "react-router-dom";

import { Footer, Navbar } from "../components";
import {
  Landing,
  SignUp,
  SignIn,
  Article,
  ArticleDetails,
  CulturalTour,
  CityReport,
  CulturalTourDetails,
  About,
  ForgotPassword,
} from "../views";

import { PrivateRoute } from "./";

import { DashboardNavbar } from "../components/dashboard/components";
import { Profile } from "../components/dashboard/ui";

export const AppRouter = () => {
  const logged = localStorage.getItem("user") ?? "";

  return (
    <>
      {!logged ? <Navbar /> : <DashboardNavbar />}
      <Routes>
        <Route index path="/" element={<Landing />} />

        <Route path="/inicio-sesion" element={<SignIn />} />
        <Route path="/registro" element={<SignUp />} />
        <Route path="/proyectos" element={<Article />} />
        <Route path="/proyectos/:id" element={<ArticleDetails />} />
        <Route path="/recorridos-culturales" element={<CulturalTour />} />
        <Route
          path="/recorridos-culturales/:id"
          element={<CulturalTourDetails />}
        />
        <Route path="/reportes-ciudadanos" element={<CityReport />} />
        <Route path="/acerca-de" element={<About />} />
        <Route path="/restablecer" element={<ForgotPassword />} />

        <Route
          path="/perfil"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {!logged && <Footer />}
    </>
  );
};
