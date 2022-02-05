import incomeIMG from '../../assets/income.svg';
import outcomeIMG from '../../assets/outcome.svg';
import totalIMG from '../../assets/total.svg';
import {  useTransactions } from '../../hooks/UseTransactions';
import { Container } from "./styles";

export function Summary() {
  const {transactions} = useTransactions();

  const summary = transactions.reduce((acc, transaction) =>{
    if (transaction.type === 'deposit'){
      acc.deposits += transaction.amount; //deposito somando ao acumulator
      acc.total += transaction.amount; //deposito somando ao total
    }else {
      acc.withdraws += transaction.amount; //se for retirada, soma ao acumulador
      acc.total -= transaction.amount; //retirada, subtrai ao total
    }
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })
  
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIMG} alt='Entradas'></img>
        </header>
        <strong>
        {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  }).format(summary.deposits)}
          </strong>
      </div>
      <div>
        <header>
          <p> Saidas</p>
          <img src={outcomeIMG} alt='Saidas'></img>
        </header>
        <strong> -
        {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  }).format(summary.withdraws)}
         </strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalIMG} alt='total'></img>
        </header>
        <strong>
        {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  }).format(summary.total)}
          </strong>
      </div>
    </Container>
  )
}