import {
  Heading,
  TabList,
  Tabs,
  Tab,
  Text,
  TabPanels,
  TabPanel,
  Card,
  HStack,
  CardHeader,
  Divider,
  Center,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaste } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { useToast } from "@chakra-ui/react";

export default function Membership() {
  const toast = useToast();
  const handleChange = () => {
    toast({
      title: "This Feature Will be Enabled Soon ",
      status: "warning",
      isClosable: true,
      duration: 3000,
    });
  };
  return (
    <Tabs color={"yellow"}>
      <TabList>
        <Tab>
          <Heading fontSize="xl" color={"white"}>
            Info
          </Heading>
        </Tab>
        <Tab>
          <Heading fontSize="xl" color={"white"}>
            Pricing
          </Heading>
        </Tab>
        <Tab>
          <Heading fontSize="xl" color={"white"}>
            Discount
          </Heading>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel color={"white"}>
          <HStack
            display={"flex"}
            flexDirection={{ base: "column", lg: "row", md: "row" }}
          >
            <Card>
              <CardHeader>
                {" "}
                <Center>
                  <Heading size={"md"}>Associate member</Heading>
                </Center>
              </CardHeader>{" "}
              <Divider color={"grey"} />
              <Text fontSize={15} p={5}>
                An associate member may be someone interested in playing in your
                club's sport. But it can also be someone who wants to have
                participation in the organization or simply want to be part of
                the same club, such as being part of the board or committee.
              </Text>
              <Divider color={"grey"} />
              <CardFooter>
                <Center>
                  <Button
                    colorScheme="teal"
                    float={"right"}
                    leftIcon={<FontAwesomeIcon icon={faPaste} />}
                    onClick={handleChange}
                  >
                    {" "}
                    Fill Form
                  </Button>
                </Center>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                {" "}
                <Center>
                  <Heading size={"md"}>Affiliate Member</Heading>
                </Center>
              </CardHeader>{" "}
              <Divider color={"grey"} />{" "}
              <Text fontSize={15} p={5}>
                An affiliate member can be a member who, although not practicing
                the sport modality, wants to benefit from the advantages offered
                by being a member of your club. Something very common is that a
                person becomes a member, in order to use the facilities.
              </Text>
              <Divider color={"grey"} />
              <CardFooter>
                <Center>
                  <Button
                    colorScheme="teal"
                    float={"right"}
                    leftIcon={<FontAwesomeIcon icon={faPaste} />}
                    onClick={handleChange}
                  >
                    {" "}
                    Fill Form
                  </Button>
                </Center>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                {" "}
                <Center>
                  <Heading size={"md"}>Social member</Heading>
                </Center>
              </CardHeader>{" "}
              <Divider color={"grey"} />{" "}
              <Text fontSize={15} p={5}>
                In addition to the club's own athletes who play on the field,
                there are more people who play different roles in your club.
                Coaches, parents, as well as volunteers and auxiliary staff are
                also part of your club.
              </Text>
              <Divider color={"grey"} />
              <CardFooter>
                <Center>
                  <Button
                    colorScheme="teal"
                    float={"right"}
                    leftIcon={<FontAwesomeIcon icon={faPaste} />}
                    onClick={handleChange}
                  >
                    {" "}
                    Fill Form
                  </Button>
                </Center>
              </CardFooter>
            </Card>
          </HStack>
        </TabPanel>
        <TabPanel>
          <Card>
            <table>
              <tr>
                <th>Type Of Member</th>
                <th>Monthly Subscription</th>
                <th>Year Subscription</th>
              </tr>
              <tr>
                <td>
                  <Center>Associate Member</Center>
                </td>
                <td>
                  <Center>5000 INR</Center>
                </td>
                <td>
                  <Center>50000 INR</Center>
                </td>
              </tr>
              <tr>
                <td>
                  <Center>Affiliate Member</Center>
                </td>
                <td>
                  <Center>3000 INR</Center>
                </td>
                <td>
                  <Center>30000 INR</Center>
                </td>
              </tr>
              <tr>
                <td>
                  <Center>Social Member</Center>
                </td>
                <td>
                  <Center>1500 INR</Center>
                </td>
                <td>
                  <Center>15000 INR</Center>
                </td>
              </tr>
            </table>
          </Card>
        </TabPanel>
        <TabPanel>
          <Card>
            <ul>
              <li>
                <Heading fontSize={20}> Membership Discounts: </Heading>
                <Text fontSize={15}>
                  {"1)   "}Join our snooker club as a member and enjoy
                  discounted rates on table bookings.
                  <br /> Members receive a special discounted hourly rate for
                  table usage, allowing you to play more for less.
                  <br />
                  {"2)  "} Avail a discounted annual membership fee, making it
                  even more affordable to be a part of our snooker club
                  community.
                </Text>
              </li>
              <li>
                <Heading fontSize={20}> Off-Peak Hours Discount:</Heading>
                <Text fontSize={15}>
                  {"1)  "}Visit our snooker club during off-peak hours,
                  typically during weekdays or specific times of the day, and
                  enjoy discounted rates.
                  <br />
                  {"2)  "}
                  This discount encourages members to enjoy their games during
                  quieter periods and provides cost-saving benefits.
                </Text>
              </li>
              <li>
                <Heading fontSize={20}> Group Booking Discount:</Heading>
                <Text fontSize={15}>
                  {"1)  "} Gather your friends or fellow snooker enthusiasts and
                  make a group booking. Groups of a certain size (e.g., four or
                  more players) are eligible for a discounted rate on table
                  bookings.
                  <br />
                  {"2)"}This discount encourages social play and adds a
                  competitive element to your snooker sessions.
                </Text>
              </li>
            </ul>
          </Card>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
