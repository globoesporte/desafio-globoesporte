import React from 'react';
import ReactDOM from 'react-dom';
import { TodoApp } from './TodoApp';

import axios from 'axios';
//import MockAdapter from 'axios-mock-adapter';

import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { TodoForm } from './TodoForm';



describe('<TodoApp />', () => {

  beforeEach(() => {
    const promise = Promise.resolve({
      data: [
        {
          "text": "Ir pra praia",
          "status": "done"
        },
        {
          "text": "Fazer exercício",
          "status": "done"
        },
        {
          "text": "Estudar React",
          "status": "done"
        },
        {
          "text": "Assistir série",
          "status": "todo"
        },
        {
          "text": "Ler o Globosporte",
          "status": "todo"
        }
      ]
    });

    sinon.stub(axios, 'get').callsFake(() => promise);
  });

  afterEach(() => {
    axios.get.restore();
  });

  it('Está vivo ?', () => {

    const div = document.createElement('div');
    ReactDOM.render(<TodoApp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  /*
  it('',()=>{
  
  });
  */

  it('Deve renderizar o TODO inicial.', () => {

    const wrapper = mount(<TodoApp />);

    wrapper.update();
  });

  it('Deve adicionar o item e o mesmo aparecer como TODO na lista.', () => {
    const wrapper = mount(<TodoApp />);

    var input = wrapper.find("#todoInput");

    input.instance().value =  "Teste de digitação" ;

    var form = wrapper.find("#todoForm");
    form.simulate('submit');

    input.instance().value
  
    
    var item = wrapper.find('div[children="Teste de digitação"]');
    
    expect(item).not.toBeUndefined();
  });



});
