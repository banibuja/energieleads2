import React from 'react'

function Header() {
  return (
    <header className="header">
    <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-2">
            <div className="logo" onClick={() => scrollToSection(homeRef)}>
                <Link href="#home">
                    <img src="images/6wm2hJw0JcUgHfEryGifeXzTQ.avif" alt="Logo" className="img-fluid" />
                </Link>
            </div>
            <nav className={`navv ${isMenuOpen ? 'open' : ''}`}>
                <ul className="nav-list list-unstyled mb-0">
                    <li className="nav-item px-2" onClick={() => scrollToSection(productRef)}>
                        {texts.header.product}
                    </li>
                    <li className="nav-item px-2" onClick={() => scrollToSection(featuresRef)}>
                        {texts.header.features}
                    </li>
                    <li className="nav-item px-2" onClick={() => scrollToSection(preiseRef)}>
                        {texts.header.price}
                    </li>
                    <li id="buttonheader" className="nav-item px-2" onClick={() => scrollToSection(formaRef)}>
                        {texts.header.request}
                    </li>
                </ul>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>

    </div>
</header>
  )
}

export default Header
