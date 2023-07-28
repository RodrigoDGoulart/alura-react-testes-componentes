import { useState } from "react";
import { useListaParticipantes } from "../../state/hook/useListaParticipantes";
import { useResultadoSorteio } from "../../state/hook/useResultadoSorteio";

export default function Sorteio() {

  const participantes = useListaParticipantes();

  const [participanteDaVez, setParticipanteDaVez] = useState('');
  const [amigoSecreto, setAmigoSecreto] = useState('');

  const resultado = useResultadoSorteio();

  const sortear = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!); 
    }
  }

  return (
    <section>
      <form onSubmit={sortear}>
        <select
          required
          name='participanteDavez'
          id="participanteDavez"
          value={participanteDaVez}
          placeholder="Selecione o seu nome"
          onChange={e => setParticipanteDaVez(e.target.value)}
        >
          {participantes.map(participante => (
            <option key={participante}>{participante}</option>
          ))}
        </select>
        <button>Sortear</button>
      </form>
      {amigoSecreto && <p role='alert'>{amigoSecreto}</p>}
    </section>
  );
}