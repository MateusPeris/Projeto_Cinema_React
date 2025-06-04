
import { useState, useEffect } from "react";
import Input from "../components/Input";
import Botao from "../components/Botao";

function Salas() {
  const [salas, setSalas] = useState(() => {
    const dados = localStorage.getItem("salas");
    return dados ? JSON.parse(dados) : [];
  });

  const [form, setForm] = useState({ nome: "", capacidade: "", tipo: "" });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("salas", JSON.stringify(salas));
  }, [salas]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      const atualizadas = salas.map((s, i) => (i === editIndex ? form : s));
      setSalas(atualizadas);
      setEditIndex(null);
    } else {
      setSalas([...salas, form]);
    }

    setForm({ nome: "", capacidade: "", tipo: "" });
  };

  const editarItem = (index) => {
    setForm(salas[index]);
    setEditIndex(index);
  };

  const excluirItem = (index) => {
    const novas = salas.filter((_, i) => i !== index);
    setSalas(novas);
  };

  return (
    <div className="container">
      <h1>Cadastro de Salas</h1>
      <Input label="Nome" name="nome" value={form.nome} onChange={handleChange} />
      <Input label="Capacidade" name="capacidade" value={form.capacidade} onChange={handleChange} />

      <div className="mb-3">
        <label className="form-label">Tipo</label>
        <select name="tipo" className="form-select" value={form.tipo} onChange={handleChange}>
          <option value="">Selecione</option>
          <option>2D</option>
          <option>3D</option>
          <option>IMAX</option>
        </select>
      </div>

      <Botao onClick={handleSubmit}>{editIndex !== null ? "Atualizar Sala" : "Salvar Sala"}</Botao>

      <hr />
      <h3>Salas Cadastradas</h3>
      <table className="table table-striped">
        <thead>
          <tr><th>Nome</th><th>Capacidade</th><th>Tipo</th><th>Ações</th></tr>
        </thead>
        <tbody>
          {salas.map((sala, i) => (
            <tr key={i}>
              <td>{sala.nome}</td>
              <td>{sala.capacidade}</td>
              <td>{sala.tipo}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => editarItem(i)}>Editar</button>
                <button className="btn btn-danger btn-sm" onClick={() => excluirItem(i)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Salas;
