import React, { useState } from 'react';
import Input from "../../components/Input";
import Button from "../../components/Button"
import * as C from "./styles";
import { Link, useNavigate} from "react-router-dom";
import useAuth from '../../Hook/useAuth';


const Signup = () => {

  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const { signup } = useAuth();
  const  navigate = useNavigate();

  const handleSignup = () => {
    if(!email | !emailConf | !senha){
      setError("Preencha todos os campos");
      return;
    }else if(email !== emailConf) {
      setError("Os e-mails não são iguais");
    }


    const res = signup(email, senha);

    if(res){
      setError(res);
      return;
    }
    alert("Usuário cadastrado com sucesso!")
    navigate("/");
  };



  return (
  <C.Container>
    <C.Label>Registra-se</C.Label>
    <C.Content>
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type="email"
            placeholder="Confirme seu E-mail"
            value={emailConf}
            onChange={(e) => [setEmailConf(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <C.labelError>{error}</C.labelError>
          <Button Text="Inscreva-se" onClick={handleSignup} />
          <C.LabelSignin>
            Já tem uma conta?
            <C.Strong>
              <Link to ="/">&nbsp;Entre</Link>
            </C.Strong>
          </C.LabelSignin>
        </C.Content>
  </C.Container>
  );
};

export default Signup;