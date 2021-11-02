import Header from './components/Header';
import styled from 'styled-components'
import Cards from './components/Cards';
import SwipeButtons from './components/SwipeButtons';

const AppStyles = styled.div`
`

function App() {
  return (
    <AppStyles>
      <Header />
      <Cards />
      <SwipeButtons />
    </AppStyles>
  );
}

export default App;
