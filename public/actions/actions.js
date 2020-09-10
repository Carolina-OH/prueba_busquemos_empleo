
const BASE_URL="https://corsanywhere.herokuapp.com/https://jobs.github.com/positions.json?"
var pais = $("#pais").find(":selected").text();
var afinidad= $("#afinidad").find(":selected").text();

$(function () {
  $("#buscar").click(function (e) {
    e.preventDefault(); 
    var pais = $("#pais").find(":selected").text();
    var afinidad= $("#afinidad").find(":selected").text();
    console.log(afinidad , pais)
    getdataJobs(afinidad,pais)
  });
  
});



function getdataJobs (type, location){
  axios.get(`${BASE_URL}description=${type}&location=${location}`)
  .then((resp)=> {
    $("#jobsContainer").empty()
    var cantidad=resp.data.length
    $("#jobsCount").empty()
    $("#jobsCount").append(`El total de registros encontrados es: ${cantidad}`)
    //alert(`se encontraron ${cantidad} registros`)
    //como poner este alert como mensaje afuera, tengo que pushear el valor a una variable afuera y dpes llamar a esa variable?
    //que flojera... xd :C
  resp.data.forEach((job)=>{
    desplegarInfo(job)

  })
  console.log(resp)
  })
  .catch ((error)=> {
    console.error(error)
  })
}



function desplegarInfo(job){
  
  var despliege=
    `
     <div class="card border-info mb-3" style="max-width: 100%;">
        <div class="card-header">Location: ${job.location} </div>
        <div class="card-body">
          <h5 class="card-title">Company: ${job.company}</h5>
          <p class="card-title">Description:</p>
          <p class="card-text">${job.description}</p>
          <hr>
          <p class="card-text">${(job.created_at)}</p>
        </div>
        
     </div>
      `
  $('#jobsContainer').append(despliege)
}