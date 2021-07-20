import PublicIcon from "@material-ui/icons/Public";
import moment from "moment";
import Image from "next/image";
import {
  ChatAltIcon,
  ShareIcon,
  ThumbUpIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

function Post({ name, email, message, image, timestamp, postImage }) {
  const time = moment(timestamp?.toDate().getTime()).format("LLL");

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

          <DotsHorizontalIcon
            className=" p-2 h-10 w-10 text-gray-500 
                rounded-full cursor-pointer hover:bg-gray-200"
          />
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
        <div className="flex border-t border-gray-200 items-center space-x-1 hover:bg-gray-100 cursor-pointer p-1 sm:p-2 flex-grow rounded-bl-2xl justify-center">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
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
