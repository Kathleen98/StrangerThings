import GlobalStyles from "./components/GlobalStyles";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <MantineProvider>
        <GlobalStyles />
        <Header />
        <Banner />
      </MantineProvider>
    </>
  )
}

export default App
