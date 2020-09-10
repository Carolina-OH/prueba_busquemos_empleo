const BASE_URL="https://corsanywhere.herokuapp.com/https://jobs.github.com/positions.json?"
var pais = $("#pais").find(":selected").text();
var afinidad= $("#afinidad").find(":selected").text();

$(function () {
  $("#buscar").click(function (e) {
    e.preventDefault(); 
    console.log(afinidad , pais)
    getdataJobs(afinidad,pais)
  });
  
});



function getdataJobs (type, location){
  axios.get(`${BASE_URL}description=${type}&location=${location}`)
  .then((resp)=> {
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
     <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${job.location}</div>
        <div class="card-body">
          <h5 class="card-title">Descripción</h5>
          <p class="card-text">${job.description}</p>
        </div>
     </div>
      `
  $('#jobsContainer').append(despliege)
}