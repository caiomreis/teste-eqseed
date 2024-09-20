import React from "react";
import { ChildWrapper, ScaffoldComponent } from "./style";
import TesteEqSeedHeader from "../header";

const Scaffold: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <TesteEqSeedHeader />
      <ScaffoldComponent>
        <ChildWrapper>{children}</ChildWrapper>
      </ScaffoldComponent>
    </>
  );
};

export default Scaffold;
