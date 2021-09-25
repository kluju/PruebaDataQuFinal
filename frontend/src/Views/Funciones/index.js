import { useState,useEffect,Fragment } from 'react';
import { Button,  Table,Card,CardHeader,Label,Form,Input,FormGroup,CardBody,CardFooter} from 'reactstrap';
import { getBusiness, getClientIdsaAction,getClientSortByLastName,getClientsSortByRentExpenses,getCompanyClientsSortByName,getClientsSortByAmount,getCompaniesSortByProfits,getCompaniesWithRentsOver1Week,getClientsWithLessExpense,newClientRanking } from '../../api';
import { Link } from 'react-router-dom';
const preStyle = {
  display: 'block',
  padding: '10px 30px',
  margin: '0',
  overflow: 'scroll',
}
export const GetClientIds = () => {
  
  const [clientIds, setClientIds] = useState([]);
  const handleClientIds = async () => setClientIds(await getClientIdsaAction());
  
  useEffect(() => {
    handleClientIds();
  },[]);
  
  
  return (
    <Fragment>
      <Card>
          <CardHeader>
              <h4 style={{float:"left"}}>Listado</h4>
              
          </CardHeader>
          
    </Card>
    <Card>
    {( clientIds ?
          <pre style={preStyle}>
              {JSON.stringify(clientIds, null, 2) }
          </pre> : null )}
    </Card>
    </Fragment>
  );
}

export const GetClientSortByLastName = () => {
  
  const [clientSortByLastName, setClientSortByLastName] = useState([]);
  const handleClientSortByLastName = async () => setClientSortByLastName(await getClientSortByLastName());
  
  useEffect(() => {
    handleClientSortByLastName();
  },[]);
  
  const preStyle = {
    display: 'block',
    padding: '10px 30px',
    margin: '0',
    overflow: 'scroll',
  }
  return (
    <Fragment>
      <Card>
          <CardHeader>
              <h4 style={{float:"left"}}>Listado</h4>
              
          </CardHeader>
          
    </Card>
    <Card>
    {( clientSortByLastName ?
          <pre style={preStyle}>
              {JSON.stringify(clientSortByLastName, null, 2) }
          </pre> : null )}
    </Card>
    </Fragment>
  );
}


export const GetClientsSortByRentExpenses = () => {
  
  const [clientsSortByRentExpenses, setClientsSortByRentExpenses] = useState([]);
  const handleClientsSortByRentExpenses = async () => setClientsSortByRentExpenses(await getClientsSortByRentExpenses());
  
  useEffect(() => {
    handleClientsSortByRentExpenses();
  },[]);
  const preStyle = {
        display: 'block',
        padding: '10px 30px',
        margin: '0',
        overflow: 'scroll',
  }


  return (
    <Fragment>
      <Card>
          <CardHeader>
              <h4 style={{float:"left"}}>Listado</h4>
              
          </CardHeader>
          
    </Card>
    <Card>
    {( clientsSortByRentExpenses ?
          <pre style={preStyle}>
              {JSON.stringify(clientsSortByRentExpenses, null, 2) }
          </pre> : null )}
    </Card>
    </Fragment>
  );
}

export const GetCompanyClientsSortByName = () => {
  
  const [companyClientsSortByName, setCompanyClientsSortByName] = useState([]);
  const handleCompanyClientsSortByName = async () => setCompanyClientsSortByName(await getCompanyClientsSortByName());
  
  useEffect(() => {
    handleCompanyClientsSortByName();
  },[]);
  

  return (
    <Fragment>
      <Card>
          <CardHeader>
              <h4 style={{float:"left"}}>Listado</h4>
              
          </CardHeader>
          
    </Card>
    <Card>
    
    {( companyClientsSortByName ?
          <pre style={preStyle}>
              {JSON.stringify(companyClientsSortByName, null, 2) }
          </pre> : null )}
    </Card>
    </Fragment>
  );
}

export const GetClientsSortByAmount = () => {
  const [business, setBusiness] = useState([]);
  const [empresa, setEmpresa] = useState();
  const handleGetBusiness = async (user) => setBusiness(await getBusiness());
  const [clientsSortByAmount, setClientsSortByAmount] = useState([]);
  const handleClientsSortByAmount = async (empresa) => setClientsSortByAmount(await getClientsSortByAmount(1));
  const changeEmpresa = async (idEmpresa) => {
    
    setClientsSortByAmount(await getClientsSortByAmount(idEmpresa))
  };
  useEffect(() => {
    handleGetBusiness();
    
      handleClientsSortByAmount();
  },[]);
  

  return (
    <Fragment>
      <Card>
          <CardHeader>
              
              <div className="form-group">
                  <label style={{float:"left"}} for="exampleFormControlSelect1">Seleccione empresa</label>
                  <select onChange={(e)=>{changeEmpresa(e.target.value);}} value={empresa} className="form-control" id="empresa-a">
                    {business.map((e, i) => (
                          <option value={e.id} key={e.id}>
                              {e.name}
                          </option>
                      ))}
                  </select>
                </div>
          </CardHeader>
          
    </Card>
    <Card>
    {( clientsSortByAmount ?
          <pre style={preStyle}>
              {JSON.stringify(clientsSortByAmount, null, 2) }
          </pre> : null )}
    </Card>
    </Fragment>
  );
}

export const GetCompaniesSortByProfits = () => {
  
  const [companiesSortByProfits, setCompaniesSortByProfits] = useState([]);
  const handleCompaniesSortByProfits = async () => setCompaniesSortByProfits(await getCompaniesSortByProfits());
  
  useEffect(() => {
    handleCompaniesSortByProfits();
  },[]);
  const preStyle = {
        display: 'block',
        padding: '10px 30px',
        margin: '0',
        overflow: 'scroll',
  }


  return (
    <Fragment>
      <Card>
          <CardHeader>
              <h4 style={{float:"left"}}>Listado</h4>
              
          </CardHeader>
          
    </Card>
    <Card>
    {( companiesSortByProfits ?
          <pre style={preStyle}>
              {JSON.stringify(companiesSortByProfits, null, 2) }
          </pre> : null )}
    </Card>
    </Fragment>
  );
}

export const GetCompaniesWithRentsOver1Week = () => {
  
  const [companiesWithRentsOver1Week, setCompaniesWithRentsOver1Week] = useState([]);
  const handleCompaniesWithRentsOver1Week = async () => setCompaniesWithRentsOver1Week(await getCompaniesWithRentsOver1Week());
  
  useEffect(() => {
    handleCompaniesWithRentsOver1Week();
  },[]);
  const preStyle = {
        display: 'block',
        padding: '10px 30px',
        margin: '0',
        overflow: 'scroll',
  }


  return (
    <Fragment>
      <Card>
          <CardHeader>
              <h4 style={{float:"left"}}>Listado</h4>
              
          </CardHeader>
          
    </Card>
    <Card>
    {( companiesWithRentsOver1Week ?
          <pre style={preStyle}>
              {JSON.stringify(companiesWithRentsOver1Week, null, 2) }
          </pre> : null )}
    </Card>
    </Fragment>
  );
}

export const GetClientsWithLessExpense = () => {
  
  const [clientsWithLessExpense, setClientsWithLessExpense] = useState([]);
  const handleClientsWithLessExpense = async () => setClientsWithLessExpense(await getClientsWithLessExpense());
  
  useEffect(() => {
    handleClientsWithLessExpense();
  },[]);
  const preStyle = {
        display: 'block',
        padding: '10px 30px',
        margin: '0',
        overflow: 'scroll',
  }


  return (
    <Fragment>
      <Card>
          <CardHeader>
              <h4 style={{float:"left"}}>Listado</h4>
              
          </CardHeader>
          
    </Card>
    <Card>
    {( clientsWithLessExpense ?
          <pre style={preStyle}>
              {JSON.stringify(clientsWithLessExpense, null, 2) }
          </pre> : null )}
    </Card>
    </Fragment>
  );
}

export const NewClientRanking = () => {
  
  const [newClientRankingD, setNewClientRanking] = useState([]);
  const handleNewClientRanking = async () => setNewClientRanking(await newClientRanking());
  
  useEffect(() => {
    handleNewClientRanking();
  },[]);
  const preStyle = {
        display: 'block',
        padding: '10px 30px',
        margin: '0',
        overflow: 'scroll',
  }


  return (
    <Fragment>
      <Card>
          <CardHeader>
              <h4 style={{float:"left"}}>Listado</h4>
              
          </CardHeader>
          
    </Card>
    <Card>
    {( newClientRankingD ?
          <pre style={preStyle}>
              {JSON.stringify(newClientRankingD, null, 2) }
          </pre> : null )}
    </Card>
    </Fragment>
  );
}


