import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../index";

type UpdateProgress = (percentage: number) => void;
type handleSuccess = (urlDownload: string) => void;
type handleError = (errorMsg: string) => void;

export const uploadVideo = async (
  file: File,
  userId: string,
  updateCb: UpdateProgress,
  successCb: handleSuccess,
  errorCb: handleError
) => {
  const storageRef = ref(storage, `videos/${userId}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  //Update upload state progress
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const percentage =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

      updateCb(percentage);
    },
    (error) => errorCb(error.message),
    async () => {
      const url = await getDownloadURL(storageRef);
      successCb(url);
    }
  );
};
