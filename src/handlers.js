import * as $ from 'jquery'
import getBus from './getBus.js'

console.log('hello from handlers.js')

// Input handler
$('#stopCodeInput').change((e) => {

    // Calls the getbus function
    getBus(e.target.value)

    // Set the localstorage
    localStorage.setItem('stopcode', e.target.value)
})

// Button handler
$('#stopCodeButton').click(() => {

    // Calls the getbus function
    getBus(e.target.value)

    // Set the localstorage
    localStorage.setItem('stopcode', e.target.value)
})