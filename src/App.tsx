import GlobalStyles from "./components/GlobalStyles";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Header from "./components/Header";

function App() {
  return (
    <>
      <MantineProvider>
        <GlobalStyles />
        <Header />
      </MantineProvider>
    </>
  )
}

export default App
