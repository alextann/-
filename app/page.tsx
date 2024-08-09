import React from "react";
import Basic from "@/components/Basic";
import Hook from "../components/Hook";

const App:React.FC = () =>{
  return(
    <>
      <h1>Wellcome to IT.BRU</h1>
      <p>Hollo Typcript</p>

      <Basic initVal="1" />

      <Hook initHook= "5"/>
    </>
  );
};
export default App;