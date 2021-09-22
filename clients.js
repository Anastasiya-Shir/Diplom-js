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
let balance=[];
let  gender=[];   let countMan = 0;
(async ()=>{
let url = 'https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json';
let response = await fetch(url); 
let commits = await response.json(); 
// читаем ответ в формате JSON 
console.log(commits[0].email);
let tbody = document.querySelector('tbody');
let body = document.querySelector('body');

for(var i = 0; i < commits.length; i++)

{
	var tr = document.createElement('tr');
	tr.innerHTML =
		'<td>' + commits[i].email + '</td>' +
		'<td>' + commits[i].name+ '</td>' +
		'<td>' + commits[i].gender + '</td>'+        
		'<td>' + commits[i].company + '</td>'+        
		'<td>' + commits[i].phone+ '</td>'+        
		'<td>' + commits[i].balance + '</td>'+   

		'<td>' + commits[i].registered + '</td>';
       ;
        gender.push(commits[i].gender);
        balance.push(commits[i].balance.substring(1));
   
      

	tbody.appendChild(tr);
};
balance.replace(/,/g,"") ;
let b = balance.map(Number);
console.log(b);
  for(var i = 0; i < gender.length; ++i){
            if(gender[i] === "female")
                countMan++;
        }
   
        let countWomen=gender.length-countMan;
       let  manQ=document.createElement('p')
       let  womanQ=document.createElement('p')
      manQ .innerHTML="Количество мужчин "  +  countMan;
     womanQ .innerHTML="Количество женщин "  +  countWomen;
       body.prepend(manQ);
       body.prepend(womanQ);
       let maxBalance=document.createElement("p");
       maxBalance.innerHTML="Наибольший баланс: " + gender.max;
       body.prepend(maxBalance);
})();



// var contacts =
// [
// 	{
// 		name: 'Ivan',
// 		surname: 'Ivanov',
// 		phone: 123123123
// 	},
// 	{
// 		name: 'Iva545n',
// 		surname: 'Iva5677nov',
// 		phone: 23123
// 	}
// ];

// let tbody = document.querySelector('tbody');

// for(var i = 0; i < contacts.length; i++)
// {
// 	var tr = document.createElement('tr');
// 	tr.innerHTML =
// 		'<td>' + contacts[i].name + '</td>' +
// 		'<td>' + contacts[i].surname + '</td>' +
// 		'<td>' + contacts[i].phone + '</td>';
// 	tbody.appendChild(tr);
// };

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