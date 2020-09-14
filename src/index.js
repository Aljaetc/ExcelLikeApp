import './scss/index.scss'

console.log('Hello! I am index.js')

async function hi() {
  return Promise.resolve('Hello, I am a promise')
}

hi().then(console.log)
