
import Image from 'next/image'
import watch from '../public/images/mobile.gif'
import tv from '../public/images/tv.gif'
import cartoon from '../public/images/cartoon.png'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    
    <div className="home">
         <div className="enjoy-tv mt-5 pt-3">
           <div className="container">
               <hr className="py-1 my-5" />
             <div className="row">
               <div className="col-md-6">
                   <Image src={tv} className="img-fluid" alt="" />
               </div>
                <div className="col-md-6 mt-5 pt-3">
                  <div className={styles.item}>
                      <h2>Enjoy on your TV.</h2>
                      <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                  </div>
                </div>
             </div>

             <hr className="py-1 my-5" />

             <div className="row">
                <div className="col-md-8 mt-5 pt-5">
                  <div className={styles.item}>
                          <h2>Download your shows to watch <br /> offline.</h2>
                          <p className='mt-2'>Save your favorites easily and always have something to <br /> watch.</p>
                      </div>
                  </div>
                <div className="col-md-4">
                    <Image src={watch} className="img-fluid" alt="" height={400} width={250} />
                </div>
             </div>
             
             <hr className="py-1 my-5" />

             <div className="row">
             <div className="col-md-6">
                    <Image src={cartoon} className="img-fluid" alt="" />
                </div>
                <div className="col-md-6 mt-5 pt-5">
                  <div className={styles.item}>
                          <h2>Create profiles for kids.</h2>
                          <p className='mt-2'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                      </div>
                  </div>
                <hr className="py-1 my-5" />
             </div>
           </div>   
        </div>
    </div>
  )
}
