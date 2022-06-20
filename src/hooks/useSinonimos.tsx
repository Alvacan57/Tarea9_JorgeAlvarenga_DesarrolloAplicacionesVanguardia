import { useEffect, useState } from "react";
import { conexionAPI } from "../api/conexionAPI";
import {SinonimosResponse, Sinonimo} from "../Tipos/Tipos"
import axios from "axios";

export const useSinomimos = () => {

    const [sinonimos, setSinonimos] = useState<Sinonimo[]>([]);

    const getSinonimo = async (valor:any) => {
        console.log("Texto", valor);
        try {
            const respuesta = await conexionAPI.get<SinonimosResponse>("/sinonimos/json/"+valor);
            if (respuesta.data.sinonimos.length === undefined) {
                setSinonimos([{sinonimo: "No se encontraron resultados"}]);
                return
            }
            setSinonimos(respuesta.data.sinonimos);
        } catch (error) {
        }
    }

    useEffect(() => {
        console.log("Iniciando hook");
      }, []);

      return{
        sinonimos,
        getSinonimo
      }
};