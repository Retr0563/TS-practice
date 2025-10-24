import { createContext, useState, type FC, type ReactNode } from "react";

type MyProps = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const MyContext = createContext<MyProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

type MyProviderProps = {
  children: ReactNode;
};

const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;
