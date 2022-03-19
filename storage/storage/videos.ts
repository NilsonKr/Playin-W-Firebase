import { FirebaseError } from "firebase/app";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
  getMetadata,
} from "firebase/storage";
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
  const storageRef = ref(storage, `videos/${userId}/${file.name}`);
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

export const getVideos = async (uid: string): Promise<string[]> => {
  const storageRef = ref(storage, `videos/${uid}`);
  try {
    const collection = await listAll(storageRef);

    const videosRefs = collection.items.map((refItem) =>
      getDownloadURL(refItem).then((data) => data)
    );

    const videosUrl = await Promise.all(videosRefs);

    return videosUrl;
  } catch (error) {
    const { message } = <FirebaseError>error;
    console.log(message);
    return [];
  }
};
