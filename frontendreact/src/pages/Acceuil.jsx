import React ,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

 const style={
    "font-family": "Georgia, 'Times New Roman', Times, serif",
    "color":"green",
    "paddinTop":"30px"
 }
export default function Acceuil() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/comments')
            .then(response => {
                setComments(response.data);
            })
            .catch(error => {
                console.error('Error fetching comments:', error);
            });
    }, []);

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            axios.post('http://localhost:8000/api/comments', { content: newComment })
                .then(response => {
                    setComments([...comments, response.data]);
                    setNewComment('');
                })
                .catch(error => {
                    console.error('Error adding comment:', error);
                });
        }
    };

   
  return (
        <div>
           <div className='hero'>
             <div className="hero-left">
              <div className='slider'>

              </div>
                  <div className="main-text">
                          <p className='parent'>Achetez le bois ou des modèles prêts en bois ,selon ce que vous voulez!</p>
                          <div className='tout'>
                                  <div className='bois'>
                                      <p className='child'>Vous cherchez du bois au meilleur prix?</p>
                                      <h2>ACHETEZ LE BOIS </h2>
                                      <h3>À PRIX CASSÉ  </h3>
                                      <h4>GRAND CHOIX DE LOTS DE BOIS </h4>
                                      <button><Link to="/AcheterBois">J'ACHETE LE BOIS</Link> </button>
                                  </div>
                                  <div className='product_bois'>
                                  <p className='child'>Vous cherchez du modèle en bois au meilleur prix?</p>
                                      <h2>ACHETEZ PRODUITS EN BOIS </h2>
                                      <h3>À PRIX CASSÉ  </h3>
                                      <h4>GRAND CHOIX DE LOTS DE MODELES </h4>
                                      <button ><Link to="/AcheterProduit">J'ACHETE LES MODELES</Link> </button>
                                </div>
                          </div>
                  </div>
              </div>
            </div>
         

           

   

            



         <div  id='description' className='description' style={{paddingBottom:'100px'}}>
             
            <div className='main'>
                <img src='images/desc.png' alt=''/>
                 <div className='main-container'>
                    <h2>À PROPOS DE NOUS</h2>
                    <p>Bienvenue sur Art Menuisier ,votre destination en ligne pour l'exellence artisanal et la beaute naturelle du bois .Nous sommes est une entreprise spécialisée dans la vente de bois et les services de menuiserie. Nous proposons une large gamme de produits en bois de haute qualité ainsi que des services de menuiserie sur mesure. Notre engagement envers la qualité et la satisfaction client nous distingue, tout en offrant un service client exceptionnel et des solutions personnalisées pour chaque projet <Link to='Description'>...Plus</Link></p>
                 </div>
            </div>
          


            <div className='card_section ' style={{marginTop:'70px',paddingBottom:'40px'}}>
                <div class="section-title text-center ">
                  <h1 class="display-5 pt-70">Services </h1>
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












            <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0 " style={{marginTop:'200px'}}>
        <div class="container feature px-lg-0">
            <div class="row g-0 mx-lg-0">
                <div class="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div class="p-lg-5 ps-lg-0">
                        <div className='title-container' style={{marginBottom:'60px'}}>
                            <h1 class="display-5 mb-3 " style={{fontWeight:'bold'}}>Pourquoi Nous Choisir</h1>
                        </div>
                        <p class="mb-4 pb-2">Les clients choisissent notre site web de vente de bois pour notre sélection de produits de haute qualité, nos prix compétitifs et notre service client exceptionnel. Nous offrons également une livraison rapide et fiable ainsi que des pratiques écoresponsables, garantissant ainsi une expérience d'achat satisfaisante et durable.</p>
                        <div class="row g-4">
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{width: '60px',height: '60px'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="40"  color='#ab7442' fontWeight='bold' fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
</svg>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-2">Produits de </p>
                                        <h5 class="mb-0">Qualité</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{width: '60px',height: '60px'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="35"  color='#ab7442' fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-2">Créateurs </p>
                                        <h5 class="mb-0"> créatifs</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{width: '60px', height: '60px'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30"  color='#ab7442' fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
</svg>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-2">Consultation </p>
                                        <h5 class="mb-0">gratuite</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{width: '60px', height: '60px'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" color='#ab7442' fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
</svg>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-2">Service </p>
                                        <h5 class="mb-0">Client</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 pe-lg-0">
                    <div class="position-relative h-100">
                        <img class="position-absolute img-fluid w-90 h-90" style={{borderRadius:'8px'}} src="images/feature.jpg" />
                    </div>
                </div>
            </div>
        </div>
    </div>









            <div class="container-xxl py-5 m-90 " style={{marginTop:'100px'}}>
        <div class="container pt-100">
            <div class="section-title text-center">

              

                <h1 class="display-5 mb-4" style={{color:'#ab7442', fontFamily:"Georgia, 'Times New Roman', Times, serif",paddingBottom:'5px'}}> Projets</h1>

            </div>
            
            <div class="row g-4 portfolio-container">
                <div class="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                    <div class="rounded overflow-hidden">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid w-100" src="images/portfolio-1.jpg" alt=""/>
                            <div class="portfolio-overlay">
                            <a class="btn btn-square btn-outline-light mx-1" href="images/portfolio-1.jpg" data-lightbox="portfolio"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                 </svg></a>
                                
                            </div>
                        </div>
                        <div class="border border-5 border-light border-top-0 p-4">
                            <p class="  fw-bold mb-2" style={{color:'#ab7442', fontSize:'19px'}}>Miroir en bois</p>
                            <h5 class="lh-base mb-0" style={{color:'gray', fontSize:'17px'}}>Optez pour un miroir design au style nature ! Notre miroir rond "Roy" est original et très atypique. En effet, il présente un cadre en bois flotté, qui agrémente sa modernité.</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
                    <div class="rounded overflow-hidden">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid w-100" src="images/portfolio-2.jpg" alt=""/>
                            <div class="portfolio-overlay">
                            <a class="btn btn-square btn-outline-light mx-1" href="images/portfolio-2.jpg" data-lightbox="portfolio"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                 </svg></a>
                           
                            </div>
                        </div>
                        <div class="border border-5 border-light border-top-0 p-4">
                            <p class=" fw-bold mb-2" style={{color:'#ab7442', fontSize:'19px'}}>Les lampes suspendues</p>
                            <h5 class="lh-base mb-0" style={{color:'gray', fontSize:'17px'}}>Les lampes suspendues en bois sont des luminaires élégants et chaleureux qui ajoutent une touche naturelle et sophistiquée à tout intérieur, diffusent une lumière douce et agréable</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
                    <div class="rounded overflow-hidden">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid w-100" src="images/portfolio-3.jpg" alt=""/>
                            <div class="portfolio-overlay">
                            <a class="btn btn-square btn-outline-light mx-1" href="images/portfolio-3.jpg" data-lightbox="portfolio"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                 </svg></a>
                                
                            </div>
                        </div>
                        <div class="border border-5 border-light border-top-0 p-4">
                            <p class="  fw-bold mb-2" style={{color:'#ab7442', fontSize:'19px'}}>étagère en bois</p>
                            <h5 class="lh-base mb-0" style={{color:'gray', fontSize:'17px'}}>Une étagère en bois incarne l'alliance parfaite entre fonctionnalité et esthétique naturelle.  elle offre non seulement un espace de rangement pratique.</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
                    <div class="rounded overflow-hidden">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid w-100" src="images/portfolio-4.jpg" alt=""/>
                            <div class="portfolio-overlay">
                            <a class="btn btn-square btn-outline-light mx-1" href="images/portfolio-4.jpg" data-lightbox="portfolio"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                 </svg></a>
                               
                            </div>
                        </div>
                        <div class="border border-5 border-light border-top-0 p-4">
                            <p class="  fw-bold mb-2" style={{color:'#ab7442', fontSize:'19px'}}>Lavabo</p>
                            <h5 class="lh-base mb-0" style={{color:'gray', fontSize:'17px'}}>Un lavabo en bois est une pièce unique et élégante,Ce type de lavabo combine la chaleur et la beauté naturelle du bois avec une fonctionnalité moderne.</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.3s">
                    <div class="rounded overflow-hidden">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid w-100" src="images/portfolio-5.jpg" alt=""/>
                            <div class="portfolio-overlay">
                                <a class="btn btn-square btn-outline-light mx-1" href="images/portfolio-5.jpg" data-lightbox="portfolio"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                 </svg></a>
                                
                                
                            </div>
                        </div>
                        <div class="border border-5 border-light border-top-0 p-4">
                            <p class="  fw-bold mb-2" style={{color:'#ab7442', fontSize:'19px'}}>Une lampe tronc d'arbre</p>
                            <h5 class="lh-base mb-0 " style={{color:'gray', fontSize:'17px'}}>Une lampe tronc d'arbre est une fusion remarquable de la nature et de l'artisanat, et authentique à n'importe quel espace.</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                    <div class="rounded overflow-hidden">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid w-100" src="images/portfolio-6.jpg" alt=""/>
                            <div class="portfolio-overlay">
                            <a class="btn btn-square btn-outline-light mx-1" href="images/portfolio-6.jpg" data-lightbox="portfolio"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                 </svg></a>
                            </div>
                        </div>
                        <div class="border border-5 border-light border-top-0 p-4">
                           <p class=" fw-bold mb-2" style={{color:'#ab7442', fontSize:'19px'}}>Table en bois</p>
                            <h5 class="lh-base mb-0" style={{color:'gray', fontSize:'17px'}}>Une table en bois est un meuble classique et polyvalent, apprécié pour sa durabilité et son esthétique naturelle. </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  
{/* section de commentaire: */}
<div className='comments-section m-5'>
    <h2 style={{color:'#ab7442',fontFamily:"'Times New Roman', Times, serif", marginBottom:'15px'}} >__Commentaires__</h2>
    <ul className="list-group">
        {comments.map(comment => (
            <li className="list-group-item" key={comment.id}>
                <strong>{comment.author}:</strong> {comment.content}
            </li>
        ))}
    </ul>
    <div className='add-comment mt-3'>
        <textarea
            className="form-control"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Ajouter un commentaire"
        ></textarea>
        <button className="btn btn-primary mt-2" onClick={handleAddComment}>Ajouter</button>
    </div>
</div>
    
         </div>
        
        </div>
      );
    }