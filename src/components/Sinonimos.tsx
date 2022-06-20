import React from "react";
import { conexionAPI } from "../api/conexionAPI";
import { Formik, Field, Form, useFormik } from "formik";
import { SinonimosFormulario } from "../Tipos/SinonimosFormulario";
import { useSinomimos } from "../hooks/useSinonimos"

const initialValues: SinonimosFormulario = {
  sinonimo: "",
};

export const Sinonimos = () => {

  const { sinonimos, getSinonimo } = useSinomimos();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      getSinonimo(values.sinonimo).then(() => {
      }).catch((err)=>{
        console.log(err);
      });
    },
  });

  function extraerSinonimos() {
    let sin = sinonimos.map((sinonimos) =>(
      sinonimos.sinonimo
    ))
    console.log(sin);
    return sin;
  }

  return (
    <div className=''>
        <h3 style={{ textAlign: "center" }}>Sinonimos</h3>
        <form
        className="col-10 col-lg-6 offset-1 offset-lg-3"
        onSubmit={formik.handleSubmit}
        >
        <div className="form-group">
          <label htmlFor="name">Ingrese Palabra</label>
          <input
            type="text"
            className="form-control"
            id="sinonimo"
            onChange={formik.handleChange}
            value={formik.values.sinonimo}
          />
          <br/>
        </div>
        
        <button type="submit" className="btn btn-primary col-12 col-lg-12">
          Buscar
        </button>  
        <div className="form-group">
        <br/>
          <label htmlFor="name">Sinonimos</label>
          <textarea
            style={{height:"346px"}}
            cols={50}
            disabled
            className="form-control"
            id="sinonimos"
            value={sinonimos.map((sinonimos) =>(
              "\n"+sinonimos.sinonimo
            ))}
          />
          <p>&nbsp;</p>
        </div>
        </form>
    </div>
  )
}