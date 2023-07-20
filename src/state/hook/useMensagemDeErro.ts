import { useRecoilValue } from 'recoil';
import { erroState } from '../atom';

export const useMensagemDeErro = () => {
  const mensagemDeErro = useRecoilValue(erroState);
  return mensagemDeErro;
}
