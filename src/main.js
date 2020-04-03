/* 
O conceito Async / Await é uma
nova forma de trabalhar com programação assíncrona no Javascript.

até o ES7 a forma de realizar ações assíncronas era através das promises

abaixo temos o exemplo de uma promise que basicamente exibe 'OK!' depois
de aguardar dois segundos

esse conceito é muito usado quando trabalhamos com requisições, 
seja pra uma api, pra um servidor backend

a sintaxe padrão da promise tem .then() .catch()
------------------------------------------------------------------------------------------
*/

const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(()=> { resolve('OK!') }, 2000);
});

minhaPromise()
  .then(response =>{
    console.log(response);
})
  .catch(err => {

  });
/*------------------------------------------------------------------------------------------

// e com a nova sintaxe async/await fica assim:*/

const minhaPromise2 = () => new Promise((resolve, reject) => {
  setTimeout(()=> { resolve('OK2!') }, 2000);
});

async function executaPromise2() {
  const response = await minhaPromise2();
  console.log(response)
}

executaPromise2();

// ------------------------------------------------------------------------------------------
// executando várias istruções assíncronas com async / await

const minhaPromise3 = () => new Promise((resolve, reject) => {
  setTimeout(()=> { resolve('OK3!') }, 2000);
});



async function executaPromise3() {
  console.log(await minhaPromise3());
  console.log(await minhaPromise3());
  console.log(await minhaPromise3());
  
}
executaPromise3();

//------------------------------------------------------------------------------------------
// e agora usando arrow function

const minhaPromise4 = () => new Promise((resolve, reject) => {
  setTimeout(()=> { resolve('OK4!') }, 2000);
});

const executaPromise4 = async () => {
  console.log(await minhaPromise4());
  console.log(await minhaPromise4());
  console.log(await minhaPromise4());
  console.log(await minhaPromise4());
  console.log(await minhaPromise4());
  
}
executaPromise4();