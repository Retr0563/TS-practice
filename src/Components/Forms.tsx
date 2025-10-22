import "../Forms.css";
import { useRef, useState, type FormEvent } from "react";

interface submitData {
  name: string;
  email: string;
  password: string;
  phone: number;
}

const Forms = () => {
  const [data, setData] = useState<submitData>({
    name: "",
    email: "",
    password: "",
    phone: 0,
  });
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;
    const phoneValue = phone.current!.value;

    setData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
      phone: Number(phoneValue) || 0,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Name" ref={name} />
        <input type="email" placeholder="Enter Email Address" ref={email} />
        <input
          type="password"
          placeholder="Enter New Password"
          ref={password}
        />
        <input type="number" placeholder="Enter Phone Number" ref={phone} />
        <button type="submit">Submit</button>

        <section>
          <h1>Name: {data.name} </h1>
          <h1>Email: {data.email} </h1>
          <h1>Password: {data.password} </h1>
          <h1>Phone: {data.phone} </h1>
        </section>
      </form>
    </>
  );
};
export default Forms;
