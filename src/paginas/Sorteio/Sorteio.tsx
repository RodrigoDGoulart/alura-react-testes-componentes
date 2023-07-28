import { useListaParticipantes } from "../../state/hook/useListaParticipantes";

export default function Sorteio() {

  const participantes = useListaParticipantes();

  return (
    <section>
      <form>
        <select name='participanteDavez' id="participanteDavez">
          {participantes.map(participante => (
            <option key={participante}>{participante}</option>
          ))}
        </select>
      </form>
    </section>
  );
}