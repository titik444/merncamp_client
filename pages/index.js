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

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
