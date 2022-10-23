import Login from './login/Login';
import Article from './article/Article';
import {Routes, Route} from 'react-router-dom';

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/main" element={<Article/>} />
        </Routes>
    )
}

export default Main;