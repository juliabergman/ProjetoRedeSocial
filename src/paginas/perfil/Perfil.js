import React from 'react';
import './perfil.css';
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Amigo1 from '../../assets/images/amigos/1.png'
import Amigo2 from '../../assets/images/amigos/2.png'
import Amigo3 from '../../assets/images/amigos/3.png'
import Amigo4 from '../../assets/images/amigos/4.png'
import Amigo5 from '../../assets/images/amigos/5.png'
import Amigo6 from '../../assets/images/amigos/6.png'
import Amigo7 from '../../assets/images/amigos/7.png'
import Amigo8 from '../../assets/images/amigos/8.png'
import Amigo9 from '../../assets/images/amigos/9.png'
import Amigo10 from '../../assets/images/amigos/10.png'
import Amigo11 from '../../assets/images/amigos/11.png'
import Foto26 from '../../assets/images/Galeria/27.png';
import Capa from '../../assets/images/capa.png'


function Perfil(){

    return(

        <div>
            <Header/>
         <main>
        <div id="geralPerfil">
            <div className="capa">
            <img src={Capa} alt="capa" />
            </div>
            <div className="perfil">
            <img src={Foto26} alt="perfil" />
            </div>
            <div className="oNomeDaAna">
                <h1>Ana Ono</h1>
            </div>
           
                <div className="listaAmigos2">
                
                    {/* <h1 className="amigoslistadeamigos"> AMIGOS </h1> */}
                    <div className="imagensamigos2">

                    <img src={Amigo1} alt="amigo" />
                    <img src={Amigo2} alt="amigo" />
                    <img src={Amigo3} alt="amigo" />
                    <img src={Amigo4} alt="amigo" />
                    <img src={Amigo5} alt="amigo" />
                    <img src={Amigo6} alt="amigo" />

                    </div>
                    <div className="imagensamigos22">

                    <img src={Amigo7} alt="amigo" />
                    <img src={Amigo8} alt="amigo" />
                    <img src={Amigo9} alt="amigo" />
                    <img src={Amigo10} alt="amigo" />
                    <img src={Amigo11} alt="amigo" />
                    <img src={Amigo11} alt="amigo" />

                    </div>


                    

                </div>
                
        
            <div className="sobreMim">
                <h1>SOBRE MIM</h1>
                <p>sou uma menina bem gatinha e famosa que amo meus fas *--* eu nau sou faker ta bo???
                    postei um video aqui explicando issoh, eh so procurar. Eu sei qe sou lindah mas nao quer dizer que seja falsoh
                    . so blindadah de recalc e sou xeirosinhah rsrsrs meu coracao jah tem donoh que ja fique avisadh.
                    estou a caminhoh de ganhar um grammi *---* 
                    ...odeio haters e falsianehs, aqui eh soh depochy, e quem nao gostou eh so ralar pois beijinho no ombro que o recalc passa longe... sou mt bandidah
                    to de olho nas talaricah........ eu ti corto 0_0.............. hum............... rsr..........................
                </p>
            </div>
        
        </div>
        </main>   
        <Footer/>
        </div>
    );
}


export default Perfil;