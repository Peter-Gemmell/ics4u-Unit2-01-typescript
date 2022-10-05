/**
 * The program makes rock paper scissors
 *
 *
 * By: Peter Gemmell
 * Version: 1.0
 * Since:   2022-09-17
 */

import Stack from './Stack'
import promptSync from 'prompt-sync'

const prompt = promptSync()
const myStack = new Stack()

// Input & Process
const userInput = prompt('Enter a number: ')
const number = parseInt(userInput)
myStack.Push(number)
console.log('The initial stack is empty.\n')

myStack.ShowStack()

console.log('\nDone.')
