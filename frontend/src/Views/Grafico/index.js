import { useState,useEffect,Fragment } from 'react';
import ReactDOM from 'react-dom'
import { Button,  Table,Card,CardHeader} from 'reactstrap';
import {  getResumen } from './../../api';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';

export const Grafico = () => {
  const [data, setData] = useState({});
  const [grafico, setGrafico] = useState([]);
  const [clientDelete, setClientDelete] = useState(null);
  const handleGetGrafico = async () => setGrafico(await getResumen());
  const coloresBasicos =["red","green","yellow","blue","orange"];
  useEffect(() => {
    handleGetGrafico();
  },[]);

  useEffect(() => {
    if(Object.keys(grafico).length > 0){
      let labels = [];
      for(var i in grafico){
        if(Object.keys(grafico[i].clientes).length > labels.length){
          labels = [];
          for(var x in grafico[i].clientes){
            labels.push(grafico[i].clientes[x].nombre)
          }
        } 
      }
      let datasetsAux = [];
      let index = 0;
      for(var i in grafico){
        
        let objGraf = {
          label: grafico[i].nombre,
          data: [],
          backgroundColor: coloresBasicos[index]  ? coloresBasicos[index] :  colorHEX(),
        } 
        for(var x in grafico[i].clientes){
          objGraf.data.push(grafico[i].clientes[x].total_arriendos);
        }
        index++;
        datasetsAux.push(objGraf);
      }
      
      let data = {labels:labels,datasets:datasetsAux};
      setData(data);
      
    };
    
  },[grafico]);
  
  const colorHEX = () => {
    var coolor = "";
    for(var i=0;i<6;i++){
      coolor = coolor + generarLetra() ;
    }
    return "#" + coolor;
  }

  const generarLetra = () => {
    var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    var numero = (Math.random()*15).toFixed(0);
    return letras[numero];
  }
  return (
    <Fragment>
      <div className="card">
        
        <div className="card-body">
          <h5 className="card-title">Grafico de arriendos</h5>
          <Bar data={data} />
          
        </div>
      </div>
    </Fragment>
  );
}