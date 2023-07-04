import React from "react";
import styled from "styled-components";
import LogoNetflix from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export const HeaderLanding = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="logo">
        <img src={LogoNetflix} alt="logo" />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/singup")}>
        {props.login ? "Log In" : "Sign In"}
      </button>
    </Container>
  );
};

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
  padding: 0 4rem;
  .logo {
    img {
      height: 5rem;
    }
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: #fff;
    border-radius: 0.2rem;
    font-size: 1.05rem;
    font-weight: bolder;
    transition: 0.3s ease;
    &:hover{
        transform: scale(1.1)
    }
  }
`;
