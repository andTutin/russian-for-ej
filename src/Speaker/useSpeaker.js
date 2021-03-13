import { Speaker } from "../Speaker";
import { useContext } from "react";

export const useSpeaker = () => {
  const { sayit } = useContext(Speaker);

  return (e) => {
    e.preventDefault();
    if (e.target.dataset.say) {
      sayit(e.target.dataset.say);
    } else {
      return;
    }
  };
};
