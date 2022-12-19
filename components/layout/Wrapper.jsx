import React from "react";

function Wrapper({ children, styles }) {
  return (
    <div className={`2xl:max-w-[90.5rem] px-6 mx-auto ${styles}`}>
      {children}
    </div>
  );
}

export default Wrapper;
