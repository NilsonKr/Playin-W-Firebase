import { useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
//UI
import { StyledDropZone, StyledProgressBar } from "./Upload.style";
import { Modal, Text, Button } from "@nextui-org/react";

import { uploadVideo } from "../../storage/storage/videos";

type Props = {
  open: boolean;
  handleClose: () => void;
};

export const UploadModal = ({ open, handleClose }: Props) => {
  const { currentUser } = useAuth();
  const [uploadProgress, setProgress] = useState<number>(0);
  const [isUploading, setUploading] = useState<boolean>(false);
  const [isError, setError] = useState<string>("");

  const handleDrop = async (ev: React.DragEvent) => {
    ev.preventDefault();
    setError("");
    setUploading(true);
    //UPLOAD VIDEO

    uploadVideo(
      ev.dataTransfer.files[0],
      currentUser!.uid,
      setProgress,
      (url: string) => {
        console.log(url);
        setUploading(false);
      },
      setError
    );
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
          onDropCapture={handleDrop}
        >
          <Text color="secondary" h3>
            Drop some video
          </Text>
        </StyledDropZone>
        {isUploading && <StyledProgressBar percentage={uploadProgress} />}
        {isError && (
          <Text style={{ textAlign: "center" }} color="red">
            !!!Sorry something went wrong please try again :(
            <br />
            <br />
            {isError}
          </Text>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button color="primary" ghost>
          Upload
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
