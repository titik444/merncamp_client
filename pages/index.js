import { useContext } from "react";
import { UserContext } from "../context";

const Home = () => {
  const [state, setState] = useContext(UserContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="display-1 text-center py-5">Home page</h1>
          {/* {JSON.stringify(state)} */}
          {/* <img src="/images/default.jpg" alt="image" /> */}
          <div
            style={{
              backgroundImage: "url(/images/default.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              height: "500px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
