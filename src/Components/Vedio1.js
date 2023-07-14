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

export default function Vedio1() {
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
            <center>Intermediate Level</center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={2}>
            <Center>
              <iframe
                width="350"
                height="400"
                src="https://www.youtube.com/embed/ilS_YOUpf9s"
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
              <a href="https://www.youtube.com/@stephenhendryscuetips">
                Go To Channel
              </a>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
