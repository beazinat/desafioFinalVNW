import livroALiberdadeEUmaLutaConstante from '../../assets/livroALiberdadeEUmaLutaConstante.jpg';
import livroContraAMoralEOsBonsCostumes from '../../assets/livroContraAMoralEOsBonsCostumes.jpg';
import livroDescolonizandoAfetos from '../../assets/livroDescolonizandoAfetos.jpg';
import livroHistoriaDaSexualidade from '../../assets/livroHistoriaDaSexualidade.jpeg';
import livroMalatestaTextosEscolhidos from '../../assets/livroMalatestaTextosEscolhidos.jpg';
import livroMovimentoLGBTI from '../../assets/livroMovimentoLGBTI+.jpg';
import livroObrasCompletasVolume14 from '../../assets/livroObrasCompletasVolume14.jpg';
import livroOPrincipioDoEstado from '../../assets/livroOPrincipioDoEstado.jpg';
import livroOSeminarioVolume14 from '../../assets/livroOSeminarioVolume14.jpg';
import livroOsGrandesEscritosAnarquistas from '../../assets/livroOsGrandesEscritosAnarquistas.jpg';
import livroPedagogiaLibertaria from '../../assets/livroPedagogiaLibertaria.jpg';
import livroProblemasDeGenero from '../../assets/livroProblemasDeGenero.jpg';
import livroTudoSobreOAmor from '../../assets/livroTudoSobreOAmor.jpg';
import s from './livrosDoados.module.scss';

const livros = [
    { imagem: livroALiberdadeEUmaLutaConstante, titulo: "A Liberdade e Uma Luta Constante", autor: "Angela Davis", categoria: "Ciências Sociais" },
    { imagem: livroContraAMoralEOsBonsCostumes, titulo: "Contra a Moral e Os Bons Costumes", autor: "Renan Quinalha", categoria: "Ciências Sociais" },
    { imagem: livroDescolonizandoAfetos, titulo: "Descolonizando Afetos", autor: "Geni Núñez", categoria: "Ciências Sociais" },
    { imagem: livroHistoriaDaSexualidade, titulo: "História da Sexualidade", autor: "Michael Foucault", categoria: "Psicologia" },
    { imagem: livroMalatestaTextosEscolhidos, titulo: "Malatesta - Textos Escolhidos", autor: "Errico Malatesta", categoria: "Ciências Sociais" },
    { imagem: livroMovimentoLGBTI, titulo: "Movimento LGBTI+", autor: "Renan Quinalha", categoria: "Ciências Sociais" },
    { imagem: livroOPrincipioDoEstado, titulo: "O Princípio do Estado", autor: "Mikhail Bakunin", categoria: "Ciências Sociais" },
    { imagem: livroOSeminarioVolume14, titulo: "O Seminário - Volume 14", autor: "Jacques Lacan", categoria: "Psicologia" },
    { imagem: livroObrasCompletasVolume14, titulo: "Obras Completas - Volume 14", autor: "Sigmund Freud", categoria: "Psicologia" },
    { imagem: livroOsGrandesEscritosAnarquistas, titulo: "Os Grandes Escritos Anarquistas", autor: "George Woodcock", categoria: "Ciências Sociais" },
    { imagem: livroPedagogiaLibertaria, titulo: "Pedagogia Libertária", autor: "Silvio Gallo", categoria: "Ciências Sociais" },
    { imagem: livroProblemasDeGenero, titulo: "Problemas de Gênero", autor: "Judith Butler", categoria: "Ciências Sociais" },
    { imagem: livroTudoSobreOAmor, titulo: "Tudo Sobre o Amor", autor: "Bell Hooks", categoria: "Ciências Sociais" },
];

export default function LivrosDoados() {
    return (
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <div className={s.gridContainer}>
                {livros.map((livro, index) => (
                    <div key={index} className={s.card}>
                        <img src={livro.imagem} alt={`Imagem do livro ${livro.titulo}`} />
                        <div>
                            <h3>{livro.titulo}</h3>
                            <p>{livro.autor}</p>
                            <p>{livro.categoria}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
