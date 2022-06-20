import React from "react";
import { conexionAPI } from "../api/conexionAPI";
import { Formik, Field, Form, useFormik } from "formik";
import { DefinicionesFormulario } from "../Tipos/DefinicionesFormulario";
import { useDefiniciones } from "../hooks/useDefiniciones"

const initialValues: DefinicionesFormulario = {
  definicion: "",
};

export const Definiciones = () => {

  const { definiciones, getDefinicion } = useDefiniciones();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      getDefinicion(values.definicion).then(() => {
      }).catch((err)=>{
        console.log(err);
      });
    },
  });

  function extraerDefiniciones() {
    let def = definiciones.map((definiciones) =>(
      definiciones.definicion
    ))
    console.log(def);
    return def;
  }

  return (
    <div className=''>
        <h3 style={{ textAlign: "center" }}>Definiciones</h3>
        <form
        className="col-10 col-lg-6 offset-1 offset-lg-3"
        onSubmit={formik.handleSubmit}
        >
        <div className="form-group">
          <label htmlFor="name">Ingrese Palabra</label>
          <input
            type="text"
            className="form-control"
            id="definicion"
            onChange={formik.handleChange}
            value={formik.values.definicion}
          />
          <br/>
        </div>
        
        <button type="submit" className="btn btn-primary col-12 col-lg-12">
          Buscar
        </button>  
        <div className="form-group">
        <br/>
          <label htmlFor="name">Definiciones</label>
          <textarea
            style={{height:"346px"}}
            cols={50}
            disabled
            className="form-control"
            id="definiciones"
            value={definiciones.map((definiciones) =>(
              "\n"+definiciones.definicion
            ))}
          />
          <p>&nbsp;</p>
        </div>
        </form>
    </div>
  )
}
