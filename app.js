const API='https://jsonplaceholder.typicode.com/posts'
import * as getData from './api.js'
const container=document.querySelector('.container')

console.log(getData);
getData.getData(API,container)
