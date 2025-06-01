
import { useState, useEffect } from "react";
import Input from "../components/Input";
import Botao from "../components/Botao";

function Ingressos() {
  const [sessoes, setSessoes] = useState([]);
  const [ingressos, setIngressos] = useState(() => {
    const dados = localStorage.getItem("ingressos");
    return dados ? JSON.parse(dados) : [];
  });

  const [form, setForm] = useState({
    sessao: "", nome: "", cpf: "", assento: "", pagamento: ""
  });

  useEffect(() => {
    setSessoes(JSON.parse(localStorage.getItem("sessoes")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("ingressos", JSON.stringify(ingressos));
  }, [ingressos]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    setIngressos([...ingressos, form]);
    setForm({ sessao: "", nome: "", cpf: "", assento: "", pagamento: "" });
  };

  return (
    <div className="container">
      <h1>Venda de Ingressos</h1>

      <div className="mb-3">
        <label className="form-label">Sessão</label>
        <select name="sessao" className="form-select" value={form.sessao} onChange={handleChange}>
          <option value="">Selecione</option>
          {sessoes.map((s, i) => (
            <option key={i} value={`${s.filme} - ${s.dataHora}`}>
              {s.filme} - {s.dataHora}
            </option>
          ))}
        </select>
      </div>

      <Input label="Nome" name="nome" value={form.nome} onChange={handleChange} />
      <Input label="CPF" name="cpf" value={form.cpf} onChange={handleChange} />
      <Input label="Assento" name="assento" value={form.assento} onChange={handleChange} />
      <div className="mb-3">
        <label className="form-label">Pagamento</label>
        <select name="pagamento" className="form-select" value={form.pagamento} onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="Cartão">Cartão</option>
          <option value="PIX">PIX</option>
          <option value="Dinheiro">Dinheiro</option>
        </select>
      </div>

      <Botao onClick={handleSubmit}>Confirmar</Botao>

      <hr />
      <h3>Ingressos Vendidos</h3>
      <table className="table table-striped">
        <thead>
          <tr><th>Sessão</th><th>Nome</th><th>CPF</th><th>Assento</th><th>Pagamento</th></tr>
        </thead>
        <tbody>
          {ingressos.map((i, idx) => (
            <tr key={idx}>
              <td>{i.sessao}</td>
              <td>{i.nome}</td>
              <td>{i.cpf}</td>
              <td>{i.assento}</td>
              <td>{i.pagamento}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Ingressos;
