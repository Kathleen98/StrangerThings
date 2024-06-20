import { Flex } from "@mantine/core";
import GlobalStyles from "../../components/GlobalStyles";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Story from "../../components/StoryContainer";
import Characters from "../../components/Characters";


function App() {
  return (
    <>
        <GlobalStyles />
        <Header />
        <Banner />
        <Flex direction={'column'} align={'center'}>
        <Story />
        <Characters />
        </Flex>
    </>
  );
}

export default App;
