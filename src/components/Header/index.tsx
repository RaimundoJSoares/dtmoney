
import logoImg from '../../assets/logo.svg';
import { Container , Content} from './styles';

interface HeadProps{
  onOpenNewtransactionModal: () => void; }//nao vai receber nenhunm parametro e n vai devolver nenhum retorno

export function Header ({onOpenNewtransactionModal}:HeadProps){
  return(
   <Container>
     <Content>
     <img src={logoImg} alt="dtmoney" />
     <button type="button" onClick = {onOpenNewtransactionModal}>
       Nova Transação
     </button>
    </Content>
  </Container>
  )
}
//onRequestClose é usado para fechar uma janela apertando ESC por exemplo