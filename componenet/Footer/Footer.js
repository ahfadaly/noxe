import React, { Fragment } from 'react';
import style from './footer.module.css';
import Link from 'next/link';
const Footer = () => {
    return (
        <Fragment>
        <div className={style.footer}>
            <div className="container text-center">
                <div className="row">

                    <div className="col-md-4">
                        <h4>LOCATION</h4>
                        <h6 className='py-3'>2215 John DanielDrive Clark, MO 65243</h6>
                    </div>

                    <div className="col-md-4">
                        <h4>AROUND THE WEB</h4>
                        <ul className='d-flex mt-4 p-0'>
                            <li><Link href='/'><a><i className="fab fa-facebook-f fa-lg"></i></a></Link></li>
                            <li><Link href='/'><a href=""><i className="fab fa-twitter fa-lg"></i></a></Link></li>
                            <li><Link href='/'><a href=""><i className="fab fa-linkedin-in fa-lg"></i></a></Link></li>
                            <li><Link href='/'><a href=""><i className="fab fa-github fa-lg"></i></a></Link></li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h4>ABOUT FREELANCER</h4>
                        <p className='py-3'>Freelance is a free to use, MIT licensed Bootstrap theme created by .</p>
                    </div>
                </div>
            </div>
        </div>

          <div className={style.copyright}>
                <div className="container text-center p-3">
                    <h5 className='mt-3'>Copyright © Your Website 2021</h5>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;