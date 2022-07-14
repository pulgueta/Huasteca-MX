import { Routes, Route } from "react-router-dom";

import { Navigation } from "../components";
import { Landing } from "../views";

export const AppRouter = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index path="/" element={<Landing />} />
      </Routes>
    </>
  );
};
