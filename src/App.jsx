import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import CartLayout from "./layouts/CartLayout/CartLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DefaultLayout />} />
          <Route path="/cart" element={<CartLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
