import React from "react";
//UI
import { StyledDropZone } from "./Upload.style";
import { Modal, Text, Button } from "@nextui-org/react";

type Props = {
  open: boolean;
  handleClose: () => void;
};

export const UploadModal = ({ open, handleClose }: Props) => {
  const handleDrop = (ev: React.DragEvent) => {
    ev.preventDefault();
    ev.stopPropagation();
    console.log(ev.dataTransfer.files, "Videos");
  };

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={open}
      onClose={handleClose}
    >
      <Modal.Header>
        <Text h2>Upload Video</Text>
      </Modal.Header>
      <Modal.Body style={{ padding: 50 }}>
        <StyledDropZone
          onDragOver={(ev) => ev.preventDefault()}
          onDrop={handleDrop}
        >
          <Text color="secondary" h3>
            Drop some video
          </Text>
        </StyledDropZone>
      </Modal.Body>
      <Modal.Footer>
        <Button color="primary" ghost>
          Upload
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
