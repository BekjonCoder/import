const API='https://jsonplaceholder.typicode.com/posts'
import * as fetchPosts from './api.js'
const container=document.querySelector('.container')

console.log(fetchPosts);
fetchPosts.fetchPosts(API,container)
