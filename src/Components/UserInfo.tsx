import { useState } from "react";

type profile = {
  id: string;
  age: number;
  email: string;
};

const UserInfo = () => {
  const [user, setUser] = useState<profile>({
    id: "",
    age: 0,
    email: "",
  });

  const handleChange = (id: string) => {
    setUser((prevUser) => ({ ...prevUser, id }));
  };
  const updateAge = (age: string) => {
    setUser((prevUser) => ({ ...prevUser, age: +age }));
  };
  const updateEmail = (email: string) => {
    setUser((prevUser) => ({ ...prevUser, email }));
  };

  return (
    <div>
      <h1>User Profile</h1>
      <input
        type="text"
        placeholder="Id"
        value={user.id}
        onChange={(e) => handleChange(e.target.value)}
      />

      <input
        type="number"
        placeholder="age"
        value={user.age > 0 ? user.age : ""}
        onChange={(e) => updateAge(e.target.value)}
      />

      <input
        type="email"
        value={user.email}
        placeholder="email"
        onChange={(e) => updateEmail(e.target.value)}
      />

      <h3>Profile Summary</h3>
      <p>Name: {user.id} </p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email} </p>
    </div>
  );
};
export default UserInfo;
