import React from 'react';

import HeaderVisitante from '../../components/headervisitante/HeaderVisitante';
import Taylor from '../../assets/images/taylor.jpg';
import Footer from '../../components/footer/Footer'
import {Link} from 'react-router-dom';


function Forum1(){

    return(


        <div>
             <HeaderVisitante />
             <body>
            <div id="geralforum">
            <img src={Taylor} alt="Foto da Taylor Swift em quarentena" />
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
            <h1>carlos]·._.·´¯)¨˜°ºð</h1>
            <p> <br/>o pai ta ooonnn chamaaaa</p>
            </div>
               
               
                </div>

            <div className="tituloforumf">
                <h1>RESPOSTAS</h1>
            </div>


           {/** ITENS DO FORUM!!!!!!! */}
            <div className="caixinhadoforumf">
                




            <div className="outronome">
            <h1>morenah</h1>
            </div>
            <div className="Pergunta1">
             <p>-___-- affss </p>      
            </div>
            </div>

            <div className="caixinhadoforumf2">

                <div className="outronome2">
                    <h1>loirinha</h1>
                    </div>
                    <div className="Pergunta2">
                        <p>ta maluco caralho??? vc eh meu namo</p>
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