import styled  from 'styled-components';

export const Container = styled.div `
display:grid; //porque são 3 itens do mesmo tamanho, um do lado do outro, mas poderia ser flex
grid-template-columns:repeat(3, 1fr); //3 colunas de tamanhos iguais, então repete 3 vezes o 1fr
gap:2rem;
margin-top: -10rem;

div {
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);
  
  header{
    align-items:center;
    display:flex;
    justify-content:space-between;
  }

  strong {
    display: block; //o strong vem com padrão margin inline, dai o margin top não funciona, o display block faz com que o strong se comporte como uma div;
    margin-top:1rem;
    font-size:2rem;
    font-weight: 500;
    line-height: 3rem;
  }

  &.highlight-background {
    background: #33CC95;
    color: #fff;
  }
}

`;