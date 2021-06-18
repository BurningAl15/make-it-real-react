import React, { useState,useEffect } from "react";
import axios from 'axios';

function AxiosUtils(){
    const [names,getNames]=useState([]);
    const url="http://localhost:3001/names"

    useEffect(()=>{
        getAllNames();
    },[]);

    const getAllNames=()=>{
        axios.get(`${url}`)
        .then((response)=>{
            const allNames=response.data;
            getNames(allNames);
        })
        .catch(error=>console.error(`Error: ${error}`));
    }

    return(
        <ul>
            {
                names.map(name=>
                    <li key={name}>{name}</li>
                )
            }
        </ul>
    )
};

export default AxiosUtils;