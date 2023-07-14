import {
  Card,
  Text,
  CardHeader,
  Image,
  GridItem,
  SimpleGrid,
  CardBody,
  Heading,
  CardFooter,
  Center,
  VStack,
} from "@chakra-ui/react";
import image from "../Images/snooker.jpeg";
import image2 from "../Images/news1.png";
import image3 from "../Images/news2.png";
import image4 from "../Images/news3.png";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <SimpleGrid
      gridTemplateColumns={"repeat(6,1fr)"}
      spacing={30}
      mt={{ base: 10, lg: 30, md: 10 }}
    >
      <GridItem colSpan={{ base: 2, lg: 2 }}>
        <Center mt={"35%"}>
          <Text fontSize={25} color={"white"}>
            Life is like a game of Snooker
          </Text>
        </Center>
      </GridItem>

      <GridItem colSpan={{ base: 4, lg: 2, md: 3 }}>
        <Card maxWidth={400} w={"auto"}>
          <CardHeader>
            <Center> Latest News</Center>
          </CardHeader>
          <CardBody>
            <Image src={image2} />
          </CardBody>
          <CardFooter>
            <VStack>
              <Text size={"sm"} color={"black"}>
                {" "}
                <Heading size={"sm"}>
                  The Ultimate Snooker Guide for Beginners March 15, 2023{" "}
                </Heading>
                This is the ultimate snooker guide for beginners.
              </Text>
              <br />
              <FontAwesomeIcon icon={faEye} />
              <a href="https://snookerfreaks.com/the-ultimate-snooker-guide-for-beginners/">
                Click
              </a>
            </VStack>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem colSpan={{ base: 6, lg: 2, md: 3 }}>
        <Card maxWidth={400} w={"auto"}>
          <CardHeader>
            <Center> Latest News</Center>
          </CardHeader>
          <CardBody>
            <Image src={image3} />
          </CardBody>
          <CardFooter>
            <VStack>
              <Text size={"sm"} color={"black"}>
                {" "}
                <Heading size={"sm"}>
                  Anatomy of a Snooker Cue may 7, 2023
                </Heading>
                Discover the ins and outs of a snooker cue in this detailed
                guide. From the tip to the butt, we
              </Text>
              <br />
              <FontAwesomeIcon icon={faEye} />
              <a href="https://snookerfreaks.com/anatomy-of-a-snooker-cue/">
                Click
              </a>
            </VStack>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem colSpan={2}></GridItem>

      <GridItem colSpan={{ base: 6, lg: 2, md: 3 }}>
        <Card maxWidth={400} w={"auto"}>
          <CardHeader>
            <Center> Latest News</Center>
          </CardHeader>
          <CardBody>
            <Image src={image4} />
          </CardBody>
          <CardFooter>
            <VStack>
              <Text size={"sm"} color={"black"}>
                {" "}
                <Heading size={"sm"}>
                  How to Choose the Right Snooker Table – Buyer’s Guide June 25,
                  2023
                </Heading>
                Looking to purchase a snooker table? Our comprehensive buyer's
                guide on how to choose the right snooker table covers everything
              </Text>
              <br />
              <FontAwesomeIcon icon={faEye} />
              <a href="https://snookerfreaks.com/how-to-choose-the-right-snooker-table-buyers-guide/">
                Click
              </a>
            </VStack>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem colSpan={{ base: 6, lg: 2, md: 3 }}>
        <Card maxWidth={400} w={"auto"}>
          <CardHeader>
            {" "}
            <Center>Upcoming Events</Center>
          </CardHeader>
          <CardBody>
            <Image src={image} />
          </CardBody>
          <CardFooter>
            <Heading fontSize={15}>
              Visit Tournaments Section To Know About Upcomming Events
            </Heading>
          </CardFooter>
        </Card>
      </GridItem>
    </SimpleGrid>
  );
}
