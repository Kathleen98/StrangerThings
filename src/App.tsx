import GlobalStyles from "./components/GlobalStyles";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Characters from "./components/Characters";

function App() {
  return (
    <>
      <MantineProvider>
        <GlobalStyles />
        <Header />
        <Banner />
        <Characters />
      </MantineProvider>
    </>
  )
}

export default App
