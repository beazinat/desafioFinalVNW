import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from '../../pages/inicio/Inicio';
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados';
import QueroDoar from '../../pages/queroDoar/QueroDoar';
import logoLivro from '../../assets/logoLivro.png';
import lupa from '../../assets/lupa.png';
import s from './header.module.scss';

export default function Header() {
    return (
        <BrowserRouter>
            <header className={s.header}>
                <section className={s.logoHeader}>
                    <Link to="/">
                        <img src={logoLivro} alt="Logo" />
                    </Link>
                    <Link to="/">
                        <h1>Livros Vai na Web</h1>
                    </Link>
                </section>

                <nav className={s.navHeader}>
                    <ul>
                        <li><Link className={s.link} to='/'>Início</Link></li>
                        <li><Link className={s.link} to='/livrosdoados'>Livros Doados</Link></li>
                        <li><Link className={s.link} to='/querodoar'>Quero Doar</Link></li>
                    </ul>
                </nav>

                <section className={s.searchBar}>
                    <input type="search" placeholder="O que você procura?" />
                    <button><img src={lupa} alt="Ícone de lupa" /></button>
                </section>
            </header>

            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/livrosdoados' element={<LivrosDoados />} />
                <Route path='/querodoar' element={<QueroDoar />} />
            </Routes>
        </BrowserRouter>
    );
}
