// import Counter from "./components/Counter";
import UserInfo from "./components/UserInfo";

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      <UserInfo
        id="Retr0"
        age={29}
        email="nanayaw1@yahoo.com"
        phone={233208823584}
        DOB="02-05-1996"
      />
    </div>
  );
};
export default App;
