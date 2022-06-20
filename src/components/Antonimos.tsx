import React from "react";
import { conexionAPI } from "../api/conexionAPI";
import { Formik, Field, Form, useFormik } from "formik";
import { AntonimosFormulario } from "../Tipos/AntonimosFormulario";
import { useAntonimos } from "../hooks/useAntonimos"

const initialValues: AntonimosFormulario = {
  antonimo: "",
};

export const Antonimos = () => {

  const { antonimos, getAntonimo } = useAntonimos();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      getAntonimo(values.antonimo).then(() => {
      }).catch((err)=>{
        console.log(err);
      });
    },
  });

  function extraerAntonimos() {
    let ant = antonimos.map((antonimos) =>(
      antonimos.antonimo
    ))
    console.log(ant);
    return ant;
  }

  return (
    <div className=''>
        <h3 style={{ textAlign: "center" }}>Antonimos</h3>
        <form
        className="col-10 col-lg-6 offset-1 offset-lg-3"
        onSubmit={formik.handleSubmit}
        >
        <div className="form-group">
          <label htmlFor="name">Ingrese Palabra</label>
          <input
            type="text"
            className="form-control"
            id="antonimo"
            onChange={formik.handleChange}
            value={formik.values.antonimo}
          />
          <br/>
        </div>
        
        <button type="submit" className="btn btn-primary col-12 col-lg-12">
          Buscar
        </button>  
        <div className="form-group">
        <br/>
          <label htmlFor="name">Antonimos</label>
          <textarea
            style={{height:"346px"}}
            cols={50}
            disabled
            className="form-control"
            id="antonimos"
            value={antonimos.map((antonimos) =>(
              "\n"+antonimos.antonimo
            ))}
          />
          <p>&nbsp;</p>
        </div>
        </form>
    </div>
  )
}