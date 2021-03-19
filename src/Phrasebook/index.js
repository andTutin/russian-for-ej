import { useSpeaker } from "../Speaker";
import { Categories } from "./Categories";
import { Words } from "./Words";
import "./Phrasebook.css";
import { getCategoriesRequest } from "../Store/actions";
import { store } from "../Store";
store.dispatch(getCategoriesRequest());

export const Phrasebook = () => {
  const sayit = useSpeaker();

  return (
    <section className="phrasebook">
      <Categories />
      <Words sayit={sayit} />
    </section>
  );
};
