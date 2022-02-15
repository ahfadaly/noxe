import React from 'react';
import style from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className={style.navbar}>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                  <Link href="/">
                      <a className="navbar-brand logo text-white fw-bolder fs-3">Noxe</a>
                  </Link> 
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#noxeNav" aria-controls="noxeNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><i className="fas fa-align-left text-white fa-lg"></i></span>
                        </button>
                         <div className="collapse navbar-collapse" id="noxeNav">
                            <div className={style.nav_list}>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <Link href="Login">
                                            <a className="nav-link"href="#">login</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link href="/Register">
                                            <a className="nav-link" href="#">register</a>
                                        </Link>
                                    </li>
                                </ul>
                             </div>
                          </div>
                    </nav>
                </div>
        </div>
    );
};

export default Navbar;