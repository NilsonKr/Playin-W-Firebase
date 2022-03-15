import React, { useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import { useForm } from "../../Hooks/useForm";
//UI
import { Si1Password } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import { Modal, Input, Text, Row, Button } from "@nextui-org/react";

type Props = {
  open: boolean;
  handleClose: () => void;
  redirect: () => void;
};

export const SignInModal: React.FC<Props> = ({
  open,
  redirect,
  handleClose,
}) => {
  const { signIn } = useAuth();
  const { form, handleChange } = useForm({ email: "", password: "" });
  const [isRedirect, setRedirect] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    const result = await signIn(form.email, form.password);
    if (result.success) {
      handleClose();
    } else {
      setError(result.message);
    }
  };

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
          aria-label="email"
          onChange={(e) => handleChange(e.target.value, "email")}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Email"
          contentLeft={<MdAlternateEmail />}
        />
        <Input
          aria-label="password"
          onChange={(e) => handleChange(e.target.value, "password")}
          type="password"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Password"
          contentLeft={<Si1Password />}
        />
        <Row justify="flex-end">
          <Text size={14}>Forgot password?</Text>
        </Row>
        {error && (
          <Row justify="center">
            <Text size={15} color="#ec6464">
              {error}
            </Text>
          </Row>
        )}
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
        <Button auto onClick={submit}>
          Sign in
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
