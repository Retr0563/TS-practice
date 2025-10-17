type userInfos = {
  name: string;
  email: string;
  age: number;
  location: string[];
};

const UserInfo = ({ name, email, age, location }: userInfos) => {
  return (
    <div>
      <ol>
        <li>{name}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{JSON.stringify(location)}</li>
      </ol>
    </div>
  );
};
export default UserInfo;
