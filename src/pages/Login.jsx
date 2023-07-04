import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../firebase/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { BackgroundImageLandingPage, HeaderLanding } from "../components/index";

function Login() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //cambio de estado del componente input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //pasamos el usuario
  const handleLogin = async () => {
    try {
      const { email, password } = formData;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.message);
      setShowAlert(true);
      alert("Usuario no encontrado o contraseña incorrecta.");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <BackgroundImageLandingPage />
      <div className="content">
        <HeaderLanding />
        <div className="form-container">
          <div className="form">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container">
              <input
                type="email"
                placeholder="email Addres"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button onClick={handleLogin}>LogIn</button>
            </div>
          </div>
        </div>
      </div>
      
    </Container>
  );
}
export default Login;
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
    .form-container {
      height: 85vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .form {
        background-color: rgba(0,0,0,0.5);
        width: 30vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        gap: 2rem;
        color: #fff;
        border-radius: 1rem;
        backdrop-filter: blur(3px);
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          input {
          color: #111;
          border: none;
          padding: 0.5rem 1rem;
          font-size: 0.8rem;
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
    }
  }
`;
