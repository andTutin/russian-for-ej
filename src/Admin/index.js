import { useContext } from "react";
import { Auth } from "../Auth";
import { Categoryform } from "./Categoryform";
import { Redirect } from "react-router-dom";

export const Admin = () => {
  const { isLoggedIn } = useContext(Auth);

  if (!isLoggedIn) return <Redirect to="/login" />;

  return <Categoryform />;
};
