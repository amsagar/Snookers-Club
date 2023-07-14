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
import {
  Center,
} from "@chakra-ui/react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Vedio2() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen} leftIcon={<FontAwesomeIcon icon={faEye} />}>
        View
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>Pro Level</Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <iframe
                width="auto"
                style={{ minWidth: "300" }}
                height="400"
                src="https://www.youtube.com/embed/_RNGeouJ0hU?start=1"
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
              <a href="https://www.youtube.com/@arenasnooker6099">
                Go To Channel
              </a>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
