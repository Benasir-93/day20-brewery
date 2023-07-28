async function foo(){
    try {
        let api= await fetch("https://api.openbrewerydb.org/v1/breweries");
        let data=await api.json();
        console.log(data);

        
    var container=document.createElement("div")
    container.setAttribute("class","container")
    container.innerHTML=`<h2>Fetch Details From https://api.openbrewerydb.org/v1/breweries</h2><br>`;
    document.body.append(container)

data.forEach(i => {
    console.log(i);
    
    var div = document.createElement("div");
    div.style.marginBottom="50px"
    div.innerHTML = `
                    <div class="card border-success mb-3 mx-2">
<div class="card-header bg-transparent border-success text-center fw-bold">Details</div>
<div class="card-body text-dark" style="     background-image: linear-gradient(to right,rgb(240, 221, 241),rgb(201, 201, 248),rgb(247, 210, 244));
">
<h5 ><span class="text-danger fw-b">Brewery Name:</span> ${i.name}</h5><br>
<h5><span class="text-danger fw-b">Brewery Type: </span>${i.brewery_type}</h5><br>
<h5><span class="text-danger fw-b">City: </span>${i.city}</h5><br>

<h5><span class="text-danger fw-b">Country :</span> ${i.country}</h5><br>

</div>
</div>`;
    document.body.append(div);
});
    } catch (error) {
        console.log(error);
    }
}
foo()
