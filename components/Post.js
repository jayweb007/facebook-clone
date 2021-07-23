import PublicIcon from "@material-ui/icons/Public";
import moment from "moment";
import Image from "next/image";
import {
  ChatAltIcon,
  ShareIcon,
  ThumbUpIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Tooltip from "@material-ui/core/Tooltip";
import { db } from "../firebase";
import { useSession } from "next-auth/client";

function Post({
  id,
  likeicon,
  name,
  email,
  message,
  image,
  timestamp,
  postImage,
}) {
  const time = moment(timestamp?.toDate().getTime()).format("LLL");
  const ref = db.collection("posts");
  const [session] = useSession();

  // LIKE POST
  const likePost = () => {
    if (!session) return null;

    ref
      .doc(id)
      .update({ like: !likeicon })
      .catch((err) => {
        console.error(err);
      });
  };

  // DELETE POST
  const deletePost = () => {
    if (!session) return null;

    ref
      .doc(id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              className="rounded-full"
              width={40}
              height={40}
              src={image}
              alt=""
            />
            <div>
              <p className="font-medium">{name}</p>

              {time ? (
                <p className="flex text-xs text-gray-400">
                  {time}
                  <span className="flex pl-1">
                    -
                    <PublicIcon
                      className="ml-1 text-gray-500 "
                      style={{ fontSize: 15 }}
                    />
                  </span>
                </p>
              ) : (
                <p className="text-xs text-gray-400">Loading</p>
              )}

              {/* space */}
            </div>
          </div>
          <Tooltip onClick={deletePost} title="Delete Post" interactive>
            {/* <DotsHorizontalIcon
              className=" p-2 h-10 w-10 text-gray-500 
                rounded-full cursor-pointer hover:bg-gray-200"
            /> */}
            <MoreHorizIcon
              style={{ fontSize: 30 }}
              className=" text-gray-500 
                rounded-full cursor-pointer hover:bg-gray-200"
            />
          </Tooltip>
        </div>

        <p className="pt-4">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          {/* <Image src={postImage} objectFit="cover" layout="fill" /> */}
          <img
            className=" object-contain w-full h-full "
            src={postImage}
            alt=""
          />
        </div>
      )}

      <div
        className="flex pt-2 items-center justify-between shadow-md 
      rounded-b-2xl bg-white text-gray-400 "
      >
        <div
          onClick={likePost}
          className="flex border-t border-gray-200 items-center space-x-1 hover:bg-gray-100 cursor-pointer p-1 sm:p-2 flex-grow rounded-bl-2xl justify-center"
        >
          {likeicon ? (
            <ThumbUpAltIcon
              style={{ fontSize: 16 }}
              className="text-blue-500 text-xs sm:text-base"
            />
          ) : (
            // <ThumbUpAltIcon className="text-blue-500 h-4 text-xs sm:text-base" />
            <ThumbUpIcon className="h-4" />
          )}
          <p
            className={
              likeicon
                ? `text-blue-500 text-xs sm:text-base font-semibold`
                : ` text-xs sm:text-base`
            }
          >
            Like
          </p>
        </div>
        <div className="flex border-t border-gray-200 items-center space-x-1 hover:bg-gray-100 cursor-pointer p-1 sm:p-2 flex-grow justify-center">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="flex border-t border-gray-200 items-center space-x-1 hover:bg-gray-100 cursor-pointer p-1 sm:p-2 flex-grow rounded-br-2xl justify-center">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
