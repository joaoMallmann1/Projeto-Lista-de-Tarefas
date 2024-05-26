import React, { useState } from 'react';  

function ListaDeTarefas() { 
  const [tarefas, setTarefas] = useState([]); 
  const [novaTarefa, setNovaTarefa] = useState('');
  const [importancia, setImportancia] = useState('Prioridade');

  const adicionarTarefa = () => { 
    if (novaTarefa.trim() !== '' && importancia !== 'Prioridade') { 
      const tarefa =  { texto: novaTarefa, importancia: importancia };
      setTarefas([...tarefas, tarefa]);
      setNovaTarefa(''); 
      setImportancia('Prioridade');
    } 
  }; 

  const removerTarefa = (index) => { 
    const novasTarefas = [...tarefas]; 
    novasTarefas.splice(index, 1); 
    setTarefas(novasTarefas); 
  }; 

  const getColor = (importancia) => {
    switch(importancia){
      case 'alta':
        return 'red';
      case 'media':
        return 'yellow';
      case 'baixa':
        return 'green';
      default:
        return ''; 
    }
  };

  return ( 
    <div className="lista-de-tarefas-container"> 
      <h2 className='title'>Lista de Tarefas <i className="fa-solid fa-list-check" style={{ marginLeft: '18px' }}></i></h2> 
      <div className="input"><input 
        type="text" 
        value={novaTarefa} 
        onChange={(e) => setNovaTarefa(e.target.value)} 
        placeholder="   Adicione uma nova tarefa" 
      /> 
      <select className='importance' value={importancia} onChange={(e) => setImportancia(e.target.value)}>
        <option value="Prioridade" disabled>Prioridade</option>
        <option value="baixa">Baixa</option>  
        <option value="media">Média</option>
        <option value="alta">Alta</option>  
      </select>
      <button id='Add' onClick={adicionarTarefa}>Adicionar</button></div>
      <ul> 
        {tarefas.map((tarefa, index) => ( 
          <li key={index} style={{ backgroundColor: getColor(tarefa.importancia) }}> 
            {tarefa.texto}{' '} 
            <button id='remover' onClick={() => removerTarefa(index)}>Remover</button> 
          </li> 
        ))} 
      </ul> 
    </div> 
  ); 
} 

export default ListaDeTarefas;
