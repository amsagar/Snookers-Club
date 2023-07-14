import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Stack,
  GridItem,
  HStack,
  Heading,
  Input,
  SimpleGrid,
  VStack,
  Divider,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faSquareUpRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Chat() {
  const [newmsg, setmsg] = useState("");
  const [msgqueue, setmsgqueue] = useState([]);
  const toast = useToast();
  const storeMessage = (event) => {
    var msg = event.target.value;
    setmsg(msg);
  };
  const validate = () => {
    if (newmsg !== "") {
      setmsgqueue([...msgqueue, newmsg]);
    } else {
      toast({
        title: "Enter The Message",

        status: "warning",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  var recievedmsg = ["Hai every one ", "Lets Play On Sunday"];
  return (
    <SimpleGrid gridTemplateColumns={"repeat(6,1fr)"} mt={10}>
      <GridItem colSpan={{ base: 6, lg: 2, md: 2 }} p={{ base: 5, lg: 10 }}>
        <VStack bgColor={"transparent"} borderColor={"teal.400"} border={"8px"}>
          <Box borderRadius={100} bgColor={"teal"} w={50} h={50}>
            <Center>
              <FontAwesomeIcon
                fontSize={30}
                color="white"
                icon={faUser}
                style={{ padding: 5 }}
              />
            </Center>
          </Box>
          <Center color={"white"}> ~ Sagar Patil</Center>
          <Center color={"white"}>+91 6363943534</Center>
        </VStack>
      </GridItem>
      <GridItem colSpan={{ base: 6, lg: 4, md: 4 }} p={{ base: 5, lg: 10 }}>
        <VStack borderRadius={10} border={2}>
          <Card w={"100%"} bgColor={"#d3d3d3"}>
            <CardHeader bgColor={"white"}>
              <Center>
                {" "}
                <FontAwesomeIcon icon={faPeopleGroup} fontSize={30} />{" "}
              </Center>
              <Heading>
                <Center fontSize={20}>Community Tab</Center>
              </Heading>
            </CardHeader>
            <Divider />
            <CardBody w={"90%"} minHeight={"20vh"}>
              <Stack float={"left"}>
                {recievedmsg.map((item) => {
                  return (
                    <Card
                      float={"right"}
                      bgColor={"white"}
                      maxWidth={300}
                      w={"auto"}
                      font-family={"Helvetica"}
                      p={2}
                    >
                      {" "}
                      <Text float={"right"} fontSize={10}>
                        Amogh H B M
                      </Text>
                      <HStack>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        <Text> {item}</Text>
                      </HStack>
                    </Card>
                  );
                })}

                <Stack float={"right"}>
                  {msgqueue.map((item) => {
                    return (
                      <Card
                        float={"right"}
                        bgColor={"white"}
                        maxWidth={300}
                        w={"auto"}
                        font-family={"Helvetica"}
                        p={2}
                      >
                        <Text float={"right"} fontSize={10}>
                          {" "}
                          ~ Sagar Patil
                        </Text>

                        <HStack>
                          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                          <Text maxWidth={250} w={"auto"}>
                            {" "}
                            {item}
                          </Text>
                        </HStack>
                      </Card>
                    );
                  })}
                </Stack>
              </Stack>{" "}
            </CardBody>
            <CardFooter bgColor={"white"}>
              <HStack>
                <Input
                  placeholder="Type Here"
                  onChange={storeMessage}
                  minWidth={{ base: "100px",md:"400px",lg:"700px"}}
                />
                <Button
                  leftIcon={<FontAwesomeIcon icon={faSquareUpRight} />}
                  onClick={validate}
                  colorScheme="teal"
                >
                  Send
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        </VStack>
      </GridItem>
    </SimpleGrid>
  );
}
