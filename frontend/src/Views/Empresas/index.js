import { useState,useEffect,Fragment } from 'react';
import { Button,  Table,Card,CardHeader,Label,Form,Input,FormGroup,CardBody,CardFooter} from 'reactstrap';
import {  getBusiness, saveBusiness, getBusinessById, updateBusiness, deleteBusiness } from './../../api';
import { Link } from 'react-router-dom';
export const Empresas = () => {
  const [business, setBusiness] = useState([]);
  const handleGetBusiness = async () => setBusiness(await getBusiness());
  const handleDelete = async (id) => setBusiness(await deleteBusiness(id));
  useEffect(() => {
    handleGetBusiness();
  },[]);
  

  return (
    <Fragment>
      <Card>
            <CardHeader>
                <h4 style={{float:"left"}}>Listado</h4>
                <Link to="/empresas/create" className="btn btn-info " style={{float:"right"}}>+ Agregar</Link>
            </CardHeader>
          <Table>
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>Nombre</th>
                      <th clospan="2"/>
                  </tr>
              </thead>
              <tbody>
                  {business.map((e, i) => (
                      <tr key={e.id}>
                          <td>{e.id}</td>
                          <td>{e.name}</td>
                          <td>
                              <Link to={`/empresas/update/${e.id}`} ><Button className="btn btn-info  ">Edit</Button></Link>
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

export const EmpresasADD = () => {
  const [name, setName] = useState();
  const [business, seBusiness] = useState([]);
  const handleSaveEmpresas = async (empresa) => seBusiness(await saveBusiness(empresa));
  const handlerDelete = () => {
    //const id = userDelete.id;
    //setUserDelete(null)
    //dispatch(deleteActionsAsyncCreator(id));
  }
  useEffect(() => {
    
    if(business.status == "200"){
        alert("Guardado satisfactoriamente");
        setName("")
    }
  },[business]);

  const saveEmpresas = () => {
    
    const empresas = {
        name: name,
    }
    handleSaveEmpresas(empresas);
};

  return (
    <Fragment>
      <Card>
            <CardHeader>Agregar Empresa</CardHeader>
            <CardBody>
                <Form>
                
                    
                <div class="form-group">
                  <label style={{float:"left"}} for="exampleInputEmail1">Nombre</label>
                  <input onChange={(e)=>{setName(e.target.value);}} type="text" value={name} className="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Nombre"/>
                  
                </div>
                
                    
                    
                </Form>
            </CardBody>
            <CardFooter>
                <Button onClick={(saveEmpresas)} className="btn btn-info " >Guardar</Button>
                <Link className="btn btn-danger float-right" to="/empresas"> Volver</Link>
                
            </CardFooter>
        </Card>
    </Fragment>
  );
}

export const EmpresasUPDATE = (props) => {
  
  const [name, setName] = useState();
  const [business, setBusiness] = useState([]);
  const [businessById, setBusinessById] = useState([]);
  
  const handleSaveBusiness = async (empresa) => setBusiness(await updateBusiness(empresa));
  const handleGetBusinessById = async (id) => setBusinessById(await getBusinessById(id));
  const handlerDelete = () => {
    //const id = userDelete.id;
    //setUserDelete(null)
    //dispatch(deleteActionsAsyncCreator(id));
  }
  useEffect(() => {
    if(business.status == "200"){
        alert("Guardado satisfactoriamente");
    }
    
  },[business]);

  useEffect(() => {
    
   
    setName(businessById.name)
  },[businessById]);



  useEffect(() => {
    handleGetBusinessById(props.match.params.id);
  }, [props.match.params.id]);

  const saveEmpresa = () => {
    
    const empresa = {
        id:props.match.params.id,
        name: name
    }
    handleSaveBusiness(empresa);
};

  return (
    <Fragment>
      <Card>
            <CardHeader>Agregar Cliente</CardHeader>
            <CardBody>
                <Form>
                
                    
                <div class="form-group">
                  <label style={{float:"left"}} for="exampleInputEmail1">Nombre</label>
                  <input onChange={(e)=>{setName(e.target.value);}} type="text" value={name} className="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Nombre"/>
                  
                </div>
                
                    
                </Form>
            </CardBody>
            <CardFooter>
                <Button onClick={(saveEmpresa)} className="btn btn-info " >Guardar</Button>
                <Link className="btn btn-danger float-right" to="/empresas"> Volver</Link>
                
            </CardFooter>
        </Card>
    </Fragment>
  );
}