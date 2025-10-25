import { useParams } from "react-router-dom";

const MyBestFriend = () => {
  const params = useParams(); // ✅ call useParams to get the params object

  return (
    <>
      <h1>My Best Friend is {params.name}</h1>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </>
  );
};

export default MyBestFriend
