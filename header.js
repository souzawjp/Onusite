class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    background-color: rgba(30, 58, 138, 0.95);
                    backdrop-filter: blur(8px);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                
                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: white;
                    font-weight: bold;
                    font-size: 1.25rem;
                    text-decoration: none;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .nav-links a {
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    position: relative;
                    padding: 0.5rem 0;
                }
                
                .nav-links a::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: white;
                    transition: width 0.3s ease;
                }
                
                .nav-links a:hover::after {
                    width: 100%;
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        position: fixed;
                        top: 4rem;
                        left: 0;
                        right: 0;
                        background-color: rgba(30, 58, 138, 0.98);
                        flex-direction: column;
                        align-items: center;
                        padding: 2rem 0;
                        gap: 1.5rem;
                        transform: translateY(-150%);
                        transition: transform 0.3s ease;
                    }
                    
                    .nav-links.active {
                        transform: translateY(0);
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            
            <nav>
                <a href="/" class="logo">
                    <i data-feather="globe"></i>
                    <span>Global Guardians</span>
                </a>
                
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
                
                <div class="nav-links">
                    <a href="/">Início</a>
                    <a href="#about">Sobre a ONU</a>
                    <a href="#refugiados">Refugiados</a>
                    <a href="#direitos">Direitos Humanos</a>
                    <a href="#acoes">Ações dos Países</a>
                    <a href="https://brasil.un.org/pt-br/contact-us">Contato</a>
                </div>
            </nav>
        `;
        
        // Mobile menu toggle
        const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }
            feather.replace();
        });
    }
}

customElements.define('custom-header', CustomHeader);
