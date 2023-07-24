import styled from 'styled-components'

const HeaderModule = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

const Cabecalho = () => (
  <HeaderModule>
    <h1>EBAC Jobs</h1>
  </HeaderModule>
)

export default Cabecalho
