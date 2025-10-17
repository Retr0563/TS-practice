import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";

const App = () => {
  return (
    <div>
      <h1>User Info</h1>
      <UserInfo
        name="John"
        email="j23@gamil.com"
        age={24}
        location={["Africa", "USA"]}
      />
      <h1>Admin Info</h1>
      <AdminInfo
        name="Michael"
        email="retr0@gmail.com "
        location={["Earth", " Ghana"]}
        admin="yes"
      />
    </div>
  );
};
export default App;
