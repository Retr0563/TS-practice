import Counter from "./Components/Counter";
import UserInfo from "./Components/UserInfo";

const App = () => {
  return (
    <div>
      <Counter />
      <UserInfo
        userName="Retr0 Boakye Yiadom"
        age={29}
        email="nanayaw1@yahoo.com"
        phone={233208823584}
        DOB="02-05-1996"
      />
    </div>
  );
};
export default App;
