import './styles.css';

import { FaHotjar } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';

const Index = () => {
  return (
    <body className="body">
      <div className="card">
        <div className="imageBox">
          <div className="bullet">
            <FaHotjar />
            <span> Em alta </span>
          </div>
        </div>
        <div className="bundle">
          <span> 6 DIAS / 5 NOITES </span>
        </div>
        <div className="allContent">
          <span className="label">PACOTE</span>
          <h1 className="title">Pacotes para Porto Seguro</h1>
          <span className="origem">Saindo de Montes Claros - MG</span>
          <div className="seeMore">
            <IoEye /> Ver Pacotes{' '}
          </div>
        </div>
      </div>
    </body>
  );
};

export default Index;
