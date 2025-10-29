class CustomSlider extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .slider-container {
                    position: relative;
                    max-width: 1000px;
                    margin: 0 auto;
                    overflow: hidden;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }
                
                .slider-track {
                    display: flex;
                    transition: transform 0.5s ease;
                    height: 500px;
                }
                
                .slide {
                    min-width: 100%;
                    position: relative;
                }
                
                .slide img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .slide-caption {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: rgba(0, 0, 0, 0.6);
                    color: white;
                    padding: 1.5rem;
                }
                
                .slide-caption h3 {
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                }
                
                .slider-nav {
                    display: flex;
                    justify-content: center;
                    margin-top: 1rem;
                }
                
                .slider-dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: #cbd5e1;
                    margin: 0 5px;
                    cursor: pointer;
                    transition: background 0.3s ease;
                }
                
                .slider-dot.active {
                    background: #1e3a8a;
                }
                
                .slider-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(255, 255, 255, 0.7);
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    z-index: 10;
                    transition: all 0.3s ease;
                }
                
                .slider-btn:hover {
                    background: white;
                }
                
                .slider-btn.prev {
                    left: 20px;
                }
                
                .slider-btn.next {
                    right: 20px;
                }
                
                @media (max-width: 768px) {
                    .slider-track {
                        height: 350px;
                    }
                }
            </style>
            
            <div class="slider-container">
                <div class="slider-track">
                    <div class="slide">
                        <img src="https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2025/03/11771319685-e1742244619364.jpg?quality=70&strip=info&w=828" alt="UN Mission">
                        <div class="slide-caption">
                            <h3>Missões da ONU no mundo</h3>
                            <p>A ONU mantém operações de paz em diversas regiões do mundo para proteger civis e promover a estabilidade</p>
                        </div>
                    </div>
                    <div class="slide">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSC9UEW9UENZchVFPA6nyJ7M3TwQQeRXtCg&s" alt="Refugee Camp">
                        <div class="slide-caption">
                            <h3>Campos de refugiados</h3>
                            <p>A ONU fornece abrigo, alimentos e assistência médica para milhões de refugiados deslocados por conflitos</p>
                        </div>
                    </div>
                    <div class="slide">
                        <img src="https://brasil.un.org/sites/default/files/styles/large/public/2021-12/image1170x530cropped%20%2845%29.jpg?h=b69e0e0e&itok=NUx_XKHq" alt="Humanitarian Aid">
                        <div class="slide-caption">
                            <h3>Ações de ajuda humanitária</h3>
                            <p>Distribuição de alimentos, medicamentos e suprimentos essenciais em áreas de crise</p>
                        </div>
                    </div>
                    <div class="slide">
                        <img src="https://brasil.un.org/sites/default/files/styles/featured_content/public/2025-09/ONU_RelatorioAnual2025.png?itok=JNYExeTR" alt="Human Rights Campaign">
                        <div class="slide-caption">
                            <h3>Campanhas globais de direitos humanos</h3>
                            <p>Promovendo a educação e conscientização sobre direitos humanos fundamentais</p>
                        </div>
                    </div>
                </div>
                
                <button class="slider-btn prev">
                    <i data-feather="chevron-left"></i>
                </button>
                <button class="slider-btn next">
                    <i data-feather="chevron-right"></i>
                </button>
                
                <div class="slider-nav">
                    <div class="slider-dot active"></div>
                    <div class="slider-dot"></div>
                    <div class="slider-dot"></div>
                    <div class="slider-dot"></div>
                </div>
            </div>
        `;
        
        // Slider functionality
        const track = this.shadowRoot.querySelector('.slider-track');
        const slides = this.shadowRoot.querySelectorAll('.slide');
        const dots = this.shadowRoot.querySelectorAll('.slider-dot');
        const prevBtn = this.shadowRoot.querySelector('.prev');
        const nextBtn = this.shadowRoot.querySelector('.next');
        
        let currentIndex = 0;
        const slideCount = slides.length;
        
        const updateSlider = () => {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        };
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });
        
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            updateSlider();
        });
        
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlider();
        });
        
        // Auto slide
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlider();
        }, 5000);
        
        feather.replace();
    }
}

customElements.define('custom-slider', CustomSlider);
