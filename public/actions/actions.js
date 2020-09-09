// const { nodeName } = require("jquery")
// const { default: axios } = require("axios")

// var cumplePromesa = true;
// const myFirstPromise = new Promise((resolve,reject)=>{
// if (cumplePromesa){
//     resolve("La promesa fue cumplida")
// }else{
//     reject("La promesa fue rota")
// }
// });

// console.log(myFirstPromise);

const getJobs = async () => {
  try {
    return await axios.get('https://corsanywhere.herokuapp.com/https://jobs.github.com/positions.json?')
  } catch (error) {
    console.error(error)
  }
}
getJobs()


