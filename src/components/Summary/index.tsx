import { useContext } from 'react';
import incomeIMG from '../../assets/income.svg';
import outcomeIMG from '../../assets/outcome.svg';
import totalIMG from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from "./styles";

export function Summary() {
  const {transactions} = useContext(TransactionsContext)
  
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIMG} alt='Entradas'></img>
        </header>
        <strong>R$1000 reais</strong>
      </div>
      <div>
        <header>
          <p> Saidas</p>
          <img src={outcomeIMG} alt='Saidas'></img>
        </header>
        <strong>-R$500 reais</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalIMG} alt='total'></img>
        </header>
        <strong>R$500 reais</strong>
      </div>
    </Container>
  )
}