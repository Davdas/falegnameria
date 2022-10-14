import { useRouter } from "next/router";
import React from "react";

interface IScrollLinkProps {
  hash: string;
  text: string;
}

const ScrollLink = ({ hash, text }: IScrollLinkProps) => {
  const router = useRouter();

  return (
    <>
      {router.asPath === "/" ? (
        <button
          onClick={() => router.push(`#${hash}`)}
          className="ml-10 text-sm uppercase hover:border-b"
        >
          {text}
        </button>
      ) : (
        <button
          className="ml-10 text-sm uppercase hover:border-b"
          onClick={() => router.push(`/#${hash}`)}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default ScrollLink;
