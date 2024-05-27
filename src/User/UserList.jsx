import { useEffect, useState } from "react";
import axios from "axios";
import UserItem from "./UserItem";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";
import Loader from "../util/Loader";

function UserList() {
  const [user, setUser] = useState([]);
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const url = "https://api.github.com/users";

    try {
      const res = await axios.get(url);
      setUser(res.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ShouldRender when={loading}>
        <Loader />
      </ShouldRender>
      <ShouldRender when={hasError}>
        <Error msg="Failed to load data, Please try again" />
      </ShouldRender>
      <h1 className="flex text-2xl justify-center mt-6 absolute top-20 left-0 right-0">
        Users
      </h1>
      <div className="grid container flex justify-center mt-24">
        {user.map((user) => (
          <UserItem user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
