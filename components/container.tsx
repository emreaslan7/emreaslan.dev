import React from "react";

const Container: React.FC<{ maxWidth: string; children: React.ReactNode }> = ({
  children,
  maxWidth,
}) => {
  return (
    <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8`}>{children}</div>
  );
};

export default Container;
