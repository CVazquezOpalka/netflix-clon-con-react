import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BackgroundImageLandingPage, HeaderLanding } from "../components/index";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

function Singup() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //cambio de estado del componente input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //creacion del usuario
  const handleSignIn = async () => {
    try {
      const { email, password } = formData;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        navigate("/");
      }
    });
    return () => unsuscribe();
  }, []);

  return (
    <Container>
      <BackgroundImageLandingPage />

      <div className="content" show="false">
        <HeaderLanding login />
        <div className="body">
          <div className="text">
            <h1>Unlimiteds movies, tv Shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? enter your email, and create or restart
              memebership
            </h6>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="email Addres"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {show && (
              <input
                type="password"
                placeholder="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            )}

            {!show && (
              <button onClick={() => setShow(true)}>Get started</button>
            )}
          </div>
          <button onClick={handleSignIn}>Sign Up</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      .text {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 10rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "1fr 1fr"};
        width: 60%;
        input {
          color: #111;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: #fff;
          font-size: 1.05rem;
          font-weight: bolder;
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
      }
    }
  }
`;

export default Singup;
