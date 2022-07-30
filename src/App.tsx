import { RecoilRoot } from 'recoil';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { theme } from './theme';
import ToDoList from './ToDoList';

const GlobalStyle = createGlobalStyle`
  ${reset}
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
