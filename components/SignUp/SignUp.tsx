import React, { useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import { useForm } from "../../Hooks/useForm";
//UI
import { FaUserCircle, FaCheckCircle } from "react-icons/fa";
import { Si1Password } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import { Modal, Input, Text, Button, Container } from "@nextui-org/react";

type Props = { open: boolean; handleClose: () => void };

export const SignUpModal: React.FC<Props> = ({ open, handleClose }) => {
  const [step, setStep] = useState<number>(0);
  const { createAccount } = useAuth();
  const { form, handleChange } = useForm({
    email: "",
    password: "",
    username: "",
  });

  const submit = async () => {
    const result = await createAccount(
      form.email,
      form.password,
      form.username
    );

    if (result.success) {
      setStep(1);
    } else {
      console.log(result);
    }
  };

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
        {step === 0 && (
          <>
            <Input
              onChange={(e) => handleChange(e.target.value, "username")}
              label="Username"
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Your Name"
              contentLeft={<FaUserCircle />}
            />
            <Input
              onChange={(e) => handleChange(e.target.value, "email")}
              label="E-mail"
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Email"
              contentLeft={<MdAlternateEmail />}
            />
            <Input
              onChange={(e) => handleChange(e.target.value, "password")}
              label="Password"
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              type="password"
              placeholder="Password"
              contentLeft={<Si1Password />}
            />
          </>
        )}
        {step === 1 && (
          <Container
            display="flex"
            justify="center"
            alignItems="center"
            style={{ textAlign: "center", padding: "10px 20px" }}
          >
            <Text>
              We send you an Email verifaction, please go and complete the
              process
            </Text>
            <FaCheckCircle color="#61d961" size="25px" />
          </Container>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button auto flat color="error" onClick={handleClose}>
          Close
        </Button>
        <Button auto onClick={() => (step === 0 ? submit() : handleClose())}>
          {step === 0 ? "Create" : "Continue"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
