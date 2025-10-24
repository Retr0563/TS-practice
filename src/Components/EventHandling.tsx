import type React from "react";

const EventHandling = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button Clicked", e.currentTarget);
  };

  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Entered", e.currentTarget);
  };

  return (
    <div onMouseEnter={handleEnter}>
      <h2>Events</h2>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
};
export default EventHandling;
