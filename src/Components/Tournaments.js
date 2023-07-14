import data from "./data.json";
import {
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Center,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

export default function Tournaments() {
  const toast = useToast();
  const handleChange = () => {
    toast({
      title: "Successfully  Registerd",
      status: "success",
      isClosable: true,
      duration: 3000,
    });
  };

  return (
    <HStack
      color={"white"}
      wrap={"wrap"}
      flexDirection={{ base: "column", lg: "row" }}
      mt={10}
      gap={10}
      p={10}
    >
      {data.map((item) => {
        return (
          <Center>
            {" "}
            <Card size={"sm"} borderTop={"8px"} borderColor={"teal"}>
              <CardHeader>
                <Heading fontSize={15}>{item.tournament}</Heading>
              </CardHeader>
              <CardBody fontWeight={100}>
                Match Id:-{item.match_id}
                <br></br>Location :-{item.location}
                <br />
                Start Time :-{item.start_time}
              </CardBody>
              <CardFooter>
                <Button colorScheme="teal" onClick={handleChange}>
                  Register
                </Button>
              </CardFooter>
            </Card>
          </Center>
        );
      })}
    </HStack>
  );
}
