import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 58.75rem;
  padding: 2rem;
  margin: 0 auto;
`

export const Inner = styled.main`
  background: ${({ theme }) => theme.colors.black};
  padding: 3rem 3.5rem;
  border-radius: 8px;
  text-align: center;
`

export const Title = styled.h1``

export const SubTitle = styled.h3`
  margin: 1.4rem 0;
`

export const Table = styled.table`
  margin: 0 auto;
`

export const Button = styled.button`
  background-color: #4caf50; /* Cor de fundo do botão */
  color: white; /* Cor do texto do botão */
  padding: 10px 20px; /* Espaçamento interno do botão */
  font-size: 16px; /* Tamanho da fonte do botão */
  border: none; /* Remove a borda do botão */
  border-radius: 4px; /* Borda arredondada do botão */
  cursor: pointer; /* Cursor de ponteiro ao passar o mouse */
`
