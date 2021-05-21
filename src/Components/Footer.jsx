import React from 'react'


function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <div id="contacto">
            <footer className="container" style={{display: "flex", alignItems: "center",}}>
                <p>
                    5512345678 {"   "}
                    correo@prueba.com<br/><br/>
                    Copyright ⓒ {currentYear}
                </p>
            </footer>
        </div>
    );
}
export default Footer;