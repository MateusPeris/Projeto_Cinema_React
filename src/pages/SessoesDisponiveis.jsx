
import { useState, useEffect } from "react";

function SessoesDisponiveis() {
  const [sessoes, setSessoes] = useState([]);

  useEffect(() => {
    setSessoes(JSON.parse(localStorage.getItem("sessoes")) || []);
  }, []);

  return (
    <div className="container">
      <h1>Sessões Disponíveis</h1>
      <div className="row">
        {sessoes.map((s, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{s.filme}</h5>
                <p className="card-text">
                  <strong>Sala:</strong> {s.sala}<br />
                  <strong>Data e Hora:</strong> {s.dataHora}<br />
                  <strong>Preço:</strong> R$ {s.preco}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SessoesDisponiveis;
