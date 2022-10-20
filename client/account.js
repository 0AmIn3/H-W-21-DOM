let id = window.location.href.split('=').at(-1)

axios.get(`http://localhost:3001/facebook/${id}`)
    .then(res => show(res.data))


let acc_id = document.querySelector('.acc_id')
let acc_name = document.querySelector('.acc_name')
let obj = document.querySelector('.obj')




function show(arr) {
    acc_id.innerHTML = arr.id
    acc_name.innerHTML = arr.name
    obj.innerHTML = `
    { <br>
             "id": ${arr.id},<br>
            "name": ${arr.name},<br>
            "username": ${arr.username},<br>
            "email": ${arr.email},<br>
            "address": {<br>
              "street": ${arr.address.street},<br>
              "suite": ${arr.address.suite},<br>
              "city": ${arr.address.city},<br>
              "zipcode": ${arr.address.zipcode},<br>
              "geo": {<br>
                "lat": ${arr.address.geo.lat},<br>
                "lng": ${arr.address.geo.lng}<br>
              }<br>
            },<br>
            "phone": ${arr.phone},<br>
            "website": ${arr.website},<br>
            "company": {<br>
              "name": ${arr.company.name},<br>
              "catchPhrase": ${arr.company.catchPhrase},<br>
              "bs": ${arr.company.bs}<br>
            }
        `
    // obj.innerHTML = JSON.stringify(arr)
}