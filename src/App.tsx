import GlobalStyles from "./components/GlobalStyles";
import "@mantine/core/styles.css";
import { MantineProvider, Flex } from "@mantine/core";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Characters from "./components/Characters";
import SpoilerText from "./components/Spoiler";

function App() {
  return (
    <>
      <MantineProvider>
        <GlobalStyles />
        <Header />
        <Banner />
        <Flex direction={'column'} align={'center'}>
        <SpoilerText />
        <Characters />
        </Flex>
      </MantineProvider>
    </>
  );
}

export default App;
