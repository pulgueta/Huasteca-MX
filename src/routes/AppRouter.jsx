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

import RequireAuth from "../components/RequireAuth";

import {
  AdminNavbar,
  UserNavbar,
  ModNavbar,
} from "../components/dashboard/components";
import {
  Profile,
  ArticleMonitor,
  ProblemReport,
  AcceptedArticles,
} from "../components/dashboard/ui";

import {
  MemberAdmin,
  NewPlace,
  Articles as GenArticles,
  ModCultural,
} from "../components/dashboard/ui/contentGenerator";

import {
  Cultural,
  ProblemList,
  UsersList,
  Articles,
  LocalitationProblems,
} from "../components/dashboard/ui/administrator";

export const AppRouter = () => {
  const logged = localStorage.getItem("user") ?? "";

  return (
    <>
      {!logged && <Navbar />}
      {/* check from localstorage the role of the user and show its respective navbar */}
      {localStorage.getItem("rol") === "Admin" && <AdminNavbar />}
      {localStorage.getItem("rol") === "generator" && <ModNavbar />}
      {(localStorage.getItem("rol") === "user" || localStorage.getItem("rol") === "usuario") && <UserNavbar />}


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
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/perfil/monitor-articulos"
          element={
            <RequireAuth>
              <ArticleMonitor />
            </RequireAuth>
          }
        />
        <Route
          path="/perfil/reportar-problema"
          element={
            <RequireAuth>
              <ProblemReport />
            </RequireAuth>
          }
        />
        <Route
          path="/perfil/articulos-aceptados"
          element={
            <RequireAuth>
              <AcceptedArticles />
            </RequireAuth>
          }
        />
        <Route
          path="/perfil/generador/usuarios"
          element={
            <RequireAuth>
              <MemberAdmin />
            </RequireAuth>
          }
        />
        <Route
          path="/perfil/generador/registrar-lugar"
          element={
            <RequireAuth>
              <NewPlace />
            </RequireAuth>
          }
        />
        <Route
          path="/perfil/generador/reportar-problema"
          element={
            <RequireAuth>
              <ProblemReport />
            </RequireAuth>
          }
        />
        <Route
          path="/perfil/generador/articulos"
          element={
            <RequireAuth>
              <GenArticles />
            </RequireAuth>
          }
        />
        <Route
          path="/perfil/generador/recorridos-culturales"
          element={
            <RequireAuth>
              <ModCultural />
            </RequireAuth>
          }
        />

        <Route
          path="/perfil/admin/usuarios"
          element={
            <RequireAuth>
              <UsersList />
            </RequireAuth>
          }
        />
        <Route
          path="/perfil/admin/recorridos-culturales"
          element={
            <RequireAuth>
              <Cultural />
            </RequireAuth>
          }
        />
        <Route
          path="/perfil/admin/reportar-problema"
          element={
            <RequireAuth>
              <ProblemReport />
            </RequireAuth>
          }
        />
        <Route
          path="/perfil/admin/lista-problemas"
          element={
            <RequireAuth>
              <ProblemList />
            </RequireAuth>
          }
        />
        <Route
          path="/perfil/admin/lista-problemas/:lat/:lng"
          element={
            <RequireAuth>
              <LocalitationProblems />
            </RequireAuth>
          }
        />
        <Route
          path="/perfil/admin/articulos"
          element={
            <RequireAuth>
              <Articles />
            </RequireAuth>
          }
        />

        <Route path="*" element={<Navigate to={!logged ? "/" : "/perfil"} />} />
      </Routes>

      {!logged && <Footer />}
    </>
  );
};
