import React from "react";

export default function Description() {
    return (
        <div className="about-container">
            <div className="img-container">
                <img src="images/contact.jpg" className="image-contact" alt="ArtMenuisier Contact"/>
                <div className="overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
</svg>
                    <span style={{marginLeft: '10px'}}>À propos de nous</span>
                </div>
            </div>
            <div className="container-xxl py-5 pt-50">
        <div className="container">
            <div className="row g-5">
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="d-flex align-items-center justify-content-center bg-light" style={{width: '60px', height: '60px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="35"  color='#ab7442' fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>

                        </div>
                        <h1 className="display-1 mb-0 fw-bold" style={{color:'#c3c3c3'}}>01</h1>
                    </div>
                    <h5 className='fw-bold'>Créateurs créatifs</h5>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="d-flex align-items-center justify-content-center bg-light" style={{width: '60px', height: '60px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="40"  color='#ab7442' fontWeight='bold' fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
</svg>
                        </div>
                        <h1 className="display-1  mb-0 fw-bold" style={{color:'#c3c3c3'}}>02</h1>
                    </div>
                    <h5 className='fw-bold'>Produits de qualité</h5>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="d-flex align-items-center justify-content-center bg-light" style={{width: '60px', height: '60px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30"  color='#ab7442' fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
</svg>
                        </div>
                        <h1 className="display-1 mb-0 fw-bold" style={{color:'#c3c3c3'}}>03</h1>
                    </div>
                    <h5 className='fw-bold'>Consultation gratuite</h5>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="d-flex align-items-center justify-content-center bg-light" style={{width: '60px' ,height: '60px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  color='#ab7442'  fill="currentColor">
  <path d="M19.5 4h-15C3.122 4 2 5.122 2 6.5V17c0 .55.45 1 1 1h2v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1h2c.55 0 1-.45 1-1V6.5C22 5.122 20.878 4 19.5 4zM12 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 9H7V8h2v1zm8 0h-2V8h2v1z"/>
</svg>
                        </div>
                        <h1 className="display-1  mb-0 fw-bold" style={{color:'#c3c3c3'}}>04</h1>
                    </div>
                    <h5 className='fw-bold'>Service client</h5>
                </div>
            </div>
        </div>
    </div>
    <div  id='description' className='description'>
             
            <div className='main'>
                <img src='images/desc.png' alt='' height='35%' style={{width:'47%'}}/>
                 <div className='main-container'>
                    <h2>À PROPOS DE NOUS</h2>
                    <p>Bienvenue sur Art Menuisier ,votre destination en ligne pour l'exellence artisanal et la beaute naturelle du bois .Nous sommes est une entreprise spécialisée dans la vente de bois et les services de menuiserie. Nous proposons une large gamme de produits en bois de haute qualité ainsi que des services de menuiserie sur mesure. Notre engagement envers la qualité et la satisfaction client nous distingue, tout en offrant un service client exceptionnel et des solutions personnalisées pour chaque projet</p>
                    <div class="content">
                    <ul class="liste-points">
                        <li>Menuiserie haut de gamme et sur mesure</li>
                        <li>Système de contrôle de qualité rigoureux</li>
                        <li>Garantie 100% satisfaction</li>
                        <li>Plus de 12 années d'expérience</li>
                        <li>Équipe d'artisans qualifiés et passionnés</li>
                    </ul>

                    <div class="garantie">
                        <p>Garantie 4 ans sur tous nos travaux</p>
                    </div>
            </div>
                 </div>
            </div>
            
            </div>
            
        </div>
    );
}
