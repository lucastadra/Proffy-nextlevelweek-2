import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/33558684?s=460&u=af76b150e1bc80d97a2c6882303c7709e18e6266&v=4"
          alt="Lucas Tadra Mainginski"
        />
        <div>
          <strong>Lucas Tadra Mainginski</strong>
          <span>Estrutura de Dados</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        <br />
        Totam maiores dolorum quis, quibusdam alias assumenda aperiam iusto
        molestiae veniam saepe optio necessitatibus. Inventore debitis, maxime
        tempora accusantium ipsa ab quod.
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
