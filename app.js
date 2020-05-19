// const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.writeHead(200,'Content- Type', 'text/html')
//     res.write('<h1>Hola Mundo</h1>')
//     res.end()
// });

// server.listen(3000, ()=>{
//     console.log('Servidor corriendo en el puerto 3000');
// });



// const fetch = require('node-fetch');
// const fs = require('fs');

// function Fetch() {
//     return fetch('https://pokeapi.co/api/v2/pokemon/25/')
//     .then((res) => res.json())
//     .then((json) => {
//         fs.writeFile('backup.json', json.abilities, 'utf8',function(error){
//             if(error) throw error;
//             console.log('Updated document');
//         });
//         console.log(json.abilities);
//     });
// }

// Fetch();


// var fetch = require('node-fetch');
// var fs = require('fs');

// async function Fetch() {
//     try
//    {
//         let response = await fetch('https://pokeapi.co/api/v2/pokemon/25/');
//         let json = await response.json();
//         return fs.writeFile('backup.json', json, 'utf8',function(error){
//             if(error) throw error;
//             console.log('Updated document');
//             console.log(json);
//         });
//     } 
//     catch (error) {
//         console.log('ERROR =', error)
//     }
// }

// Fetch();





// const URL = 'https://pokeapi.co/api/v2/pokemon/25/';
// const REQUEST = {
//     method: 'GET',
//     headers: {
//         'Hola': 'respuesta',
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//     })
// };

// var fetch = require('node-fetch');
// var fs = require('fs');

// fetch('https://pokeapi.co/api/v2/pokemon/25/')
// .then(response =>{
//     return response.json();
// })
// .then(json => {
//     return fs.writeFile('backup.json', json, 'utf8',function(error){
//         if(error) throw error;
//         console.log('Updated document');
//         console.log(json);
//     });
// })
// .catch(error => {
//     console.log('Ocurrio un error');
// })

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db/db.json')
const db = low(adapter)

const fetch = require('node-fetch')

fetch('https://az-fn-beacon.azurewebsites.net/api/GetBeaconFunction?code=jdY0sUhGpkAt87C5yq7XO7s8jNp3E2Yc8QDpwz18SP/qEyt9h47ozA==')
.then(response =>{
    return response.json();
})
.then(json => {
    console.log('json =>', json);
    
    return db.defaults({json}).write() 
})
.catch(error => {
    console.log('Ocurrio un error');
})


// function postazfnbeacons(bodyJson) {
//     return (
//       fetch(
//         'https://az-fn-beacon.azurewebsites.net/api/QueryBeaconFunction?code=Fb3JRSOM6Hc1oSWvOej3mtv2ZgqgNKQaPxEVXIOTyZbM8m3Vvc7cug==',
//         {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(bodyJson),
//         },
//       )
//         .then(response => response.json()) 
//         .then(json => {
//             console.log('json =>', json);
//             return db.defaults(json).write() 
//         })
//         .catch(error => {
//           console.error(error);
//         })
//     );
//   }

//  postazfnbeacons();






// const lowdb = require('lowdb');
// const File = require('lowdb/adapters/FileAsync');

// let db;

// async function createConnection() {
//     const adapter = new File('db.json');
//     db = await lowdb(adapter);
//     db.defaults({task: []}).write();
// }

// const getConnnection = () =>{
//     return db;
// };




    





