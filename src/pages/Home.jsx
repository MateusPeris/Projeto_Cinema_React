
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [sessoes, setSessoes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setFilmes(JSON.parse(localStorage.getItem("filmes")) || []);
    setSessoes(JSON.parse(localStorage.getItem("sessoes")) || []);
  }, []);

  const redirecionarParaIngresso = (filmeTitulo) => {
    const sessao = sessoes.find((s) => s.filme === filmeTitulo);
    if (sessao) {
      localStorage.setItem("sessaoSelecionada", JSON.stringify(sessao));
      navigate("/ingressos");
    } else {
      alert("Nenhuma sessão encontrada para este filme.");
    }
  };

  return (
    <div className="container">
      <h1>Bem-vindo ao Cinema</h1>
      <div className="row">
        {filmes.map((filme, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card h-100">
              <img src={filme.imagem} className="card-img-top" alt={filme.titulo} />
              <div className="card-body">
                <h5 className="card-title">{filme.titulo}</h5>
                <button className="btn btn-primary" onClick={() => redirecionarParaIngresso(filme.titulo)}>
                  Comprar Ingresso
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
