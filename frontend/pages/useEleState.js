import { useState } from "react";

export default initialValue => {
  const [element1, setEle1] = useState(initialValue);

  return {
    element1,
    addEle: tekst1 => {
      setEle1([...element1, tekst1]);
    },
    delEle: nyIndex => {
      const nyttEle1 = element1.filter((_, index) => index !== nyIndex);
      setEle1(nyttEle1);
    }
  };
};
