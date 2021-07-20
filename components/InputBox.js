import { useSession } from "next-auth/client";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { VideoCameraIcon, CameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import firebase from "firebase";
import { db, storage } from "../firebase";

function InputBox() {
  const [session] = useSession();
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState();

  //Function to send post to firestore-Database
  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        //save image to Firebase Storage
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          uploadTask.on(
            "state_change",
            null, //this is called loading or process
            (error) => console.error(error),
            () => {
              //When the upload complete THEN copy from Firebase Storage
              //& save it to Firestore Database inside 'posts'
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = "";
  };

  //Function to select Image and display preview
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  //Function to clear image
  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white rounded-2xl p-2 text-gray-500 font-medium shadow-md mt-6 ">
      <div className="flex items-center space-x-4 p-4">
        <Image
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
          className="cursor-pointer rounded-full hover:opacity-80 "
        />
        <form className="flex flex-1">
          <input
            className="flex-grow h-12 px-5 bg-gray-100 rounded-full outline-none placeholder-gray-400 "
            type="text"
            ref={inputRef}
            placeholder={`What's on Your Mind, ${session.user.name}?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Send
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter brightness-110 transition
            duration-150 transform hover:scale-105 cursor-pointer "
          >
            <img src={imageToPost} alt="" className="h-10 object-contain" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t ">
        <div className="flex items-center space-x-1 hover:bg-gray-100 cursor-pointer p-1 sm:p-2 flex-grow rounded-xl justify-center ">
          <VideoCameraIcon className="h-7 text-red-500 " />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          onClick={() => filepickerRef.current.click()}
          className="flex items-center space-x-1 hover:bg-gray-100 cursor-pointer p-1 sm:p-2 flex-grow rounded-xl justify-center "
        >
          <CameraIcon className="h-7 text-green-400 " />
          <p className="text-xs sm:text-sm xl:text-base">Upload/Video</p>
          <input
            ref={filepickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 cursor-pointer p-1 sm:p-2 flex-grow rounded-xl justify-center ">
          <EmojiHappyIcon className="h-7 text-yellow-300 " />
          <p className="text-xs sm:text-sm xl:text-base">Feeling Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
