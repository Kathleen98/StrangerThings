import GlobalStyles from "./components/GlobalStyles";
import "@mantine/core/styles.css";
import { MantineProvider, Flex } from "@mantine/core";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Characters from "./components/Characters";
import Story from "./components/StoryContainer";
import ModalStory from "./components/ModalStory";

function App() {
  return (
    <>
      <MantineProvider>
        <GlobalStyles />
        <Header />
        <Banner />
        <Flex direction={'column'} align={'center'}>
        <Story />
        <Characters />
        </Flex>
        <ModalStory />
      </MantineProvider>
    </>
  );
}

export default App;
