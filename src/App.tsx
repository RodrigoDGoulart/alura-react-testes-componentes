import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Configuracao from "./paginas/Configuracao/Configuracao";

export default function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Configuracao />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}
