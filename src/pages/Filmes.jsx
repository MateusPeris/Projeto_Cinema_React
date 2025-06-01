import { useState, useEffect } from "react";
import Input from "../components/Input";
import Botao from "../components/Botao";

function Filmes() {
  const [filmes, setFilmes] = useState(() => {
    const dados = localStorage.getItem("filmes");
    return dados ? JSON.parse(dados) : [];
  });

  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
    genero: "",
    classificacao: "",
    duracao: "",
    estreia: "",
    imagem: ""
  });

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("filmes")) || [];
    setFilmes(dados);
  }, []);

  useEffect(() => {
    localStorage.setItem("filmes", JSON.stringify(filmes));
  }, [filmes]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setFilmes([...filmes, form]);
    setForm({
      titulo: "",
      descricao: "",
      genero: "",
      classificacao: "",
      duracao: "",
      estreia: "",
      imagem: ""
    });
  };

  return (
    <div className="container">
      <h1>Cadastro de Filmes</h1>
      <Input label="Título" name="titulo" value={form.titulo} onChange={handleChange} />
      <Input label="Descrição" name="descricao" value={form.descricao} onChange={handleChange} />
      <div className="mb-3">
        <label className="form-label">Gênero</label>
        <select name="genero" className="form-select" value={form.genero} onChange={handleChange}>
          <option value="" selected disabled>Esolha o gênero</option>
          <option>Ação</option>
          <option>Comédia</option>
          <option>Suspense</option>
          <option>Terror</option>
          <option>Romance</option>
          <option>Ficção Científica</option>
          <option>Drama</option>
          <option>Documentário</option>
          <option>Musical</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Classificação Indicativa</label>
        <select name="classificacao" className="form-select" value={form.classificacao} onChange={handleChange}>
          <option value="" selected disabled>Esolha a classificação</option>
          <option>Livre</option>
          <option>10</option>
          <option>12</option>
          <option>14</option>
          <option>16</option>
          <option>18</option>
        </select>
      </div>
      <Input label="Duração (min)" name="duracao" value={form.duracao} onChange={handleChange} />
      <Input label="Data de Estreia" name="estreia" type="date" value={form.estreia} onChange={handleChange} />
      <Input label="URL da Imagem" name="imagem" value={form.imagem} onChange={handleChange} />
      <Botao onClick={handleSubmit}>Salvar Filme</Botao>

      <hr />
      <h3>Filmes Cadastrados</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Título</th>
            <th>Gênero</th>
            <th>Duração</th>
            <th>Classificação</th>
            <th>Estreia</th>
          </tr>
        </thead>
        <tbody>
          {filmes.map((filme, index) => (
            <tr key={index}>
              <td>{filme.titulo}</td>
              <td>{filme.genero}</td>
              <td>{filme.duracao} min</td>
              <td>{filme.classificacao}</td>
              <td>{filme.estreia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Filmes;
