// Import jquery because this file is using jquery
import * as $ from 'jquery'

function getBus(stopcode){
    fetch('https://arrivelah.herokuapp.com?id=' + stopcode)
    .then(r => r.json())
    .then(d => {

        // Clear the html
        $('#bustiming').html('')
        
        // Map the item
        d.services.map(b => {

            // DIsplay items
            $('#bustiming').append(`
                <div id='bus'>
                    <h1>${b.no}</h1>

                    <div id='timings'>

                        <div id='section' >
                            ${ Math.round(b.next.duration_ms / 60000) <= 1
                                ? `<p>Arr</p>`
                                : `<p>${Math.round(b.next.duration_ms / 60000)}</p>`}

                            <p>${b.next.type}</p>
                            <p>${b.next.load}</p>
                        </div>

                        <div id='section' >
                            ${ Math.round(b.next2.duration_ms / 60000) <= 1
                                ? `<p>Arr</p>`
                                : `<p>${Math.round(b.next2.duration_ms / 60000)}</p>`}

                            <p>${b.next2.type}</p>
                            <p>${b.next2.load}</p>
                        </div>

                        <div id='section' >
                            ${ Math.round(b.next3.duration_ms / 60000) <= 1
                                ? `<p>Arr</p>`
                                : `<p>${Math.round(b.next3.duration_ms / 60000)}</p>`}

                            <p>${b.next3.type}</p>
                            <p>${b.next3.load}</p>
                        </div>
                    
                    </div>
                </div>

            `)
        })
    })
}

export default getBus