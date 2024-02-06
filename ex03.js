const { from } = require('rxjs');
const { map } = require('rxjs/operators');
const notas = [6.7, 6.1, 7.5, 4.8, 9.8, 7]

const obs = from(notas)

obs.pipe(
    map(nota => nota >= 7 ? 'Aprovado' : 'Reprovado'),
    map(status => status[0])
).subscribe(status =>{
    console.log(status)
} )