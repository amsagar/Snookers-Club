import React from "react";
import "../App.css";
import { useState } from "react";
import {
  Input,
  Button,
  Card,
  Text,
  CardHeader,
  VStack,
  Heading,
  Center,
  CardBody,
  Divider,
  Checkbox,
} from "@chakra-ui/react";

export default function Reservation() {
  const [time, setTime] = useState("");
  const [data, setdata] = useState([]);
  const handleChange = (event) => {
    setTime(event.target.value);
  };
  const reserve = () => {
    setdata([...data, time]);
  };

  const del = (id) => {
    let newdata = data.filter((item) => {
      if (item !== id) {
        return true;
      } else {
        return false;
      }
    });
    setdata(newdata);
  };
  return (
    <div>
      <VStack mt={50}>
        <Card>
          <CardHeader>
            <Heading fontSize={20}>
              <Center>Pick Date And Timings</Center>{" "}
            </Heading>
            <Divider color={"black"} mt={2} />
            <Checkbox>Table 1</Checkbox>
            <Checkbox>Table 2</Checkbox>
            <Checkbox>Table 3</Checkbox>
            <Checkbox>Table 4</Checkbox>
          </CardHeader>
          <CardBody>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
              onChange={handleChange}
            />
          </CardBody>
        </Card>
        <Button colorScheme="green" onClick={reserve}>
          Reserve
        </Button>
      </VStack>
      <Center>
        <VStack
          gap={20}
          flexDirection={"column-reverse"}
          w={"100%"}
          bgColor={"transparent"}
          bgGradient='linear("to-bottom", "green.200","pink.500")'
        >
          {data.map((key, item) => {
            return (
              <Card w={{ base: "300px", lg: "300px", md: "300px" }}>
                <CardHeader>
                  <Center>
                    <Heading size={"md"}>Date And Time</Heading>
                  </Center>{" "}
                </CardHeader>
                <Divider color={"grey"} />
                <CardBody>
                  <Text fontSize={20}>
                    {" "}
                    <Center>{key.replace("T", " ")}</Center>
                  </Text>
                </CardBody>

                <Button
                  colorScheme="red"
                  size={"sm"}
                  float={"right"}
                  onClick={() => del(key)}
                >
                  Cancel
                </Button>
              </Card>
            );
          })}
        </VStack>
      </Center>
    </div>
  );
}
