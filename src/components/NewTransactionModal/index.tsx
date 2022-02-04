import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeIMG from '../../assets/close.svg'
import IncomeIMG from '../../assets/income.svg'
import OutcomeIMG from '../../assets/outcome.svg'
import { api } from '../../services/api';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen:boolean;
  onRequestClose: () => void;  
  
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps) {
  const [type, setType] = useState('deposit')
  //sempre iniciar uma informação com o mesmo formato da informação que armazenamos no estado.
  const [title, setStitle] = useState('') //input de texto começam com valor default vazio
  const [value, setValue] = useState(0) //input numero começando com valor numero 0
  const [category, setCategory] = useState('')

  function handleCreateNewTransaction(event: FormEvent) { //toda vez que o usuario clicar com enter por exemplo, ele executar essa função
    event.preventDefault()
  }

  const data = {
    title,
    value,
    category,
    type,
  }
  api.post('/transactions', data)

  return(
    <>
     <Modal 
     isOpen={isOpen} 
     onRequestClose={onRequestClose} 
     overlayClassName="react-modal-overlay"
     className= "react-modal-content"
     > 
     <button 
     type='button'
      onClick={onRequestClose}
      className="react-modal-close"
      >
        <img src={closeIMG} alt="close" />
        </button>
       <Container onSubmit={handleCreateNewTransaction}> 
       <h2>Cadastrar transação</h2>
       <input placeholder="Titulo"
       value = {title}
       onChange = {(event) => setStitle(event.target.value)}
       />

       <input type= "number" 
       placeholder= "Valor"
       value = {value}
       onChange = {(event)=> setValue (Number(event.target.value))}
       />

      <TransactionTypeContainer>
        <RadioBox  type='button'
        onClick={() => {setType('deposit')}}
        isActive={type === 'deposit'}
        activeColor = 'green'
        >
          <img src={IncomeIMG} alt='income'></img>
          <span>
            Entrada
          </span>
        </RadioBox >
        <RadioBox  type='button'
        onClick={()=>{setType('withdraw')}}
        isActive = {type === 'withdraw'}
        activeColor = 'red'
        >

          <img src={OutcomeIMG} alt='saida'></img>
          <span>
            Saída
          </span>
        </RadioBox >
      </TransactionTypeContainer>

       <input placeholder="Categoria"
       value = {category}
       onChange = {(event)=> setCategory(event.target.value)}
       />

       <button type="submit">
         Cadastrar
       </button>
       </Container>
     </Modal>
    </>
  )
}