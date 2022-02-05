import { Dashboard } from './components/DashBoard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/UseTransactions';

Modal.setAppElement('#root');

export function App() {
   //criando um estado para informar se o modal está aberto ou fechado:
   const [isNewTransactionModal, setIsNewTransactionModal] = useState(false);

   function handleOpenNewTransactionModal() { //sempre quando o usuario clicar ou fazer uma ação, usar handle
     setIsNewTransactionModal(true);
   }
 
   function hanbleCloseNewTransactionModal() {
     setIsNewTransactionModal(false);
   }

  return (
    <TransactionsProvider>
      <Header onOpenNewtransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal 
      isOpen={isNewTransactionModal} 
      onRequestClose={hanbleCloseNewTransactionModal}/>
      <GlobalStyle/>
    </TransactionsProvider>
  );
}
