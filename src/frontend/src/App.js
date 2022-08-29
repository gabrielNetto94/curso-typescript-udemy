import React, { createContext } from 'react';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';
import State from './components/State';
import Context from './components/Context';
export const AppContext = createContext(null);
function App() {
    //1 - variáveis
    const name = 'Gabriel';
    const age = 28;
    const isWorking = true;
    //2 - funções
    const userGreeting = (name) => {
        return `Olá ${name}`;
    };
    //Type
    const myText = 'Tem valor aqui';
    let myText2 = null;
    const PontoCardeal = 'Oeste';
    //Context
    const contextValue = {
        language: 'Javascript',
        framework: 'Express',
        projects: 5
    };
    return (<AppContext.Provider value={contextValue}>

      <div className="App">

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

        <SecondComponent name='Gabriel'/>

        <h1>Desctructuring</h1>
        <Destructuring title='Título legal' content='bla blá blá asuhda' comentQty={23} tags={['#Bla bla', '#aksuhe usueh']} category={Category.P}/>

        <State />
        {myText && <p>Tem texto</p>}
        {myText2 && <p>Não tem valor</p>}


        <h1>Context</h1>
        <Context />
      </div>
    </AppContext.Provider>);
}
export default App;
