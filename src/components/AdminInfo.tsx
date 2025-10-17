type adminInfos = {
  name: string;
  email: string;
  location: string[];
  admin: string;
};

const AdminInfo = ({ name, email, location, admin }: adminInfos) => {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <li>{JSON.stringify(location)}</li>
        <li>{admin}</li>
      </ul>
    </div>
  );
};
export default AdminInfo;
