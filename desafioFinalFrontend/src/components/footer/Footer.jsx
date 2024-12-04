import logoFacebook from '../../assets/logoFacebook.png';
import logoTwitter from '../../assets/logoTwitter.png';
import logoYoutube from '../../assets/logoYoutube.png';
import logoLinkedin from '../../assets/logoLinkedin.png';
import logoInstagram from '../../assets/logoInstagram.png';
import s from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={s.footer}>
            <section className={s.contacts}>
                <p>4002-8922</p>
                <nav>
                    <a href="#" aria-label="Facebook">
                        <img src={logoFacebook} alt="Logo do Facebook" />
                    </a>
                    <a href="#" aria-label="Twitter">
                        <img src={logoTwitter} alt="Logo do Twitter" />
                    </a>
                    <a href="#" aria-label="YouTube">
                        <img src={logoYoutube} alt="Logo do YouTube" />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <img src={logoLinkedin} alt="Logo do LinkedIn" />
                    </a>
                    <a href="#" aria-label="Instagram">
                        <img src={logoInstagram} alt="Logo do Instagram" />
                    </a>
                </nav>
            </section>
            <section className={s.copyright}>
                <p>Desenvolvido por Beazinat Rodrigues</p>
                <p>Instrução por Fernanda Corrêa e João Pedro Belo</p>
                <p>Site realizado com fins educativos no bootcamp da Vai Na Web - 2024</p>
            </section>
        </footer>
    );
}
