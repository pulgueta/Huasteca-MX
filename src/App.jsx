import { Routes, Route } from "react-router-dom";

import { Landing } from "./views";

export const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Landing />} />
    </Routes>
  );
};
