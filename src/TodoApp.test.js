import React from 'react';
import ReactDOM from 'react-dom';
import { TodoApp } from './TodoApp';

import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { TodoForm } from './TodoForm';





describe('<TodoApp />', () => {


  const flushPromises = () => new Promise(resolve => setImmediate(resolve));

  it('Está vivo ?', () => {

    const div = document.createElement('div');
    ReactDOM.render(<TodoApp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  /*
  it('',()=>{
  
  });
  */

  it('Deve renderizar o TODO inicial.', async() => {

    const wrapper = mount(<TodoApp />);

    await flushPromises();
    wrapper.update();

    var todoInicial =
      [
        wrapper.find('span[children="Ir pra praia"]'),
        wrapper.find('span[children="Fazer exercício"]'),
        wrapper.find('span[children="Estudar React"]'),
        wrapper.find('span[children="Assistir série"]'),
        wrapper.find('span[children="Ler o Globosporte"]')

      ];

    todoInicial.forEach(item =>
      expect(item).toHaveLength(1));

  });

  it('Deve adicionar o item e o mesmo aparecer como TODO na lista.',async () => {
    const wrapper = mount(<TodoApp />);

    var input = wrapper.find("#todoInput");

    input.instance().value = "Teste de digitação";

    var form = wrapper.find("#todoForm");
    form.simulate('submit');

    input.instance().value


    var item = wrapper.find('span[children="Teste de digitação"]');

    expect(item).toHaveLength(1);
  });

  it('Deve filtar Feitos.',async () => {
    const wrapper = mount(<TodoApp />);

    await flushPromises();
    wrapper.update();

    var item = wrapper.find('#Feitos');

    item.simulate('click');
    wrapper.update();

    expect(wrapper.find('span[children="Ir pra praia"]')).toHaveLength(1);
    expect(wrapper.find('span[children="Fazer exercício"]')).toHaveLength(1);
    expect(wrapper.find('span[children="Estudar React"]')).toHaveLength(1);
    expect(wrapper.find('span[children="Assistir série"]')).toHaveLength(0);
    expect(wrapper.find('span[children="Ler o Globosporte"]')).toHaveLength(0);


  });
  it('Deve excluir item adicionado.',async () => {
    const wrapper = mount(<TodoApp />);

    await flushPromises();
    wrapper.update();

    var item = wrapper.find('span[children="Estudar React"]');

    var button = item.closest('div').children().at(2).children();

    button.simulate('click');

    expect(wrapper.find('span[children="Teste de digitação"]')).toHaveLength(0);

  });

 });
