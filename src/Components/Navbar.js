import { Button, HStack, Image, Center, VStack } from "@chakra-ui/react";
import { useDisclosure, Text } from "@chakra-ui/react";
import {
  faBars,
  faChalkboard,
  faCircleCheck,
  faHome,
  faMedal,
  faPeopleGroup,
  faPhotoFilm,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image1 from "../Images/snooker-removebg-preview.png";
import { useMediaQuery } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const mov = useNavigate();
  const shift = () => {
    mov("/membership");
  };
  const shiftHome = () => {
    mov("/");
  };
  const shiftReservation = () => {
    mov("/reservation");
  };
  const shifttournament = () => {
    mov("/tournaments");
  };
  const shifttoCommunity = () => {
    mov("/community");
  };
  const shiftCoaching = () => {
    mov("/coaching");
  };
  const shiftGallery = () => {
    mov("/gallery");
  };
  return (
    <div justifyContent={{ lg: "space-between" }}>
      {isLargerThan800 ? (
        <Image src={Image1} w={250} h={100} />
      ) : (
        <Center>
          <Image src={Image1} w={300} h={100} />
        </Center>
      )}
      <HStack justifyContent={"end"}>
        <Button
          colorScheme="teal"
          color={"#ffffff"}
          size={{ base: "sm", lg: "md" }}
          onClick={shiftHome}
        >
          <FontAwesomeIcon icon={faHome} />
        </Button>
        <Button
          colorScheme="teal"
          color={"#ffffff"}
          size={{ base: "sm", lg: "md" }}
          onClick={shift}
          leftIcon={<FontAwesomeIcon icon={faUsers} />}
        >
          <Text fontSize={{ base: 10, lg: 15 }}> Membership </Text>
        </Button>
        <Button
          colorScheme="teal"
          color={"#ffffff"}
          size={{ base: "sm", lg: "md" }}
          leftIcon={<FontAwesomeIcon icon={faMedal} />}
        >
          <Text fontSize={{ base: 10, lg: 15 }} onClick={shifttournament}>
            {" "}
            Tournaments{" "}
          </Text>
        </Button>

        <Button
          colorScheme="teal"
          color={"#ffffff"}
          size={{ base: "sm", lg: "md" }}
          leftIcon={<FontAwesomeIcon icon={faCircleCheck} />}
        >
          <Text fontSize={{ base: 10, lg: 15 }} onClick={shiftReservation}>
            {" "}
            Reservation{" "}
          </Text>
        </Button>

        <Button
          ref={btnRef}
          size={{ base: "sm", lg: "md" }}
          color={"#ffffff"}
          colorScheme="teal"
          onClick={onOpen}
          leftIcon={<FontAwesomeIcon icon={faBars} />}
        >
          {" "}
          <Text fontSize={{ base: 10, lg: 15 }}> Menu </Text>
        </Button>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <VStack>
                <Button
                  leftIcon={<FontAwesomeIcon icon={faPeopleGroup} />}
                  colorScheme="teal"
                  onClick={shifttoCommunity}
                >
                  Community Forum
                </Button>
                <Button
                  leftIcon={<FontAwesomeIcon icon={faChalkboard} />}
                  colorScheme="teal"
                  onClick={shiftCoaching}
                >
                  Coaching Resource
                </Button>
                <Button
                  leftIcon={<FontAwesomeIcon icon={faPhotoFilm} />}
                  colorScheme="teal"
                  onClick={shiftGallery}
                >
                  Gallery
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </div>
  );
}
