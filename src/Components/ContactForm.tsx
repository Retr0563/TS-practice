import { useState, type ChangeEvent, type FormEvent } from "react";

interface Contact {
  name: string;
  email: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<Contact>({
    name: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form Submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
            placeholder="Name"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            placeholder="Email"
          />
        </label>
      </div>
      <button type="submit">submit</button>
    </form>
  );
};
export default ContactForm;
