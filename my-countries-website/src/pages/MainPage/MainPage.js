import { Body } from './components/Body'
import { Header } from './components/Header'

import './MainPage.css'

export const MainPage = () => {
    return (
        <div className='main-page'>
            <Header></Header>
            <Body></Body>
        </div>
    )
}