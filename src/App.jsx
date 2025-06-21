import { Routes, Route } from "react-router-dom";
import Theme1 from "./routes/theme1/theme1.component";
import Theme2 from "./routes/theme2/theme2.component";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Theme1 />} />
        <Route path="dark/" element={<Theme2 />} />
      </Routes>
    </>
  );
};

export default App;
