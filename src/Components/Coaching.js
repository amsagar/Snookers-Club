import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  SimpleGrid,
  GridItem,
  Text,
  Heading,
  Divider,
  Flex,
  Center,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Vedio1 from "./Vedio1";
import Vedio2 from "./Vedio2";

export default function Coaching() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <SimpleGrid gridTemplateColumns={"repeat(6,1fr)"}>
      <GridItem colSpan={6} p={50}>
        <Accordion bgColor={"white"}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Heading
                  fontSize={15}
                  color={"black"}
                  as="span"
                  flex="1"
                  textAlign="center"
                >
                  Tips and Tricks to improve your snooker game:
                </Heading>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={4}>
              <Text>
                <ol style={{ padding: 10 }}>
                  <li>
                    Develop a Solid Stance: Start by establishing a stable and
                    balanced stance. Keep your feet shoulder-width apart, with
                    one foot slightly forward for better balance. Bend your
                    knees slightly and maintain a relaxed posture.
                  </li>
                  <Divider p={5} />
                  <li>
                    Master the Grip: Hold the cue with a loose grip. Your
                    backhand should be light and flexible, allowing for a smooth
                    stroke. Experiment with different grips to find one that
                    feels comfortable and natural to you.
                  </li>
                  <Divider p={5} />
                  <li>
                    Focus on Cue Ball Control: Snooker is all about positioning
                    the cue ball for your next shot. Practice controlling the
                    speed, spin, and direction of the cue ball to achieve
                    precise positional play. Aim to leave yourself with easy
                    shots after each pot.
                  </li>
                  <Divider p={5} />
                  <li>
                    Plan Ahead: Before taking a shot, analyze the table and plan
                    your next few shots in advance. Identify which balls you
                    need to pot, and consider the position of the cue ball after
                    each pot. Having a clear strategy will help you make better
                    decisions during the game.
                  </li>
                  <Divider p={5} />
                  <li>
                    Practice Safety Shots: Sometimes it's better to play a
                    safety shot rather than going for a difficult pot. Focus on
                    developing your safety play, where you aim to leave the cue
                    ball in a position that makes it challenging for your
                    opponent to score. This can give you an advantage in the
                    game.
                  </li>
                  <Divider p={5} />
                  <li>
                    Patience and Precision: Snooker requires patience and
                    precision. Take your time to line up each shot carefully,
                    ensuring accurate cue ball control and potting the balls
                    cleanly. Avoid rushing your shots, as it can lead to
                    mistakes.
                  </li>
                  <Divider p={5} />
                  <li>
                    Break-building Skills: The break is the first shot of the
                    frame, and it's crucial to score as many points as possible.
                    Work on your break-building skills, which involve potting
                    red balls and positioning the cue ball for subsequent pots.
                    Aim to open up the red balls and create opportunities to
                    score higher points.
                  </li>
                  <Divider p={5} />
                  <li>
                    Cue Ball Positioning: Focus on leaving the cue ball in
                    optimal positions for your next shots. This involves
                    planning for angles and controlling the speed and spin of
                    the cue ball. Mastering cue ball positioning will give you
                    better control over the game.
                  </li>
                  <Divider p={5} />
                  <li>
                    Learn from Professionals: Watch professional snooker matches
                    and study the techniques and strategies used by top players.
                    Pay attention to their shot selection, positioning, and
                    safety play. Analyzing professional games can provide
                    valuable insights to enhance your own game.
                  </li>
                  <Divider p={5} />
                  <li>
                    Practice Regularly: Like any sport, regular practice is
                    essential for improving your snooker skills. Set aside
                    dedicated time to practice different shots, positional play,
                    and safety shots. The more you practice, the better you'll
                    become.
                  </li>
                  <Divider p={5} />
                  Remember, snooker is a challenging game that requires
                  patience, focus, and practice. Implement these tips into your
                  training routine and enjoy the process of honing your skills.
                  Good luck!
                </ol>
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <Divider color={"black"} />
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Heading
                  fontSize={15}
                  color={"black"}
                  as="span"
                  flex="1"
                  textAlign="center"
                >
                  Vedio Tutorials
                </Heading>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex wrap={"wrap"} gap={20} justifyContent={"center"}>
                <Button
                  onClick={onOpen}
                  leftIcon={<FontAwesomeIcon icon={faEye} />}
                >
                  View
                </Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>
                      <center>Beginner Level</center>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Center>
                        <iframe
                          width="350"
                          height="400"
                          src="https://www.youtube.com/embed/wdRCPdM2TQY"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </Center>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="teal" mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button variant="ghost">
                        <a href="https://www.youtube.com/@Breakfromlife">
                          Go To Channel
                        </a>
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>

                <Vedio1 />
                <Vedio2 />
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </GridItem>
    </SimpleGrid>
  );
}
