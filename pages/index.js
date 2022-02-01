import { useContext } from "react";
import { UserContext } from "../context";
import ParallaxBG from "../components/cards/ParallaxBG";
import axios from "axios";
import PostPublic from "../components/cards/PostPublic";
import Head from "next/head";
import Link from "next/link";

const Home = ({ posts }) => {
  const [state, setState] = useContext(UserContext);

  const head = () => (
    <Head>
      <title>MERNCAMP - A social network by devs for devs</title>
      <meta
        name="description"
        content="A social network by developers for other web developers"
      />
      <meta
        property="og:description"
        content="A social network by developers for other web developers"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MERNCAMP" />
      <meta property="og:url" content="https://merncamp-client.vercel.app/" />
      <meta
        property="og:image:secure_url"
        content="https://merncamp-client.vercel.app/images/default.jpg"
      />
    </Head>
  );

  return (
    <>
      {head()}
      <ParallaxBG url="/images/default.jpg" />

      <div className="container">
        <div className="row pt-5">
          {posts.map((post) => (
            <div className="col-md-4">
              <Link href={`/post/view/${post._id}`}>
                <a>
                  <PostPublic key={post._id} post={post} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(
    "https://75a1-2001-448a-20a0-5fce-147-184b-dc5e-2655.ap.ngrok.io/api/posts"
  );
  // console.log(data);
  return {
    props: {
      posts: data,
    },
  };
}

export default Home;
