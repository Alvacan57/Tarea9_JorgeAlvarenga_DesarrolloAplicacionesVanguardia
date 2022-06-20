import { useEffect, useState } from "react";
import { conexionAPI } from "../api/conexionAPI";
import {DefinicionesResponse, Definicion} from "../Tipos/Tipos"
import axios from "axios";

export const useDefiniciones = () => {

    const [definiciones, setDefiniciones] = useState<Definicion[]>([]);

    const getDefinicion = async (valor:any) => {
        console.log("Texto", valor);
        try {
            const respuesta = await conexionAPI.get<DefinicionesResponse>("/definicion/json/"+valor);
            if (respuesta.data.definiciones.length === undefined) {
                setDefiniciones([{definicion: "No se encontraron resultados"}]);
                return
            }
            setDefiniciones(respuesta.data.definiciones);
        } catch (error) {
        }
    }

    useEffect(() => {
        console.log("Iniciando hook");
      }, []);

      return{
        definiciones,
        getDefinicion
      }
};