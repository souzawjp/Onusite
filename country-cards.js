class CustomCountryCards extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .countries-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 2rem;
                }
                
                .country-card {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .country-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
                }
                
                .country-flag {
                    height: 180px;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                }
                
                .country-content {
                    padding: 1.5rem;
                }
                
                .country-content h3 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 0.75rem;
                    color: #1e3a8a;
                }
                
                .country-content p {
                    color: #4b5563;
                    line-height: 1.5;
                    margin-bottom: 1rem;
                }
                
                .country-stats {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 1rem;
                    font-size: 0.875rem;
                }
                
                .stat {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .stat i {
                    color: #1e3a8a;
                }
            </style>
            
            <div class="countries-grid">
                <div class="country-card">
                    <div class="country-flag" style="background-image: url('https://flagcdn.com/w320/br.png')"></div>
                    <div class="country-content">
                        <h3>Brasil</h3>
                        <p>O Brasil tem uma política de refúgio aberta, tendo acolhido mais de 60 mil refugiados nos últimos anos. O país enfrenta desafios na integração socioeconômica.</p>
                        <div class="country-stats">
                            <div class="stat">
                                <i data-feather="users"></i>
                                <span>60K+ refugiados</span>
                            </div>
                            <div class="stat">
                                <i data-feather="award"></i>
                                <span>Lei do Refúgio</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="country-card">
                    <div class="country-flag" style="background-image: url('https://flagcdn.com/w320/de.png')"></div>
                    <div class="country-content">
                        <h3>Alemanha</h3>
                        <p>Líder na acolhida de refugiados na Europa, a Alemanha recebeu mais de 1 milhão de pessoas desde 2015. Investe em programas de integração e emprego.</p>
                        <div class="country-stats">
                            <div class="stat">
                                <i data-feather="users"></i>
                                <span>1M+ refugiados</span>
                            </div>
                            <div class="stat">
                                <i data-feather="home"></i>
                                <span>Integração</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="country-card">
                    <div class="country-flag" style="background-image: url('https://flagcdn.com/w320/us.png')"></div>
                    <div class="country-content">
                        <h3>Estados Unidos</h3>
                        <p>Maior receptor de pedidos de asilo do mundo, mas com políticas flutuantes. Tem um sistema complexo de acolhimento com desafios de eficiência e humanização.</p>
                        <div class="country-stats">
                            <div class="stat">
                                <i data-feather="users"></i>
                                <span>350K+ refugiados</span>
                            </div>
                            <div class="stat">
                                <i data-feather="alert-circle"></i>
                                <span>Desafios</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="country-card">
                    <div class="country-flag" style="background-image: url('https://flagcdn.com/w320/tr.png')"></div>
                    <div class="country-content">
                        <h3>Turquia</h3>
                        <p>Atualmente abriga o maior número de refugiados do mundo (3.7 milhões), principalmente sírios. Implementou políticas de proteção temporária e acesso a serviços.</p>
                        <div class="country-stats">
                            <div class="stat">
                                <i data-feather="users"></i>
                                <span>3.7M refugiados</span>
                            </div>
                            <div class="stat">
                                <i data-feather="shield"></i>
                                <span>Proteção</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="country-card">
                    <div class="country-flag" style="background-image: url('https://flagcdn.com/w320/ca.png')"></div>
                    <div class="country-content">
                        <h3>Canadá</h3>
                        <p>Modelo de reassentamento com programas privados de patrocínio. O país tem uma abordagem humanitária e integradora, com altas taxas de sucesso na naturalização.</p>
                        <div class="country-stats">
                            <div class="stat">
                                <i data-feather="users"></i>
                                <span>120K+ refugiados</span>
                            </div>
                            <div class="stat">
                                <i data-feather="thumbs-up"></i>
                                <span>Modelo</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="country-card">
                    <div class="country-flag" style="background-image: url('https://flagcdn.com/w320/jp.png')"></div>
                    <div class="country-content">
                        <h3>Japão</h3>
                        <p>Tem uma política de refúgio restritiva, aceitando poucos casos anualmente. Recentemente começou a discutir reformas para melhorar seu sistema de asilo.</p>
                        <div class="country-stats">
                            <div class="stat">
                                <i data-feather="users"></i>
                                <span>~1K refugiados</span>
                            </div>
                            <div class="stat">
                                <i data-feather="lock"></i>
                                <span>Restritivo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        feather.replace();
    }
}

customElements.define('custom-country-cards', CustomCountryCards);
