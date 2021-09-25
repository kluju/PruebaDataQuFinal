import { useState,useEffect,Fragment } from 'react';
import { Button,  Table,Card,CardHeader,Label,Form,Input,FormGroup,CardBody,CardFooter,Row} from 'reactstrap';
import {  getLeases,getBusiness,getClients, saveLeases, getLeasesById, updateLeases, deleteLeases,getMayorMonto,getMenorMonto,getTotArrPorMes } from './../../api';
import { Link } from 'react-router-dom';
export const Arriendos = () => {
  const [leases, setLeases] = useState([]);
  const [mayor, setMayor] = useState([]);
  const [menor, setMenor] = useState([]);
  const [totArrPorMes, setTotArrPorMes] = useState([]);
  const handleGetLeases = async () => setLeases(await getLeases());
  const handleDelete = async (id) => setLeases(await deleteLeases(id));
  const mayorMonto = async () => setMayor(await getMayorMonto());
  const menorMonto = async () => setMenor(await getMenorMonto());
  const totArrPorMesFun = async () => setTotArrPorMes(await getTotArrPorMes());
  useEffect(() => {
    handleGetLeases();
    mayorMonto();
    menorMonto();
    totArrPorMesFun();
  },[]);
  

  return (
    <Fragment>

      <div className="card">
        <div className="card-body">
          <br/>
          <h4 style={{textAlign:"left"}} >
          Cliente con mayor monto en arriendo :  {mayor.length > 0  ?  mayor[0].nombre + " "+mayor[0].apellido + " "+ mayor[0].suma : null}
          </h4>  
          <br/>
          <h4 style={{textAlign:"left"}} >Cliente con menor monto en arriendo : {menor.length > 0  ? menor[0].nombre+ " "+menor[0].apellido + " "+ menor[0].suma : null}
          </h4>
          <br/>
          
          <h4 style={{textAlign:"left"}} >
          Total arriendos del mes :  {totArrPorMes.length > 0  ?  totArrPorMes[0].total : null}
          </h4> 
        </div>
      </div>
      
      <br/><br/>
      <Card>
            
            <CardHeader>
                <h4 style={{float:"left"}}>Listado</h4>
                <Link to="/arriendos/create" className="btn btn-info " style={{float:"right"}}>+ Agregar</Link>
            </CardHeader>
          <Table>
              <thead>
                    <tr>
                        <th>Id</th>
                        <th>Empresa</th>
                        <th>Cli. Nombre</th>
                        <th>Cli. Apellido</th>
                        <th>Costo Diario</th>
                        <th>Dias</th>
                        <th clospan="2"/>
                    </tr>
                </thead>
                <tbody>
                    {leases.map((e, i) => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.empresa}</td>
                            <td>{e.nombre}</td>
                            <td>{e.paterno}</td>
                            <td>{e.costo_diario}</td>
                            <td>{e.dias}</td>
                            <td>
                                
                            <Link to={`/arriendos/update/${e.id}`} ><Button className="btn btn-info  ">Edit</Button></Link>
                              <Button className="btn btn-danger " onClick={() => handleDelete(e.id)}>Borrar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
          </Table>
    </Card>
    
    </Fragment>
  );
}

export const ArriendosADD = () => {
  const [empresa, setEmpresa] = useState();
  const [cliente, setCliente] = useState();
  const [costoDiario, setCostoDiario] = useState();
  const [dias, setDias] = useState();
  const [leases, setLeases] = useState([]);
  const [clients, setClients] = useState([]);
  const [business, setBusiness] = useState([]);
  const [clientDelete, setClientDelete] = useState(null);
  const handleGetClient = async (user) => setClients(await getClients());
  const handleGetBusiness = async (user) => setBusiness(await getBusiness());

  const handleSaveLeases = async (leases) => setLeases(await saveLeases(leases));
  const handlerDelete = () => {
    //const id = userDelete.id;
    //setUserDelete(null)
    //dispatch(deleteActionsAsyncCreator(id));
  }
  useEffect(() => {
    
    if(leases.status == "200"){
        alert("Guardado satisfactoriamente");
        setEmpresa("")
        setCliente("")
        setCostoDiario("")
        setDias("")
    }
  },[leases]);

  useEffect(() => {
    handleGetClient();
    handleGetBusiness();
    
  },[]);

  const saveLeases_ = () => {
    
    const leases = {
        id_cliente: cliente,
        id_empresa: empresa,
        costo_diario: costoDiario,
        dias: dias,
    }
    
    handleSaveLeases(leases);
};

  return (
    <Fragment>
      <Card>
            <CardHeader>Agregar Arriendo</CardHeader>
            <CardBody>
                <Form>
                <div className="form-group">
                  <label style={{float:"left"}} for="exampleFormControlSelect1">Cliente</label>
                  <select onChange={(e)=>{setCliente(e.target.value);}}  className="form-control" id="cliente-a">
                    {clients.map((e, i) => (
                          <option value={e.id} key={e.id}>
                              {e.name} {e.paterno} ({e.rut})
                          </option>
                      ))}
                  </select>
                </div>
                    
                <div className="form-group">
                  <label style={{float:"left"}} for="exampleFormControlSelect1">Empresa</label>
                  <select onChange={(e)=>{setEmpresa(e.target.value);}}  className="form-control" id="empresa-a">
                    {business.map((e, i) => (
                          <option value={e.id} key={e.id}>
                              {e.name}
                          </option>
                      ))}
                  </select>
                </div>

                <div className="form-group">
                  <label style={{float:"left"}} for="exampleInputEmail1">Costo Diario</label>
                  <input onChange={(e)=>{setCostoDiario(e.target.value);}} type="text" value={costoDiario} className="form-control" id="apellido" name="apellido" aria-describedby="emailHelp" placeholder="Costo diario"/>
                  
                </div>
                <div className="form-group">
                  <label style={{float:"left"}} for="exampleInputEmail1">Dias</label>
                  <input onChange={(e)=>{setDias(e.target.value);}} type="text" value={dias} className="form-control" id="apellido" name="apellido" aria-describedby="emailHelp" placeholder="Dias"/>
                  
                </div>
                    
                    
                </Form>
            </CardBody>
            <CardFooter>
                <Button onClick={(saveLeases_)} className="btn btn-info " >Guardar</Button>
                <Link className="btn btn-danger float-right" to="/arriendos"> Volver</Link>
                
            </CardFooter>
        </Card>
    </Fragment>
  );
}

export const ArriendosUPDATE = (props) => {
  const [empresa, setEmpresa] = useState();
  const [cliente, setCliente] = useState();
  const [costoDiario, setCostoDiario] = useState();
  const [dias, setDias] = useState();
  const [leases, setLeases] = useState([]);
  const [clients, setClients] = useState([]);
  const [business, setBusiness] = useState([]);
  const [clientDelete, setClientDelete] = useState(null);
  const [leasesById, setLeasesById] = useState([]);
  const handleGetClient = async (user) => setClients(await getClients());
  const handleGetBusiness = async (user) => setBusiness(await getBusiness());
  const handleGetLeasesById = async (id) => setLeasesById(await getLeasesById(id));
  const handleSaveLeases = async (leases) => setLeases(await updateLeases(leases));
  const handlerDelete = () => {
    //const id = userDelete.id;
    //setUserDelete(null)
    //dispatch(deleteActionsAsyncCreator(id));
  }
  useEffect(() => {
    
    if(leases.status == "200"){
        alert("Guardado satisfactoriamente");
        
    }
  },[leases]);

  useEffect(() => {
    handleGetClient();
    handleGetBusiness();
    
  },[]);

  useEffect(() => {
      setEmpresa(leasesById.id_empresa)
      setCliente(leasesById.id_cliente)
      setCostoDiario(leasesById.costo_diario)
      setDias(leasesById.dias)
  },[leasesById]);

  useEffect(() => {
    
    handleGetLeasesById(props.match.params.id);
  }, [props.match.params.id]);

  const saveLeases_ = () => {
    
    const leases = {
        id:props.match.params.id,
        id_cliente: cliente,
        id_empresa: empresa,
        costo_diario: costoDiario,
        dias: dias,
    }
    
    handleSaveLeases(leases);
};

  return (
    <Fragment>
      <Card>
            <CardHeader>Agregar Arriendo</CardHeader>
            <CardBody>
                <Form>
                <div className="form-group">
                  <label style={{float:"left"}} for="exampleFormControlSelect1">Cliente</label>
                  <select onChange={(e)=>{setCliente(e.target.value);}}  value={cliente} className="form-control" id="cliente-a">
                    {clients.map((e, i) => (
                          <option value={e.id}  key={e.id}>
                              {e.name} {e.paterno} ({e.rut})
                          </option>
                      ))}
                  </select>
                </div>
                    
                <div className="form-group">
                  <label style={{float:"left"}} for="exampleFormControlSelect1">Empresa</label>
                  <select onChange={(e)=>{setEmpresa(e.target.value);}} value={empresa} className="form-control" id="empresa-a">
                    {business.map((e, i) => (
                          <option value={e.id} key={e.id}>
                              {e.name}
                          </option>
                      ))}
                  </select>
                </div>

                <div className="form-group">
                  <label style={{float:"left"}} for="exampleInputEmail1">Costo Diario</label>
                  <input onChange={(e)=>{setCostoDiario(e.target.value);}} type="text" value={costoDiario} className="form-control" id="apellido" name="apellido" aria-describedby="emailHelp" placeholder="Costo diario"/>
                  
                </div>
                <div className="form-group">
                  <label style={{float:"left"}} for="exampleInputEmail1">Dias</label>
                  <input onChange={(e)=>{setDias(e.target.value);}} type="text" value={dias} className="form-control" id="apellido" name="apellido" aria-describedby="emailHelp" placeholder="Dias"/>
                  
                </div>
                    
                    
                </Form>
            </CardBody>
            <CardFooter>
                <Button onClick={(saveLeases_)} className="btn btn-info " >Guardar</Button>
                <Link className="btn btn-danger float-right" to="/arriendos"> Volver</Link>
                
            </CardFooter>
        </Card>
    </Fragment>
  );
}

