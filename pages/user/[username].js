import { useContext, useState, useEffect } from "react";
import { Avatar, Card } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import axios from "axios";
import { toast } from "react-toastify";
import { RollbackOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Meta } = Card; // <Card.Meta>

const Username = () => {
  const [state, setState] = useContext(UserContext);
  // state
  const [user, setUser] = useState({});

  const router = useRouter();

  useEffect(() => {
    if (router.query.username) fetchUser();
  }, [router.query.username]);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(`/user/${router.query.username}`);
      // console.log("router.query.username => ", data);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  const imageSource = (user) => {
    if (user.image) {
      return user.image.url;
    } else {
      return "/images/logo.png";
    }
  };

  return (
    <div className="row  col-lg-4 offset-lg-4 col-sm-8 offset-sm-2">
      {/* <pre>{JSON.stringify(user, null, 4)}</pre> */}

      <div className="pt-5 pb-5">
        <Card hoverable cover={<img src={imageSource(user)} alt={user.name} />}>
          <Meta title={user.name} description={user.about} />

          <p className="pt-2 text-muted">
            Joined {moment(user.createdAt).fromNow()}
          </p>
          <div className="d-flex justify-content-between">
            <span className="btn btn-sm">
              {user.followers && user.followers.length} Followers
            </span>

            <span className="btn btn-sm">
              {user.following && user.following.length} Following
            </span>
          </div>
        </Card>

        <Link href="/user/dashboard">
          <a className="d-flex justify-content-center pt-5 h6">
            <RollbackOutlined /> Back
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Username;
