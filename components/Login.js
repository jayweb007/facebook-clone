import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="grid place-items-center space-y-14 p-6 mx-auto mt-20 mb-10 ">
      <Image
        src="https://links.papareact.com/5me"
        width={300}
        height={300}
        object-fit="contain"
      />
      <div
        onClick={signIn}
        className="flex p-5 text-white rounded-full justify-center 
      bg-blue-500 hover:bg-blue-600 cursor-pointer "
      >
        Login with Facebook
      </div>
    </div>
  );
}

export default Login;
