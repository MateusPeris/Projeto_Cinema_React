import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark mb-4'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>Cinema</Link>
        <div>
          <ul className='navbar-nav'>
            <li className='nav-item'><Link className='nav-link' to='/filmes'>Filmes</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/salas'>Salas</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/sessoes'>Sessões</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/ingressos'>Ingressos</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
