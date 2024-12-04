import s from './inicio.module.scss';
import imagem1 from '../../assets/imagem1doação.png';
import imagem2 from '../../assets/imagem2doação.png';
import imagem3 from '../../assets/imagem3doação.png';
import imagem4 from '../../assets/imagem4doação.png';

export default function Inicio() {
    return (
        <main className={s.main}>
            <section className={s.hero}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={s.whyDonate}>
                <h2>Por que devo doar?</h2>
                <div className={s.cards}>
                    <article>
                        <img src={imagem1} alt="Círculo social de 4 pessoas" />
                        <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </article>
                    <article>
                        <img src={imagem2} alt="Pessoa lendo" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </article>
                    <article>
                        <img src={imagem3} alt="Seis pessoas transformando vidas" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </article>
                    <article>
                        <img src={imagem4} alt="Balança representando igualdade" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>
                </div>
            </section>
        </main>
    );
}
