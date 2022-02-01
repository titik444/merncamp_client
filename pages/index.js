import { useContext } from "react";
import { UserContext } from "../context";
import ParallaxBG from "../components/cards/ParallaxBG";
import axios from "axios";
import PostPublic from "../components/cards/PostPublic";
import Head from "next/head";
import Link from "next/link";

const Home = ({ posts }) => {
  return <>test</>;
};

export async function getServerSideProps() {
  // const { data } = await axios.get("/posts");

  fetch(`/posts`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  // console.log(data);
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
