import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Formulario from "./componentes/Formulario/Formulario";

export default function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={Formulario}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}
