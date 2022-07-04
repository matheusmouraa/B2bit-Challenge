import { Route, Routes } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Profile } from "./Pages/Profile";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
