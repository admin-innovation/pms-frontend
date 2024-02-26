import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signin" element={<Signin />} />
        <Route path="/dahsboard" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="departments" element={<Departments />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="goals" element={<Goals />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
