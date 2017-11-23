import React from 'react';

import TodoList from '../src/TodoList';

var ReactTestUtils = require('react-dom/test-utils');

const List = require('../src/TodoList').default;

describe('TodoList', () => {
    
    it('Adicionar tarefa', () => {
        const todoList = ReactTestUtils.renderIntoDocument(
            <TodoList
                filter="all"
                tasksTodo={(i) => {}}/>
        );
    
        const tasks = ReactTestUtils.scryRenderedDOMComponentsWithTag(todoList, 'tr');

        todoList.addTask("Nova tarefa")

        const newTasks = ReactTestUtils.scryRenderedDOMComponentsWithTag(todoList, 'tr');

        expect(tasks.length + 1).toEqual(newTasks.length);
    });
});

describe('TodoList', () => {
    
    it('Remover tarefa', () => {
        const todoList = ReactTestUtils.renderIntoDocument(
            <TodoList
                filter="all"
                tasksTodo={(i) => {}}/>
        );
    
        const tasks = ReactTestUtils.scryRenderedDOMComponentsWithTag(todoList, 'tr');

        todoList.deleteTask(0)

        const newTasks = ReactTestUtils.scryRenderedDOMComponentsWithTag(todoList, 'tr');

        expect(tasks.length - 1).toEqual(newTasks.length);
    });
});

describe('TodoList', () => {
    
    it('Fazer tarefa', () => {
        const todoList = ReactTestUtils.renderIntoDocument(
            <TodoList
                filter="all"
                tasksTodo={(i) => {}}/>
        );
    
        const tasks = ReactTestUtils.scryRenderedDOMComponentsWithTag(todoList, 'tr');
        const tasksTodo = todoList.tasksTodo();

        todoList.addTask("nova tarefa")
        todoList.checkTaskStatus(tasks.length);

        expect(tasksTodo).toEqual(todoList.tasksTodo());
    });
});