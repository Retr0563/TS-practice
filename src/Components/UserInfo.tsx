type info = {
  userName: string;
  email: string;
  age: number;
  phone: number;
};

type infos = info & {
  DOB: Date | string;
};

const UserInfo = ({ userName, email, age, phone, DOB }: infos) => {
  const dobString = typeof DOB === "string" ? DOB : DOB.toLocaleDateString();
  return (
    <div>
      <h1>User Profile</h1>
      <ul>
        <li>{userName}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{phone}</li>
        <li>{dobString}</li>
      </ul>
    </div>
  );
};
export default UserInfo;
