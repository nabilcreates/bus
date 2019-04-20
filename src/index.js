// Import Styles
import './styles.scss'

// Import jquery
import * as $ from 'jquery'

// The get bus function
import getBus from './getBus.js'

// All event handlers
import './handlers.js'





// Start
if(localStorage.getItem('stopcode')){
    // Set the value of the stop code
    $('#stopCodeInput').val(localStorage.getItem('stopcode'))

    // Call the getBus function
    getBus(localStorage.getItem('stopcode'))
}else{
    // Set the value of the stop code
    $('#stopCodeInput').val('Enter a stop code')
}