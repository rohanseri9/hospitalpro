const url="./doctors.json";

async function getapi(url){
    const response=await fetch(url);
    var data=await response.json();
    console.log(data);
    show_data(data);
}
getapi(url);
function show_data(data){
    let tab=`<tr>
    <th>id</th>
    <th>Doctor Name</th>
    <th>Departement</th>
    <th>Hospital</th>
    
    </tr>`;

    for (let r of data.products) {
		tab += `<tr>
	<td>${r.id} </td>
    <td> ${r.doctor_name}</td>
	<td>${r.departement}</td>
	<td>${r.hospital_name}</td>
			
</tr>`;
	}
    document.getElementById("doc").innerHTML = tab;
}

async function display_filter(url,option){
    const response=await fetch(url);
    var data=await response.json();
    let tab=`<tr>
    <th>id</th>
    <th>Doctor Name</th>
    <th>Departement</th>
    <th>Hospital</th>
    </tr>`;
    let flag=0;
    
    for (let r of data.products){
        
        console.log(r.departement,option)
        if(r.departement==option){
            flag=1;
            tab += `<tr>
            <td>${r.id} </td>
            <td> ${r.doctor_name}</td>
            <td>${r.departement}</td>
            <td>${r.hospital_name}</td>
            
        </tr>`;
        }
       
    }
    if(flag==0){
        tab=`<h1>No doctors are available </h1>`
    }
    document.getElementById("doc").innerHTML = tab;
}

function Validate()
            {
                
                var e = document.getElementById("departement_list");
                var strUser = e.options[e.selectedIndex].value;

                var strUser1 = e.options[e.selectedIndex].text;
                display_filter(url,strUser1);
                
            }

function redisplay(){
    getapi(url);
}