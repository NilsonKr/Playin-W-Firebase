import React from "react";
//UI
import { FaUserCircle } from "react-icons/fa";
import { Si1Password } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import { Modal, Input, Text, Button } from "@nextui-org/react";

type Props = { open: boolean; handleClose: () => void; signIn: () => void };

export const SignUpModal: React.FC<Props> = ({ open, handleClose, signIn }) => {
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={open}
      onClose={handleClose}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Welcome to{" "}
          <Text b size={18}>
            NextVideo
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Your Name"
          contentLeft={<FaUserCircle />}
        />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Email"
          contentLeft={<MdAlternateEmail />}
        />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Password"
          contentLeft={<Si1Password />}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={handleClose}>
          Close
        </Button>
        <Button auto onClick={signIn}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
