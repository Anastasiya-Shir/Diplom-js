// let response =  fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json');
// let k =response.body;




// // получить один заголовок
// alert(response.headers.get('Content-Type')); // application/json; charset=utf-8

// // перебрать все заголовки
// for (let [email, name] of response.headers) {
//   alert(email, name);
// }
// let response =  fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json');
// let k =response.body;




// // получить один заголовок
// alert(response.headers.get('Content-Type')); // application/json; charset=utf-8

// // перебрать все заголовки
// for (let [email, name] of response.headers) {
//   alert(email, name);
//}
(async ()=>{
let url = 'https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json';
let response = await fetch(url); 
let commits = await response.json(); 
// читаем ответ в формате JSON 
console.log(commits[0].email);
for (let i = 0; i <commits.length; i++) console.log( commits[i].email);
for (let i = 0; i <commits.length; i++) console.log( commits[i].name);
for (let i = 0; i <commits.length; i++) console.log( commits[i].gender);
for (let i = 0; i <commits.length; i++) console.log( commits[i].company);
for (let i = 0; i <commits.length; i++) console.log( commits[i].phone);
for (let i = 0; i <commits.length; i++) console.log( commits[i].balance);
for (let i = 0; i <commits.length; i++) console.log( commits[i].registered);
})();


// async function getUsers(names) {
//   let jobs = [];

//   for(let name of names) {
//     let job = fetch(`https://api.github.com/users/${name}`).then(
//       successResponse => {
//         if (successResponse.status != 200) {
//           return null;
//         } else {
//           return successResponse.json();
//         }
//       },
//       failResponse => {
//         return null;
//       }
//     );
//     jobs.push(job);
//   }

//   let results = await Promise.all(jobs);

//   return results;}

// async function getUsers() {
//         const response = await fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json');
//         return await response.json();
   
// }   const users = await getUsers();

// users.forEach(user => {consol.log(user.name);});