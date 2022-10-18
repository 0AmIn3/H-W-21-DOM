
let conteiner = document.querySelector('.conteiner')

function getInfo(){
    axios.get("http://localhost:3001/facebook")
    .then(res => reloadUsers(res.data))

}
getInfo()

function reloadUsers(arr) {
    conteiner.innerHTML = ''
    let h1 = document.createElement('h1')
    let create_cont = document.createElement('div')
    let about = document.createElement('button')

    create_cont.classList.add('create_cont')
    about.classList.add('about')


    h1.innerHTML = 'Facebook 2'
    about.innerHTML = 'О нас'
    conteiner.append(h1, create_cont, about)


    for (let item of arr) {
        let box = document.createElement('div')
        let h1_2 = document.createElement('h1')
        let p = document.createElement('p')
        let p_2 = document.createElement('p')
        let p_3 = document.createElement('p')
        let more = document.createElement('button')

        box.classList.add('box')
        more.classList.add('more')

        h1_2.innerHTML = item.name
        p.innerHTML = 'Company : ' + item.company.name
        p_2.innerHTML = 'Website : ' + item.website
        p_3.innerHTML = 'Phone : ' + item.phone

        more.innerHTML = 'Подробнее'

        create_cont.append(box)
        box.append(h1_2, p, p_2, p_3, more)

        more.onclick = () => {
            conteiner.innerHTML = ''

            let h1 = document.createElement('h1')
            let about = document.createElement('button')
            let toMain = document.createElement('button')

            about.classList.add('about')
            about.innerHTML = 'О нас'

            toMain.classList.add('toMain')
            toMain.innerHTML = 'На главную'
            
            about.onclick = () => {
                reloadAbout()
            }
            toMain.onclick = () => {
                getInfo()
            }
            h1.innerHTML = `User: ${item.id} - ${item.name}`
            conteiner.append(h1 , about , toMain)
        }

    }

    about.onclick = () => {
        reloadAbout()
    }




}

function reloadAbout() {
    conteiner.innerHTML = ''
    let h1 = document.createElement('h1')
    let text_about_1 = document.createElement('p')
    let text_about_2 = document.createElement('p')
    let text_about_3 = document.createElement('p')
    let text_about_4 = document.createElement('p')
    let toMain = document.createElement('button')

    text_about_1.classList.add('text_about')
    text_about_2.classList.add('text_about')
    text_about_3.classList.add('text_about')
    text_about_4.classList.add('text_about')
    toMain.classList.add('toMain')


    h1.innerHTML = 'About Facebook 2'
    text_about_1.innerHTML = ' Facebook (Фе́йсбу́к[3], [ˈfeɪsˌbʊk]) — крупнейшая социальная сеть в мире[4], которой владеет компания Meta (до 28 октября 2021 года — Facebook Inc.). Была основана 4 февраля 2004 года Марком Цукербергом и его соседями по комнате во время обучения в Гарвардском университете[5] — Эдуардо Саверином, Дастином Московицем и Крисом Хьюзом.'
    text_about_2.innerHTML = 'Первоначально веб-сайт был назван Thefacebook и был доступен только для студентов Гарвардского университета, затем регистрацию открыли для других университетов Бостона, а затем — и для студентов любых учебных учреждений США, имеющих электронный адрес в домене .edu. Начиная с сентября 2006 года сайт доступен для всех пользователей Интернета в возрасте от 13 лет, имеющих адрес электронной почты.'
    text_about_3.innerHTML = 'Facebook входит в пятёрку наиболее посещаемых веб-сайтов мира. На апрель 2017 года месячная аудитория сети составляет 1,968 миллиарда человек[6]. На июнь 2017 года аудитория Facebook’а составила 2 миллиарда пользователей[1] — это те, кто заходил на сайт хотя бы раз в месяц или за указанный промежуток времени был зафиксирован с помощью кнопки Like и следящих cookie[7]. Суточная активная аудитория в марте составила 720 миллионов человек — столько фиксируется следящей сетью Facebook’а ежедневно. 24 августа 2015 года число посетителей социальной сети Facebook впервые составило один миллиард человек[8]. 1,03 млрд человек в месяц используют мобильное приложениеFacebook[9]. Каждый день в социальной сети пользователи оставляют 6 миллиардов «лайков»[10] и комментариев и публикуют 300 миллионов фотографий. На сайте зафиксировано 200 миллиардов «дружеских связей»[10]. Количество просмотров страниц сайта в октябре 2011 года составило 1 триллион[11], количество просмотров видео на сайте достигло в 2015 году отметки в 8 миллиардов в день[12].'
    text_about_4.innerHTML = ' Компания Meta является владельцем других популярных сервисов, таких как Instagram, WhatsApp, workplace[en] (корпоративный мессенджер) и компании Oculus.'
    toMain.innerHTML = 'На главную'

    conteiner.append(h1, text_about_1, text_about_2, text_about_3, text_about_4, toMain)

    toMain.onclick = () => {
        getInfo()
    }
}
