import { FormEventHandler, useEffect, useState } from "react";
import { VideoCard } from "../components/VideoCard";
import { getSession, useWen } from "wen-connect";
import { LoadDoats } from "../components/LoadDots";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/router";

const Join = () => {
  const { wallet } = useWen();
  const router = useRouter();
  const [discord, setDiscord] = useState("");
  console.log(supabase.auth.session());

  const handleFieldChange: FormEventHandler<HTMLInputElement> = (e) => {
    setDiscord(e.currentTarget.value);
  };

  const handieDiscord = async (e: any) => {
    e.preventDefault();
    // non blocking call to ensure functiojns goes through quickly and does not inder UX

    fetch("/api/discord", {
      body: JSON.stringify({ discord, address: wallet.address }),
      method: "POST",
    });
    // go to discord
    // window.open("https://discord.gg/bfhNapbvbA");
    // router.push("/");
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Join the W3FS community!</span>
        </h2>

        <div className="h-56 sm:h-72  flex justify-center mt-8   w-full">
          <VideoCard className="w-1/2 h-full object-cover rounded-3xl" />
        </div>
        <form onSubmit={handieDiscord}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mt-4"
            >
              discord id
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="text"
                id="text"
                onChange={handleFieldChange}
                required
                className="inline-flex w-80 h-12 flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm "
                placeholder="hello#1234"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="inline-flex w-80 h-12 flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Join Discord Community!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Join;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = getSession(context);

  const { data } = await supabase.functions.invoke("verify", {
    body: JSON.stringify({
      walletAddress: session.wallet.address,
      contractAddress: process.env.CONTRACT_ADDRESS,
    }),
  });

  if (!data.success) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
