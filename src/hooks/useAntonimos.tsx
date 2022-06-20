import { useEffect, useState } from "react";
import { conexionAPI } from "../api/conexionAPI";
import {AntonimosResponse, Antonimo} from "../Tipos/Tipos"
import axios from "axios";

export const useAntonimos = () => {

    const [antonimos, setAntonimos] = useState<Antonimo[]>([]);

    const getAntonimo = async (valor:any) => {
        console.log("Texto", valor);
        try {
            const respuesta = await conexionAPI.get<AntonimosResponse>("/antonimos/json/"+valor);
            if (respuesta.data.antonimos.length === undefined) {
                setAntonimos([{antonimo: "No se encontraron resultados"}]);
                return
            }
            setAntonimos(respuesta.data.antonimos);
        } catch (error) {
        }
    }

    useEffect(() => {
        console.log("Iniciando hook");
      }, []);

      return{
        antonimos,
        getAntonimo
      }
};