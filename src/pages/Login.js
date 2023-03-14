import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Content, Title } from "../styled/contents";
import "../styled/contests.css";

const Login = () => {
  const params = useParams();
  const page = params.page;

  useEffect(() => {
    console.log(">>>", page);
  }, [page]);

  return (
    <div id="contents">
      <Title>Login</Title>
      <Content> Login</Content>
    </div>
  );
};
export default Login;
