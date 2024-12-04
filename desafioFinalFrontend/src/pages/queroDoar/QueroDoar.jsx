import iconeLivro from '../../assets/iconeLivroForm.png';
import s from './queroDoar.module.scss';

export default function QueroDoar() {
    return (
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do livro.</p>
            <form action="">
                <div>
                    <img src={iconeLivro} alt="Ícone de livro aberto com borda azul" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" name="titulo" id="titulo" placeholder="Título" />
                <input type="text" name="categoria" id="categoria" placeholder="Categoria" />
                <input type="text" name="autor" id="autor" placeholder="Autor" />
                <input type="text" name="linkImagem" id="linkImagem" placeholder="Link da Imagem" />
                <input type="submit" value="Doar" className={s.buttonDoar} />
            </form>
        </section>
    );
}
