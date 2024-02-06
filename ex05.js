
const { Observable } = require('rxjs');
const axios = require('axios');
const { map } = require('rxjs/operators');

function httpGet(url) {
    return new Observable(subscriber => {
        axios.get(url)
        .then(resp => {
            if (Array.isArray(resp.data)){
              resp.data.forEach(el => {
                subscriber.next(el)
              })
            }else{
                subscriber.next(resp.data)

            }
        })
        .then(() => subscriber.complete())
    })

}

httpGet('http://localhost:3000/films')
.pipe(
    map(film => film.Actors),
    map(actorsString => actorsString.split(","))
)
.subscribe(actorsArray => console.log(actorsArray))