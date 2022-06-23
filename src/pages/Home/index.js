import React from "react";
import * as C from "./styles";
import Button from "../../components/Button"
import {useNavigate} from "react-router-dom";
import useAuth from '../../Hook/useAuth';

function Home() {
  const { signout } = useAuth();
  const  navigate = useNavigate();


  return (
    <C.Container>
      <C.Title>home</C.Title>
      <Button Text="sair" onClick={() =>  [signout(), navigate("/")]}>Sair</Button>
    </C.Container>
  );
};

export default Home;