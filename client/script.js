

function getInfo() {
    axios.get("http://localhost:3001/facebook")
        .then(res => reloadUsers(res.data))

}
getInfo()






let create_cont = document.querySelector('.create_cont')

function reloadUsers(arr) {
    create_cont.innerHTML = ''


    for (let item of arr) {
        let box = document.createElement('div')
        let h1_2 = document.createElement('h1')
        let p = document.createElement('p')
        let p_2 = document.createElement('p')
        let p_3 = document.createElement('p')
        let more = document.createElement('button')
        let toaccinfo = document.createElement('a')

        box.classList.add('box')
        more.classList.add('more')
        toaccinfo.classList.add('toaccinfo')

        h1_2.innerHTML = item.name
        p.innerHTML = 'Company : ' + item.company.name
        p_2.innerHTML = 'Website : ' + item.website
        p_3.innerHTML = 'Phone : ' + item.phone

        more.innerHTML = 'Подробнее'
        more.id = 'toaccinfo'
        create_cont.append(box)
        box.append(h1_2, p, p_2, p_3, toaccinfo)
        toaccinfo.append(more)
        toaccinfo.onclick = () => {
            toaccinfo.href = `./account.html?id=${item.id}`
        }

    }



}

