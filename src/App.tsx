import { RecoilRoot } from 'recoil';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { theme } from './theme';
import ToDoList from './ToDoList';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  ${reset}
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <ToDoList />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
