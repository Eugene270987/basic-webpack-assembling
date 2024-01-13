import {showBotMessage, showUserMessage} from './messagesHelpers.js';
import '../scss/style.scss';
import _ from 'lodash';

//npm init @eslint/config

document.getElementById('click').addEventListener('click', () => {
    showUserMessage('Hello');
    showUserMessage('Hello');
    showBotMessage('Hello I am Bot');
    showBotMessage('Hello I am Bot');
    showUserMessage('Hello');
    showUserMessage('Hello');
    showBotMessage('Hello I am Bot');
    showBotMessage('Hello I am Bot');
    const arr = [1, 2, 3, 3, 4, 5, 5, 6, 7, 7];
    const result = _.uniq(arr);
    console.log(result);
})