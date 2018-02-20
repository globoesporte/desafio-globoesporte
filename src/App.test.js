import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import TaskList from '../src/TaskList';
import jsonData from './api/data.json'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

var ReactTestUtils = require('react-dom/test-utils');

const List = require('../src/TaskList').default;

describe('TaskList', () => {
    
    it('Add a Task', () => {
        const taskList = ReactTestUtils.renderIntoDocument(
            <TaskList
                data={jsonData}
                />
        );
    
        const tasks = ReactTestUtils.scryRenderedDOMComponentsWithTag(taskList, 'input');

        taskList.addTask("Test")

        const newTasks = ReactTestUtils.scryRenderedDOMComponentsWithTag(taskList, 'input');

        expect(tasks.length + 1).toEqual(newTasks.length);
    });
});


describe('TaskList', () => {
    
    it('Delete task', () => {
       const taskList = ReactTestUtils.renderIntoDocument(
            <TaskList
                data={jsonData}
                />
        );
    
        const tasks = ReactTestUtils.scryRenderedDOMComponentsWithTag(taskList, 'input');

        taskList.deleteTask(0)

        const newTasks = ReactTestUtils.scryRenderedDOMComponentsWithTag(taskList, 'input');

        expect(tasks.length - 1).toEqual(newTasks.length);
    });
});


describe('TaskList', () => {
    
    it('Do task', () => {
       const taskList = ReactTestUtils.renderIntoDocument(
            <TaskList
                data={jsonData}
                />
        );
		
        taskList.setState({displayType : "todo"})

        const tasks = ReactTestUtils.scryRenderedDOMComponentsWithTag(taskList, 'input');

        taskList.changeTaskStatus(taskList.state.data.length-1)

        const newTasks = ReactTestUtils.scryRenderedDOMComponentsWithTag(taskList, 'input');

        expect(tasks.length -1).toEqual(newTasks.length);
    });
});