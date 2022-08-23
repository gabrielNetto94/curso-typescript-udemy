import React from 'react';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring from './components/Destructuring';

function App() {

  //1 - variáveis
  const name: string = 'Gabriel'
  const age: number = 28
  const isWorking: boolean = true

  //2 - funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}`
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Typescript com react</h1>

        <h2>Nome: {name}</h2>
        <h2>Idade: {age}</h2>
        {isWorking && (<div>
          <p>Trabalhando</p>
        </div>)}
        <h3>
          {userGreeting('Gabriel Netto')}
        </h3>

        <FirstComponent />

        <SecondComponent name='Gabriel' />

        <Destructuring title='asdsa' content='asdas' comentQty={23} tags={['Bla bla','aksuhe usueh']} ></Destructuring>
      </header>
    </div>
  );
}

export default App;