import React from 'react';
import PageHeader from '../../components/PageHeader';

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Que incrível que você quer dar aulas.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">
              Matéria
              <input type="text" id="subject" />
            </label>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">
              Dia da Semana
              <input type="text" id="week_day" />
            </label>
          </div>

          <div className="input-block">
            <label htmlFor="time">
              Hora
              <input type="text" id="time" />
            </label>
          </div>
        </form>
      </PageHeader>
    </div>
  );
};

export default TeacherForm;
