import "./App.css";
import { Box, Text, Button } from "@chakra-ui/react";
import backgroundImage from './assets/Ciclismo-2.jpg';

function App() {
  return (
    <Box display={"flex"} flexDirection={"column"} w={"80vw"} h={"100vh"}>
      <Box
        style={{ backgroundImage: `url(${backgroundImage})` }}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        bg={"gray.400"}
        p={10}
      >
        <Text fontSize="4xl" color={"white"} fontWeight={"light"} mb={5}>
          Domina el terreno
        </Text>
        <Box  display={"flex"} gap={2}>
          <Button colorScheme="gray" variant="outline">
            VER DETALLES
          </Button>
          <Button colorScheme="gray" variant="outline">
            VER VIDEOS
          </Button>
        </Box>
      </Box>
      <Box
        style={{ backgroundImage: `url(${backgroundImage})` }}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        bg={"gray.400"}
        w={"30%"}
        h={"30%"}
        p={10}
        mt={10}
      >
        <Text fontSize="xl" color={"white"} fontWeight={"light"} mb={5}>
          Domina el terreno
        </Text>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <Button colorScheme="gray" variant="outline">
            VER DETALLES
          </Button>
          <Button colorScheme="gray" variant="outline">
            VER VIDEOS
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
