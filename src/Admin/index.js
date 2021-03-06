import { CategoryForm } from "./CategoryForm";
import { WordForm } from "./WordForm";
import { RegisterForm } from "./RegisterForm";
import { Login } from "../Login";
import { checkAuth } from "../Store/actions";
import { useDispatch, useSelector } from "react-redux";
import "./Admin.css";
import { useLayoutEffect } from "react";

export const Admin = () => {
  const dispatch = useDispatch();
  const { isAuthorized, isChecking, alertMessage } = useSelector(
    (state) => state
  );

  useLayoutEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isChecking) return null;
  if (isAuthorized === false) return <Login />;

  return (
    <section className="admin">
      <CategoryForm />
      <WordForm />
      <RegisterForm />
      {alertMessage.code ? (
        <div style={{ color: "red" }}>{alertMessage.message}</div>
      ) : (
        <div style={{ color: "green" }}>{alertMessage.message}</div>
      )}
    </section>
  );
};
