import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  return (
    <Router>
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/books/create" element={<Create />} />
          <Route path="/books/edit/:id" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
