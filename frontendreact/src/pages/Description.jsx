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
            <div className='card_section ' style={{marginTop:'70px',paddingBottom:'5px'}}>
   <div class="section-title text-center ">
     <h1 class="display-5 pt-90">Services </h1>
   </div>
<div className="container2">

        <div className="card">
        
          <div className="front">
            <img src="images/bois.jpg" alt="Service 1" />
          </div>
          <div className="back">
            <p >Proposer une large gamme de <b> Bois de qualité</b>, provenant de sources durables et certifiées, adaptés à différents projets de construction et de rénovation.</p>
          </div>
        </div>
        <div className="card">
          <div className="front">
            <img src="images/p2.jpg" alt="Service 2" />
          </div>
          <div className="back">
            <p>Offrir un <b>Service de fabrication sur mesure </b>pour les clients recherchant des pièces spéciales ou des produits uniques en bois, en fonction de leurs spécifications et de leurs préférences.</p>
          </div>
        </div>
        <div className="card">
          <div className="front">
            <img src="images/service1.jpg" alt="Service 2" />
          </div>
          <div className="back">
            <p>Mettre à disposition une équipe dédiée de<b> Service clientèle</b>, disponible pour répondre aux questions des clients, résoudre les problèmes et traiter les demandes de manière rapide et efficace, afin d'assurer une expérience d'achat fluide et satisfaisante.</p>
          </div>
        </div>
        <div className="card">
          <div className="front">
            <img src="images/livraison.jpg" alt="Service 2" />
          </div>
          <div className="back">
            <p>Garantir une <b>Livraison rapide </b>et sécurisée des produits commandés, avec des options de suivi en ligne et un service après-vente efficace pour répondre aux besoins et aux préoccupations des clients.</p>
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
