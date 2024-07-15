import {
  Modal,
  ModalContent,
  ModalOverlay
} from "@chakra-ui/react";
import {ReactNode} from "react";

interface AuthLayoutProps {
  children: ReactNode
}

function AuthLayout(props: AuthLayoutProps) {
  return (
    <Modal isOpen={true} onClose={() => {}} isCentered>
      <ModalOverlay />
      <ModalContent p={5}>
        {
          props.children
        }
      </ModalContent>
    </Modal>
  )
}

export default AuthLayout