import './App.css';
import { useState,useEffect,Fragment } from 'react';
import { JsonToTable } from "react-json-to-table";
import 'bootstrap/dist/css/bootstrap.css';
import {  getClientIds, getClients,getBusiness,getLeases } from './api';
import React from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Clientes,ClientesADD, ClientesUPDATE}from './Views/Clientes';
import {Empresas,EmpresasADD, EmpresasUPDATE} from './Views/Empresas';
import {Arriendos,ArriendosADD, ArriendosUPDATE} from './Views/Arriendos';
import  {GetClientIds,GetClientSortByLastName,GetClientsSortByRentExpenses,GetCompanyClientsSortByName,GetClientsSortByAmount,GetCompaniesSortByProfits,GetCompaniesWithRentsOver1Week,GetClientsWithLessExpense,NewClientRanking } from './Views/Funciones';
import {Grafico}from './Views/Grafico';
const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const [clientIds, setClientIds] = useState([]);
  const [clients, setClients] = useState([]);
  const handleGetClientIds = async () => setClientIds(await getClientIds())
  const handleGetClient = async () => setClients(await getClients())
  return (<div className="App">
      <main role="main">
            <div className="container">
            <Router>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
              <h5 className="my-0 mr-md-auto font-weight-normal">Prueba DataQu</h5>
              <nav className="my-2 my-md-0 mr-md-3">
                <Link className="p-2 text-dark" to="/">Clientes</Link>
                <Link className="p-2 text-dark" to="/empresas">Empresas</Link>
                <Link className="p-2 text-dark" to="/arriendos">Arriendos</Link>
                <Link className="p-2 text-dark" to="/grafico">Grafico de arriendos</Link>
              </nav>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                  Funciones
                </DropdownToggle>
                <DropdownMenu>
                  
                  <Link className="p-2 text-dark" to="/clientes/getClientIds"><DropdownItem>ClientIds</DropdownItem></Link>
                  <Link className="p-2 text-dark" to="/clientes/getClientSortByLastName"><DropdownItem>ClientSortByLastName</DropdownItem></Link>
                  <Link className="p-2 text-dark" to="/clientes/getClientsSortByRentExpenses"><DropdownItem>ClientsSortByRentExpenses</DropdownItem></Link>
                  <Link className="p-2 text-dark" to="/empresas/getCompanyClientsSortByName"><DropdownItem>CompanyClientsSortByName</DropdownItem></Link>
                  <Link className="p-2 text-dark" to="/empresas/getClientsSortByAmount"><DropdownItem>ClientsSortByAmount</DropdownItem></Link>
                  <Link className="p-2 text-dark" to="/empresas/getCompaniesSortByProfits"><DropdownItem>CompaniesSortByProfits</DropdownItem></Link>
                  <Link className="p-2 text-dark" to="/empresas/getCompaniesWithRentsOver1Week"><DropdownItem>CompaniesWithRentsOver1Week</DropdownItem></Link>
                  <Link className="p-2 text-dark" to="/empresas/getClientsWithLessExpense"><DropdownItem>ClientsWithLessExpense</DropdownItem></Link>
                  <Link className="p-2 text-dark" to="/clientes/newClientRanking"><DropdownItem>NewClientRanking</DropdownItem></Link>
                  
                </DropdownMenu>
              </Dropdown>
            </div>
            <Switch>
            <Route exact path="/">
              <Clientes />
            </Route>
            <Route exact path="/clientes/create">
              <ClientesADD />
            </Route>
            <Route exact path="/clientes/update/:id" component={ClientesUPDATE}/>
            
            <Route exact path="/empresas">
              <Empresas />
            </Route>
            <Route exact path="/empresas/create">
              <EmpresasADD />
            </Route>
            <Route exact path="/empresas/update/:id" component={EmpresasUPDATE}/>
            <Route exact path="/arriendos">
              <Arriendos />
            </Route>
            <Route exact path="/arriendos/create">
              <ArriendosADD />
            </Route>
            <Route exact path="/arriendos/update/:id" component={ArriendosUPDATE}/>
            <Route exact path="/clientes/getClientIds" component={GetClientIds}/>
            <Route exact path="/clientes/getClientSortByLastName" component={GetClientSortByLastName}/>
            <Route exact path="/clientes/getClientsSortByRentExpenses" component={GetClientsSortByRentExpenses}/>
            <Route exact path="/empresas/getCompanyClientsSortByName" component={GetCompanyClientsSortByName}/>
            <Route exact path="/empresas/getClientsSortByAmount" component={GetClientsSortByAmount}/>
            <Route exact path="/empresas/getCompaniesSortByProfits" component={GetCompaniesSortByProfits}/>
            <Route exact path="/empresas/getCompaniesWithRentsOver1Week" component={GetCompaniesWithRentsOver1Week}/>
            <Route exact path="/empresas/getClientsWithLessExpense" component={GetClientsWithLessExpense}/>
            <Route exact path="/clientes/newClientRanking" component={NewClientRanking}/>
            <Route exact path="/grafico" component={Grafico}/>
          </Switch>
          </Router>
            </div> 
      </main>

  </div>)
  
}




export default App;
