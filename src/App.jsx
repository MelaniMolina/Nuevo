import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./paginas/LandingPage";
import Login from "./layout/Login";
import FormularioLogin from "./paginas/FormularioLogin";
import Dashboard from "./layout/Dashboard";
import FundamentoUseState from "./paginas/FundamentoUseState";
import FundamentoUseEffect from "./paginas/FundamentoUseEffect";
import FundamentoUseContext from "./paginas/FundamentoUseContext";
import FundamentosCustomHooks from "./paginas/FundamentosCustomHooks";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />}>
        </Route>

      
        <Route path="/login" element={<Login />}>
          <Route index element={<FormularioLogin />} />
        </Route>

        <Route path="/fundamentos" element={<Dashboard />}>
          <Route path="usestate" element={<FundamentoUseState />} />
          <Route path="useffect" element={<FundamentoUseEffect />} />
          <Route path="customHooks" element={<FundamentosCustomHooks />} />
          <Route path="usecontext" element={<FundamentoUseContext />} />
        </Route>


      </Routes>
    </BrowserRouter>

  )
}
export default App