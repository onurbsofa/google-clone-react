
import './App.css';

function App() {
  return (
    <div>
         <header>
            <nav>
                <ul class="nav-right-section">
                    <li>
                        <a href="">Correo</a>
                    </li>
                    <li>
                        <a href="">Imágenes</a>
                    </li>
                    <li class="menu-icon">
                        <a href=""></a>
                    </li>
                    <li>
                        <a href="">
                            <img src="https://lh3.googleusercontent.com/ogw/AGvuzYZjWmtepdKnDJinYBYgzATJm49ENNYbV2ND30Cj9w=s32-c-mo" alt="perfil">
                            </img>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <section class="main-logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7GehYKdImLiMpzSon3pKKLVhwGS_S4Ssjj9WHNIfUYXZiyrzk7w&s" alt="">
                </img>
            </section>
            <section class="main-input">
                <div class="main-input-container">
                    <span class="search-icon">
                    </span>
                    <input type="text"></input>
                    <a class="micro-icon" href=""></a>
                </div>
            </section>
            <section class="main-buttons">
                <div>
                    <button>Buscar con Google</button>
                </div>
                <div>
                    <button>Me siento con suerte</button>
                </div>
            </section>
        </main>
        <footer>
            <ul class="footer-left">
                <li>
                    <a href="">Publicidad</a>
                </li>
                <li>
                    <a href="">Negocios</a>
                </li>
                <li>
                    <a href="">Acerca de</a>
                </li>
                <li>
                    <a href="">Cómo funciona la búsqueda</a>
                </li>
            </ul>
            <ul class="footer-right">
                <li>
                    <a href="">Privacidad</a>
                </li>
                <li>
                    <a href="">Condiciones</a>
                </li>
                <li>
                    <a href="">Preferencias</a>
                </li>
            </ul>
        </footer>
    </div>
  );
}

export default App;
