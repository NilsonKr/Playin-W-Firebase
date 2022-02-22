import React, { useState } from "react";
//UI
import { Si1Password } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import {
  Modal,
  Input,
  Text,
  Row,
  Checkbox,
  Button,
  Link,
} from "@nextui-org/react";

type Props = {
  open: boolean;
  handleClose: () => void;
  signIn: () => void;
  redirect: () => void;
};

export const SignInModal: React.FC<Props> = ({
  open,
  redirect,
  handleClose,
  signIn,
}) => {
  const [isRedirect, setRedirect] = useState<boolean>(false);

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={open}
      onClose={() => {
        if (!isRedirect) handleClose();
      }}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Welcome Again to{" "}
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
        <Row justify="space-between">
          <Checkbox>
            <Text size={14}>Remember me</Text>
          </Checkbox>
          <Text size={14}>Forgot password?</Text>
        </Row>
        <Row justify="center">
          Are you New ?
          <Text
            style={{ marginLeft: 5, cursor: "pointer" }}
            color="secondary"
            onClick={() => {
              setRedirect(true);
              redirect();
            }}
          >
            Sign Up!
          </Text>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={handleClose}>
          Close
        </Button>
        <Button auto onClick={signIn}>
          Sign in
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
