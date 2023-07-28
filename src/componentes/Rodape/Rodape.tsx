import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes";

import './Rodape.css';
import { useSorteador } from "../../state/hook/useSorteador";

export default function Rodape () {
  const participantes = useListaParticipantes();

  const navegarPara = useNavigate();
  const sortear = useSorteador();

  const iniciar = () => {
    sortear(); 
    navegarPara('/sorteio');
  }


  return(
    <footer className="rodape-configuracoes">
      <button
      className="botao"
      onClick={iniciar}
      disabled={participantes.length < 3}>
        Iniciar brincadeira
      </button>
      <img src="/imagens/sacolas.png" alt='Sacolas de compras' />
    </footer>
  );
}