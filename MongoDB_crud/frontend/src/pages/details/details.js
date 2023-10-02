import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../service/service";
import "./details.css";

const Usuario = ({ match }) => {
  const [usuario, setUsuario] = useState({
    nome: "",
    matricula: null,
    ativo: false,
    endereco: { cidade: "", estado: "" },
  });

  useEffect(() => {
    const fetchUser = async () => {
      const { id } = match.params;
      const response = await api.get(`/usuario/${id}`);
      setUsuario(response.data);
    };
    fetchUser();
  }, [match.params]);

  return (
    <div className="usuario-info">
      <h1>{usuario.nome}</h1>
      <h1>{usuario.matricula}</h1>
      <h1>{`Usuário ${usuario.ativo ? "ativo" : "inativo"}`}</h1>
      <h1>{usuario.endereco.cidade}</h1>
      <h1>{usuario.endereco.estado}</h1>
      <br />
      <Link to="/">Voltar</Link>
      <br />
      <Link to={`/EditarUsuario/${usuario._id}`}>Ediar</Link>
      <br />
      <Link to={`/DeletarUsuario/${usuario._id}`}>Deletar</Link>
    </div>
  );
};

export default Usuario;