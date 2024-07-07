


function fillAll(){

    let tblCountries = document.getElementById("tblCountries");

let tblBody = `<tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Capital</th>
            <th>Population</th>
        </tr>`;

    fetch("https://restcountries.com/v3.1/all").then((res)=>res.json()).then(data=>{
        data.forEach(element => {
            tblBody += `<tr>
                            <td><img width="50px" height=30px src=${element.flags.png}></td>
                            <td>${element.name.common}</td>
                            <td>${element.capital}</td>
                            <td>${element.population}</td>
                        </tr>`
            
            tblCountries.innerHTML=tblBody;            
        });
    })
}        



function searchData(){

    let userInput = document.getElementById("searchItem").value;
    console.log(userInput);

    let name = document.getElementById("name");
    let capital = document.getElementById("capital");
    let population = document.getElementById("population");
    let flag = document.getElementById("flag");

    fetch(`https://restcountries.com/v3.1/name/${userInput}`).then(res=>res.json()).then(data=>{
        data.forEach(element=>{
            name.innerText = element.name.common;
            capital.innerText = element.capital;
            population.innerText = element.population;
            flag.src = element.flags.png;
        })
    })
}
