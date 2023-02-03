const data_link="./hospital.json";

async function getapi(data_link){
    const response=await fetch(data_link);
    var data=await response.json();
    console.log(data);
    show_data(data);
}
getapi(data_link);

function show_data(data){
    let tab=`<tr>
    <th>id</th>
    <th>HospitalName</th>
    <th>PhoneNumber</th>
    <th>Area</th>
    <th>pincode</th>
    </tr>`;

    for (let r of data.products) {
		tab += `<tr>
	<td>${r.id} </td>
    <td> ${r.hospital_name}</td>
	<td>${r.phone_number}</td>
	<td>${r.branch}</td>
	<td>${r.pin_code}</td>		
</tr>`;
	}
    document.getElementById("phone").innerHTML = tab;
}

async function pincode_fetch(data_link,val){
    const response=await fetch(data_link);
    var data=await response.json();
    display_pin(data,val);
}
function display_pin(data,val){
    let tab=`<tr>
    <th>id</th>
    <th>HospitalName</th>
    <th>PhoneNumber</th>
    <th>Area</th>
    <th>pincode</th>
    </tr>`;
    let flag=0;
    for (let r of data.products){
        let cmp1=val.toString();
        if(r.pin_code==cmp1){
            flag=1;
            tab += `<tr>
            <td>${r.id} </td>
            <td> ${r.hospital_name}</td>
            <td>${r.phone_number}</td>
            <td>${r.branch}</td>
            <td>${r.pin_code}</td>		
        </tr>`;
        }
    }
    if(flag==0){
        tab=`<h1>Hospitals are not available on this pincode</h1>`
    }
    document.getElementById("phone").innerHTML = tab;
}

document.getElementById("search").addEventListener("change",()=>{
    let val=document.getElementById("search").value;
    pincode_fetch(data_link,val);
})

document.getElementById("refresh").addEventListener("click",()=>{
    getapi(data_link);
})