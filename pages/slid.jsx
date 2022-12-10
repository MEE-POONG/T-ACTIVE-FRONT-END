import React, { useRef } from "react";
import useAxios from "axios-hooks";
import Head from "next/head";

export default function SlidPages() {
  const [{ data: homeeData, loading, error }, getHomee] = useAxios({ url: "/api/homee", });
 function createMarkup() {
  return {__html: '<p>First &middot; Second</p><p>First &middot; Second</p><a>First &middot; Second</a><p>First &middot; Second</p>'};
}



  return (
    <>
  <div className=" text-white">
  <div dangerouslySetInnerHTML={{__html: '<p>First &middot; Second</p><p>First &middot; Second</p><a>First &middot; Second</a><p>First &middot; Second</p>'}} />
    </div>
    </>
  );
}
