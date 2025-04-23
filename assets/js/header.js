    const header = document.querySelectorAll('.header_component')
    const headerComponent = ` <header class="header">
            <a href="./" class="logo">
                <img src="/assets/img/Logo.svg" alt="logo">
            </a>
            <nav>
                <div class="header-item">
                    <a href="#" class="header-link">Trading
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2842 8L8.5 10.6417L5.71579 8L5 8.67915L8.5 12L12 8.67915L11.2842 8Z" fill="#232323"/>
                    </svg></a>
                    <div class="header-item-dropdown">
                        <div class="header-item-dropdown-item">
                            <a href="#" class="header-item-dropdown-link">Link 1</a>
                        </div>
                        <div class="header-item-dropdown-item">
                            <a href="#" class="header-item-dropdown-link">Link 2</a>
                        </div>
                        <div class="header-item-dropdown-item">
                            <a href="#" class="header-item-dropdown-link">Link 3</a>
                        </div>
                    </div>
                </div>
                <div class="header-item">
                    <a href="#" class="header-link">Markets
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2842 8L8.5 10.6417L5.71579 8L5 8.67915L8.5 12L12 8.67915L11.2842 8Z" fill="#232323"/>
                    </svg></a>
                    <div class="header-item-dropdown">
                        <div class="header-item-dropdown-item">
                            <a href="#" class="header-item-dropdown-link">Link 1</a>
                        </div>
                        <div class="header-item-dropdown-item">
                            <a href="#" class="header-item-dropdown-link">Link 2</a>
                        </div>
                        <div class="header-item-dropdown-item">
                            <a href="#" class="header-item-dropdown-link">Link 3</a>
                        </div>
                    </div>
                </div>
                <div class="header-item">
                    <a href="#" class="header-link">Platform
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2842 8L8.5 10.6417L5.71579 8L5 8.67915L8.5 12L12 8.67915L11.2842 8Z" fill="#232323"/>
                    </svg></a>
                    <div class="header-item-dropdown">
                        <div class="header-item-dropdown-item">
                            <a href="#" class="header-item-dropdown-link">Link 1</a>
                        </div>
                        <div class="header-item-dropdown-item">
                            <a href="#" class="header-item-dropdown-link">Link 2</a>
                        </div>
                        <div class="header-item-dropdown-item">
                            <a href="#" class="header-item-dropdown-link">Link 3</a>
                        </div>
                    </div>
                </div>
                <div class="header-item">
                    <a href="#" class="header-link">Resources
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2842 8L8.5 10.6417L5.71579 8L5 8.67915L8.5 12L12 8.67915L11.2842 8Z" fill="#232323"/>
                    </svg></a>
                    <div class="header-item-dropdown">
                        <div class="header-item-dropdown-item">
                            <a href="#" class="header-item-dropdown-link">Link 1</a>
                        </div>
                        <div class="header-item-dropdown-item">
                            <a href="#" class="header-item-dropdown-link">Link 2</a>
                        </div>
                        <div class="header-item-dropdown-item">
                            <a href="#" class="header-item-dropdown-link">Link 3</a>
                        </div>
                    </div>
                </div>
                <div class="header-item">
                    <a href="#" class="header-link">Company
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2842 8L8.5 10.6417L5.71579 8L5 8.67915L8.5 12L12 8.67915L11.2842 8Z" fill="#232323"/>
                    </svg></a>
                    <div class="header-item-dropdown">
                        <div class="header-item-dropdown-item">
                            <a href="#" class="header-item-dropdown-link">Link 1</a>
                        </div>
                        <div class="header-item-dropdown-item">
                            <a href="#" class="header-item-dropdown-link">Link 2</a>
                        </div>
                        <div class="header-item-dropdown-item">
                            <a href="#" class="header-item-dropdown-link">Link 3</a>
                        </div>
                    </div>
                </div>
                <div class="header-item">
                    <a href="#" class="header-link">Partners</a>
                </div>
            </nav>
            <div class="header-btns">
                <a href="#" class="log-in">Log in</a>
                <a href="#" class="register">Register</a>
                <div class="header-language">
                    <button class="language-btn">EN
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2842 8L8.5 10.6417L5.71579 8L5 8.67915L8.5 12L12 8.67915L11.2842 8Z" fill="#232323"/>
                        </svg>
                    </button>
                    <div class="header-language-dropdown">
                        <button class="language">EN</button>
                        <button class="language">FR</button>
                    </div>
                </div>
            </div>
            <button class="burger-icon">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </button>
            <div class="burger-menu">
                <div class="burger-container">
                    <nav>
                        <div class="header-item">
                            <a href="#" class="header-link"><p>Trading</p>
                                <button class="header-item-btn">
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.2842 8L8.5 10.6417L5.71579 8L5 8.67915L8.5 12L12 8.67915L11.2842 8Z" fill="#232323"/>
                                    </svg>
                                </button>
                            </a>
                            <div class="header-item-dropdown">
                                <div class="header-item-dropdown-item">
                                    <a href="#" class="header-item-dropdown-link">Link 1</a>
                                </div>
                                <div class="header-item-dropdown-item">
                                    <a href="#" class="header-item-dropdown-link">Link 2</a>
                                </div>
                                <div class="header-item-dropdown-item">
                                    <a href="#" class="header-item-dropdown-link">Link 3</a>
                                </div>
                            </div>
                        </div>
                        <div class="header-item">
                            <a href="#" class="header-link"><p>Markets</p>
                                <button class="header-item-btn">
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.2842 8L8.5 10.6417L5.71579 8L5 8.67915L8.5 12L12 8.67915L11.2842 8Z" fill="#232323"/>
                                    </svg>
                                </button>
                            </a>
                            <div class="header-item-dropdown">
                                <div class="header-item-dropdown-item">
                                    <a href="#" class="header-item-dropdown-link">Link 1</a>
                                </div>
                                <div class="header-item-dropdown-item">
                                    <a href="#" class="header-item-dropdown-link">Link 2</a>
                                </div>
                                <div class="header-item-dropdown-item">
                                    <a href="#" class="header-item-dropdown-link">Link 3</a>
                                </div>
                            </div>
                        </div>
                        <div class="header-item">
                            <a href="#" class="header-link"><p>Platform</p>
                                <button class="header-item-btn">
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.2842 8L8.5 10.6417L5.71579 8L5 8.67915L8.5 12L12 8.67915L11.2842 8Z" fill="#232323"/>
                                    </svg>
                                </button>
                            </a>
                            <div class="header-item-dropdown">
                                <div class="header-item-dropdown-item">
                                    <a href="#" class="header-item-dropdown-link">Link 1</a>
                                </div>
                                <div class="header-item-dropdown-item">
                                    <a href="#" class="header-item-dropdown-link">Link 2</a>
                                </div>
                                <div class="header-item-dropdown-item">
                                    <a href="#" class="header-item-dropdown-link">Link 3</a>
                                </div>
                            </div>
                        </div>
                        <div class="header-item">
                            <a href="#" class="header-link"><p>Resources</p>
                                <button class="header-item-btn">
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.2842 8L8.5 10.6417L5.71579 8L5 8.67915L8.5 12L12 8.67915L11.2842 8Z" fill="#232323"/>
                                    </svg>
                                </button>
                            </a>
                            <div class="header-item-dropdown">
                                <div class="header-item-dropdown-item">
                                    <a href="#" class="header-item-dropdown-link">Link 1</a>
                                </div>
                                <div class="header-item-dropdown-item">
                                    <a href="#" class="header-item-dropdown-link">Link 2</a>
                                </div>
                                <div class="header-item-dropdown-item">
                                    <a href="#" class="header-item-dropdown-link">Link 3</a>
                                </div>
                            </div>
                        </div>
                        <div class="header-item">
                            <a href="#" class="header-link"> <p>Company</p>
                                <button class="header-item-btn">
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.2842 8L8.5 10.6417L5.71579 8L5 8.67915L8.5 12L12 8.67915L11.2842 8Z" fill="#232323"/>
                                    </svg>
                                </button>
                            </a>
                            <div class="header-item-dropdown">
                                <div class="header-item-dropdown-item">
                                    <a href="#" class="header-item-dropdown-link">Link 1</a>
                                </div>
                                <div class="header-item-dropdown-item">
                                    <a href="#" class="header-item-dropdown-link">Link 2</a>
                                </div>
                                <div class="header-item-dropdown-item">
                                    <a href="#" class="header-item-dropdown-link">Link 3</a>
                                </div>
                            </div>
                        </div>
                        <div class="header-item">
                            <a href="#" class="header-link">Partners</a>
                        </div>
                    </nav>
                    <div class="header-btns">
                        <a href="#" class="log-in">Log in</a>
                        <a href="#" class="register">Register</a>
                        <div class="header-language">
                            <button class="language-btn">EN
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.2842 8L8.5 10.6417L5.71579 8L5 8.67915L8.5 12L12 8.67915L11.2842 8Z" fill="#232323"/>
                                </svg>
                            </button>
                            <div class="header-language-dropdown">
                                <button class="language">EN</button>
                                <button class="language">FR</button>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        </header>

    `
    header.forEach( (el) => {
      return el.innerHTML = headerComponent
    }
    )

