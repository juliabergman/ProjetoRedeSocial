import React from 'react';
import HeaderVisitante from '../../components/headervisitante/HeaderVisitante';
import Footer from '../../components/footer/Footer'
import Foto10 from '../../assets/images/Galeria/11.png';


function Forum1(){

    return(


        <div>
             <HeaderVisitante />
             <body>
            <div id="geralforum">
            <img src={Foto10} alt="Foto da Taylor Swift em quarentena" />
            <div className="bioBrancaf"></div>
                <div className="nomeTitulo2f">
            <h1>EU SOU ANALOVER</h1>
            </div>
            <div className="membrosf">
            <p>1000000.888 membros</p>  
            </div>   




        
            <div className="forumBiof"> </div>
            
            <div className="textobiof">
            <div className="nomeTitulof">
            <h1>lady gaga</h1>
            <p> <br/>quando sai o novo cd ???????? *0*</p>
            </div>
               
               
                </div>


            <div className="tituloforumf">
                <h1>RESPOSTAS</h1>
            </div>


           {/** ITENS DO FORUM!!!!!!! */}
            <div className="caixinhadoforumf">
                




            <div className="outronome">
            <h1>mc loma</h1>
            </div>
            <div className="Pergunta1">
             <p>quer saber pq???????? quer copiar ela de novo??? -___-</p>      
            </div>
            </div>

            <div className="caixinhadoforumf2">

                <div className="outronome2">
                    <h1>jorge</h1>
                    </div>
                    <div className="Pergunta2">
                        <p>so observoh #rekalc</p>
                    </div>
               
            </div>
{/** ITENS DO FORUM!!!!!!! */}



            
                          
            </div>
            <Footer/>
            </body>

        </div>
    );
}

export default Forum1;