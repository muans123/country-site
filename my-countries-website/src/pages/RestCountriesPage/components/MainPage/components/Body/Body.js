import './Body.css'

export const Body = () => {
    return (
        <div className='body-background'>
            <div className='body'>
                <div className="body-content">
                    <div className='content-title'>
                        <div>Самый лучший сайт про страны со всех континентов.</div>
                    </div>
                    <div className='content-subtitle'>
                        <div>Этот сайт был написан на таких языках: <a href='https://ru.wikipedia.org/wiki/HTML' className='HTML'>HTML</a>,<a href='https://ru.wikipedia.org/wiki/CSS' className='CSS'> CSS</a>,<a href='https://ru.wikipedia.org/wiki/JavaScript' className='JS'> JS</a>,<a href='https://ru.wikipedia.org/wiki/Sass' className='SASS'> SASS</a>,<a href='https://react.dev/' className='REACT'> REACT</a>.</div>
                        <div>Данный сайт использует пользовательское API:"REST Countries".</div>
                        <div className='subtitle-nav'>Навигация по сайту:<br />1. Главная - если вы переходя по сайту захотите вернуться на страницу, где сейчас читаете этот текст, то нажмите выше на кнопку "Главная";<br />2.Страны - при нажатии переводит вас на страницу где вы можете посмотреть информацию об любой из 250 данных из API стран;<br />3. О нас - при нажатии переводит на страницу где кратко описана информация об разработчиках сайта и об API;<br />4. Контакты - на данной странице будут написаны информация для связи с разработчиками при любой возможной ошибке на сайте.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}