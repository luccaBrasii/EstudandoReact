import { useState } from 'react';
import Banner from './component/Banner'
import Formulario from './component/Formulario';
import Time from './component/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([
    {
      nome: 'Lucca',
      cargo: 'dev',
      imagem: 'https://github.com/luccabrasii.png',
      time: 'Programação'
    }
  ])

  const novoColaborador = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores);
  }

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]

  return (
    <div className="App">
      <Banner />

      <Formulario
        time={times.map(time => time.nome)}
        addColaborador={colaborador => novoColaborador(colaborador)}
      />

      {times.map(time =>
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaborador={colaboradores.filter(colaboradores => colaboradores.time === time.nome)}
        />)}

    </div>
  );
}

export default App;
