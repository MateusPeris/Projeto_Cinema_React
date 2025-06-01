
import { useState, useEffect } from "react";
import Input from "../components/Input";
import Botao from "../components/Botao";

function Sessoes() {
  const [filmes, setFilmes] = useState([]);
  const [salas, setSalas] = useState([]);
  const [sessoes, setSessoes] = useState(() => {
    const dados = localStorage.getItem("sessoes");
    return dados ? JSON.parse(dados) : [];
  });

  const [form, setForm] = useState({
    filme: "", sala: "", dataHora: "", preco: "", idioma: "", formato: ""
  });

  useEffect(() => {
    setFilmes(JSON.parse(localStorage.getItem("filmes")) || []);
    setSalas(JSON.parse(localStorage.getItem("salas")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("sessoes", JSON.stringify(sessoes));
  }, [sessoes]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    setSessoes([...sessoes, form]);
    setForm({ filme: "", sala: "", dataHora: "", preco: "", idioma: "", formato: "" });
  };

  return (
    <div className="container">
      <h1>Cadastro de Sessões</h1>

      <div className="mb-3">
        <label className="form-label">Filme</label>
        <select name="filme" className="form-select" value={form.filme} onChange={handleChange}>
          <option value="">Selecione</option>
          {filmes.map((f, i) => <option key={i} value={f.titulo}>{f.titulo}</option>)}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Sala</label>
        <select name="sala" className="form-select" value={form.sala} onChange={handleChange}>
          <option value="">Selecione</option>
          {salas.map((s, i) => <option key={i} value={s.nome}>{s.nome}</option>)}
        </select>
      </div>

      <Input label="Data e Hora" name="dataHora" type="datetime-local" value={form.dataHora} onChange={handleChange} />
      <Input label="Preço" name="preco" value={form.preco} onChange={handleChange} />
      <div className="mb-3">
        <label className="form-label">Idioma</label>
        <select name="idioma" className="form-select" value={form.idioma} onChange={handleChange}>
          <option value="">Selecione</option>
          <option>Dublado</option>
          <option>Legendado</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Formato</label>
        <select name="formato" className="form-select" value={form.formato} onChange={handleChange}>
          <option value="">Selecione</option>
          <option>2D</option>
          <option>3D</option>
        </select>
      </div>
      <Botao onClick={handleSubmit}>Salvar Sessão</Botao>

      <hr />
      <h3>Sessões Cadastradas</h3>
      <table className="table table-striped">
        <thead>
          <tr><th>Filme</th><th>Sala</th><th>Data e Hora</th><th>Preço</th><th>Idioma</th><th>Formato</th></tr>
        </thead>
        <tbody>
          {sessoes.map((s, i) => (
            <tr key={i}>
              <td>{s.filme}</td>
              <td>{s.sala}</td>
              <td>{s.dataHora}</td>
              <td>{s.preco}</td>
              <td>{s.idioma}</td>
              <td>{s.formato}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sessoes;
