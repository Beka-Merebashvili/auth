import { redirect } from "next/navigation";
import { getSession } from "../actions";

const ProfilePage = async () => {
  const session = await getSession();

  if(!session.isLoggedIn){
    redirect("/")
  }

  return (
    <div className="profile">
      <h1>Welcome to the ProfilePage</h1>
      <p>
        Welcome, <b>{session.username}</b>
      </p>
      <span>You are a <b>{session.isPro ? "Premium" : "Free"}</b> user</span>
    </div>
  );
};

export default ProfilePage;