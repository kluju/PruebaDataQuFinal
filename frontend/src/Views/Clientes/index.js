import { useState,useEffect,Fragment } from 'react';
import { Button,  Table,Card,CardHeader,Label,Form,Input,FormGroup,CardBody,CardFooter} from 'reactstrap';
import {  getClients, saveClients, getClientById, updateClients, deleteClient } from './../../api';
import { Link } from 'react-router-dom';
export const Clientes = () => {
  const [clients, setClients] = useState([]);
  const [clientDelete, setClientDelete] = useState(null);
  const handleGetClient = async () => setClients(await getClients());
  const handleDelete = async (id) => setClients(await deleteClient(id));
  useEffect(() => {
    handleGetClient();
  },[]);
  

  return (
    <Fragment>
      <Card>
            <CardHeader>
                <h4 style={{float:"left"}}>Listado</h4>
                <Link to="/clientes/create" className="btn btn-info " style={{float:"right"}}>+ Agregar</Link>
            </CardHeader>
          <Table>
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>Rut</th>
                      <th>Nombre</th>
                      <th>Paterno</th>
                      <th clospan="2"/>
                  </tr>
              </thead>
              <tbody>
                  {clients.map((e, i) => (
                      <tr key={e.id}>
                          <td>{e.id}</td>
                          <td>{e.rut}</td>
                          <td>{e.name}</td>
                          <td>{e.paterno}</td>
                          <td>
                              <Link to={`/clientes/update/${e.id}`} ><Button className="btn btn-info  ">Edit</Button></Link>
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

export const ClientesADD = () => {
  const [name, setName] = useState();
  const [paterno, setPaterno] = useState();
  const [rut, setRut] = useState();
  const [clients, setClients] = useState([]);
  
  const [clientDelete, setClientDelete] = useState(null);
  const handleSaveClient = async (user) => setClients(await saveClients(user));
  const handlerDelete = () => {
    //const id = userDelete.id;
    //setUserDelete(null)
    //dispatch(deleteActionsAsyncCreator(id));
  }
  useEffect(() => {
    
    if(clients.status == "200"){
        alert("Guardado satisfactoriamente");
        setName("")
        setPaterno("")
        setRut("")
    }
  },[clients]);

  const saveUser = () => {
    
    const user = {
        name: name,
        paterno: paterno,
        rut: rut
    }
    handleSaveClient(user);
};

  return (
    <Fragment>
      <Card>
            <CardHeader>Agregar Cliente</CardHeader>
            <CardBody>
                <Form>
                <div class="form-group">
                  <label style={{float:"left"}} for="exampleInputEmail1">Rut</label>
                  <input onChange={(e)=>{setRut(e.target.value);}} type="text" value={rut} className="form-control" id="rut" name="rut" aria-describedby="emailHelp" placeholder="Apellido"/>
                  
                </div>
                    
                <div class="form-group">
                  <label style={{float:"left"}} for="exampleInputEmail1">Nombre</label>
                  <input onChange={(e)=>{setName(e.target.value);}} type="text" value={name} className="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Nombre"/>
                  
                </div>
                <div class="form-group">
                  <label style={{float:"left"}} for="exampleInputEmail1">Apellido</label>
                  <input onChange={(e)=>{setPaterno(e.target.value);}} type="text" value={paterno} className="form-control" id="apellido" name="apellido" aria-describedby="emailHelp" placeholder="Apellido"/>
                  
                </div>
                    
                    
                </Form>
            </CardBody>
            <CardFooter>
                <Button onClick={(saveUser)} className="btn btn-info " >Guardar</Button>
                <Link className="btn btn-danger float-right" to="/"> Volver</Link>
                
            </CardFooter>
        </Card>
    </Fragment>
  );
}

export const ClientesUPDATE = (props) => {
  
  const [name, setName] = useState();
  const [paterno, setPaterno] = useState();
  const [rut, setRut] = useState();
  const [clients, setClients] = useState([]);
  const [clientById, setClientById] = useState([]);
  const [clientDelete, setClientDelete] = useState(null);
  const handleSaveClient = async (user) => setClients(await updateClients(user));
  const handleGetClientById = async (id) => setClientById(await getClientById(id));
  const handlerDelete = () => {
    //const id = userDelete.id;
    //setUserDelete(null)
    //dispatch(deleteActionsAsyncCreator(id));
  }
  useEffect(() => {
    if(clients.status == "200"){
        alert("Guardado satisfactoriamente");
    }
    
  },[clients]);

  useEffect(() => {
    
   
    setName(clientById.name)
    setPaterno(clientById.paterno)
    setRut(clientById.rut)
  },[clientById]);



  useEffect(() => {
    handleGetClientById(props.match.params.id);
  }, [props.match.params.id]);

  const saveUser = () => {
    
    const user = {
        id:props.match.params.id,
        name: name,
        paterno: paterno,
        rut: rut
    }
    handleSaveClient(user);
};

  return (
    <Fragment>
      <Card>
            <CardHeader>Agregar Cliente</CardHeader>
            <CardBody>
                <Form>
                <div class="form-group">
                  <label style={{float:"left"}} for="exampleInputEmail1">Rut</label>
                  <input  onChange={(e)=>{setRut(e.target.value);}} type="text" value={rut} className="form-control" id="rut" name="rut" aria-describedby="emailHelp" placeholder="Apellido"/>
                  
                </div>
                    
                <div class="form-group">
                  <label style={{float:"left"}} for="exampleInputEmail1">Nombre</label>
                  <input onChange={(e)=>{setName(e.target.value);}} type="text" value={name} className="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Nombre"/>
                  
                </div>
                <div class="form-group">
                  <label style={{float:"left"}} for="exampleInputEmail1">Apellido</label>
                  <input onChange={(e)=>{setPaterno(e.target.value);}} type="text" value={paterno} className="form-control" id="apellido" name="apellido" aria-describedby="emailHelp" placeholder="Apellido"/>
                  
                </div>
                    
                    
                </Form>
            </CardBody>
            <CardFooter>
                <Button onClick={(saveUser)} className="btn btn-info " >Guardar</Button>
                <Link className="btn btn-danger float-right" to="/"> Volver</Link>
                
            </CardFooter>
        </Card>
    </Fragment>
  );
}