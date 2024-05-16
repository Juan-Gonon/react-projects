import React from "react";
import img from "../assets/paypal_logo.png";
import "../styles/style.scss";

export const Modal = ({ openModal, showModal }) => {
    if (!openModal) return;

    return (
  
            <section className="contenedor" onClick={showModal}>
                <article className="sub-contenedor" onClick={(e)=> e.stopPropagation()}>
                    <div className="contenido">
                        <div className="icon">
                            <img src={img} alt="paypal" width={48} />
                        </div>
                        <div className="mensaje">
                            <div className="title">
                                <h3>Pago realizado con éxito</h3>
                                <div className="text">
                                    Gracias por su preferencia
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <button className="btn-descargar">Descargar</button>
                        <button className="btn-volver" onClick={showModal} >Volver</button>
                    </div>
                </article>
            </section>

    );
};
