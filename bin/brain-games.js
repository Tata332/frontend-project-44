#!/usr/bin/env node
import runGames from '../src/cli.js';

const greetingUser = () => {
    console.log('Welcome to the Brain Games!');
    runGames();
};

greetingUser();