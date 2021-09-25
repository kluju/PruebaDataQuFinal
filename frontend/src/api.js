const url = `${process.env.REACT_APP_ENDPOINT}/amiibo/?name=mario`;

const urlGetClients = `${process.env.REACT_APP_ENDPOINT_LARAVEL_CLIENTES}`;
const urlGetBusiness = `${process.env.REACT_APP_ENDPOINT_LARAVEL_EMPRESAS}`;
const urlGetLeases = `${process.env.REACT_APP_ENDPOINT_LARAVEL_ARRIENDOS}`;


const getHeader = ()=>{
  let header = { };
  header["Content-Type"] = "application/json";
  //if(Cookies.get("access_token"))
      //header["Authorization"] = "Bearer "+Cookies.get("access_token");

  return header;
}

export const getExample = async () => {
  let response = await fetch(url);
  response = await response.json();
  return response.amiibo;
}

export const getClientIds = async () => {
  let response = await fetch(urlGetClients);
  response = await response.json();
  return response;
}

export const getClients = async () => {
  let response = await fetch(urlGetClients);
  response = await response.json();
  return response;
}
export const getClientById = async (id) => {
  let response = await fetch(urlGetClients+"/getClientById/"+id);
  response = await response.json();
  return response;
}

export const saveClients = async (user) => {
  let formData = new FormData();
  formData.append("name",user.name);
  formData.append("paterno",user.paterno);
  formData.append("rut",user.rut);
  var options = {
    method: 'POST',
    body: formData,
    redirect: 'follow'
  };
  let response = await fetch(urlGetClients, options );
  return response;
}

export const updateClients = async (user) => {
  let formData = new FormData();
  
  formData.append("name",user.name);
  formData.append("paterno",user.paterno);
  formData.append("rut",user.rut);
  var options = {
    method: 'POST',
    body: formData,
    redirect: 'follow'
  };
  let response = await fetch(urlGetClients+"/update/"+user.id, options );
  return response;
}
export const deleteClient = async (id) => {
  var options = {
    method: 'DELETE',
    redirect: 'follow'
  };
  
  let response = await fetch(urlGetClients+"/"+id,{headers:getHeader(),method: 'DELETE'  });
  response = await response.json();
  return response;
}

export const getBusiness = async () => {
  let response = await fetch(urlGetBusiness);
  response = await response.json();
  return response;
}
export const getBusinessById = async (id) => {
  let response = await fetch(urlGetBusiness+"/getBusinessById/"+id);
  response = await response.json();
  return response;
}

export const deleteBusiness = async (id) => {
  
  
  let response = await fetch(urlGetBusiness+"/"+id,{headers:getHeader(),method: 'DELETE'  });
  response = await response.json();
  return response;
}


export const saveBusiness = async (empresa) => {
  let formData = new FormData();
  formData.append("name",empresa.name);
  var options = {
    method: 'POST',
    body: formData,
    redirect: 'follow'
  };
  let response = await fetch(urlGetBusiness, options );
  return response;
}

export const updateBusiness = async (empresa) => {
  let formData = new FormData();
  
  formData.append("name",empresa.name);
  var options = {
    method: 'POST',
    body: formData,
    redirect: 'follow'
  };
  let response = await fetch(urlGetBusiness+"/update/"+empresa.id, options );
  return response;
}
export const getLeases = async () => {
  let response = await fetch(urlGetLeases);
  response = await response.json();
  return response;
}
export const deleteLeases = async (id) => {
  
  
  let response = await fetch(urlGetLeases+"/"+id,{headers:getHeader(),method: 'DELETE'  });
  response = await response.json();
  return response;
}

export const saveLeases = async (leases) => {
  let formData = new FormData();
  
  formData.append("id_cliente",leases.id_cliente);
  formData.append("id_empresa",leases.id_empresa);
  formData.append("costo_diario",leases.costo_diario);
  formData.append("dias",leases.dias);
  var options = {
    method: 'POST',
    body: formData,
    redirect: 'follow'
  };
  let response = await fetch(urlGetLeases, options );
  return response;
}

export const getLeasesById = async (id) => {
  let response = await fetch(urlGetLeases+"/getLeasesById/"+id);
  response = await response.json();
  return response;
}

export const updateLeases = async (leases) => {
  let formData = new FormData();
  
  formData.append("id_cliente",leases.id_cliente);
  formData.append("id_empresa",leases.id_empresa);
  formData.append("costo_diario",leases.costo_diario);
  formData.append("dias",leases.dias);
  var options = {
    method: 'POST',
    body: formData,
    redirect: 'follow'
  };
  let response = await fetch(urlGetLeases+"/update/"+leases.id, options );
  return response;
}

export const getMayorMonto = async () => {
  let response = await fetch(urlGetLeases+"/mayormonto");
  response = await response.json();
  return response;
}

export const getMenorMonto = async () => {
  let response = await fetch(urlGetLeases+"/menormonto");
  response = await response.json();
  return response;
}

export const getTotArrPorMes = async () => {
  let response = await fetch(urlGetLeases+"/pormes");
  response = await response.json();
  return response;
}

export const getClientIdsaAction = async () => {
  let response = await fetch(urlGetClients+"/getClientIds");
  response = await response.json();
  return response;
} 

export const getClientSortByLastName = async () => {
  let response = await fetch(urlGetClients+"/getClientSortByLastName");
  response = await response.json();
  return response;
}

export const getClientsSortByRentExpenses = async () => {
  let response = await fetch(urlGetClients+"/getClientsSortByRentExpenses");
  response = await response.json();
  return response;
}

export const getCompanyClientsSortByName = async () => {
  let response = await fetch(urlGetBusiness+"/getCompanyClientsSortByName");
  response = await response.json();
  return response;
}

export const getClientsSortByAmount = async (id) => {
  let response = await fetch(urlGetClients+"/getClientsSortByAmount/"+id);
  response = await response.json();
  return response;
}

export const getCompaniesSortByProfits = async () => {
  let response = await fetch(urlGetBusiness+"/getCompaniesSortByProfits");
  response = await response.json();
  return response;
}

export const getCompaniesWithRentsOver1Week = async () => {
  let response = await fetch(urlGetBusiness+"/getCompaniesWithRentsOver1Week");
  response = await response.json();
  return response;
}

export const getClientsWithLessExpense = async () => {
  let response = await fetch(urlGetBusiness+"/getClientsWithLessExpense");
  response = await response.json();
  return response;
}

export const newClientRanking = async () => {
  let response = await fetch(urlGetClients+"/newClientRanking");
  response = await response.json();
  return response;
}
export const getResumen = async () => {
  let response = await fetch(urlGetBusiness+"/resumenArriendo");
  response = await response.json();
  return response;
}



export const clients = [
  { 'id': 1, 'rut': '18620855-1', 'name': 'Angel Serrano' },
  { 'id': 2, 'rut': '11345435-2', 'name': 'Roser Abreu' },
  { 'id': 3, 'rut': '14256777-k', 'name': 'Rosa Campos' },
  { 'id': 4, 'rut': '12675688-0', 'name': 'Celestino Fuentes' },
  { 'id': 5, 'rut': '14234334-4', 'name': 'Rebeca Rojas' },
  { 'id': 6, 'rut': '10152323-8', 'name': 'Andrea Palomo' },
  { 'id': 7, 'rut': '15587715-4', 'name': 'Maria Inmaculada Jiménez' },
  { 'id': 8, 'rut': '15034590-7', 'name': 'Marcela Navarro' },
  { 'id': 9, 'rut': '11804345-3', 'name': 'Francisco Manuel Gago' },
  { 'id': 10, 'rut': '13804238-0', 'name': 'Patricio Duran' },
]

export const empresas = [
  { 'id': 1, 'name': 'CHILE ARRIENDA AUTOS S.A' },
  { 'id': 2, 'name': 'AUTOK S.A' },
  { 'id': 3, 'name': 'RENT A CAR S.A' },
]

export const arriendos = [
  { 'id_cliente': 6, 'id_empresa': 1, 'costo_diario': 15000, 'dias': 3},
  { 'id_cliente': 1, 'id_empresa': 3, 'costo_diario': 18000, 'dias': 2},
  { 'id_cliente': 5, 'id_empresa': 3, 'costo_diario': 135000, 'dias': 1},
  { 'id_cliente': 2, 'id_empresa': 2, 'costo_diario': 5600, 'dias': 4},
  { 'id_cliente': 3, 'id_empresa': 1, 'costo_diario': 23000, 'dias': 3},
  { 'id_cliente': 7, 'id_empresa': 2, 'costo_diario': 15000, 'dias': 3},
  { 'id_cliente': 8, 'id_empresa': 3, 'costo_diario': 45900, 'dias': 2},
  { 'id_cliente': 10, 'id_empresa': 3, 'costo_diario': 19000, 'dias': 5},
  { 'id_cliente': 9, 'id_empresa': 3, 'costo_diario': 51000, 'dias': 7},
  { 'id_cliente': 5, 'id_empresa': 1, 'costo_diario': 89000, 'dias': 7},
  { 'id_cliente': 1, 'id_empresa': 2, 'costo_diario': 16000, 'dias': 1},
  { 'id_cliente': 3, 'id_empresa': 3, 'costo_diario': 37500, 'dias': 1},
  { 'id_cliente': 6, 'id_empresa': 1, 'costo_diario': 19200, 'dias': 2},
  { 'id_cliente': 6, 'id_empresa': 3, 'costo_diario': 10000, 'dias': 3},
  { 'id_cliente': 6, 'id_empresa': 2, 'costo_diario': 5900, 'dias': 2},
  { 'id_cliente': 10, 'id_empresa': 1, 'costo_diario': 9000, 'dias': 5},
  { 'id_cliente': 10, 'id_empresa': 3, 'costo_diario': 13500, 'dias': 5},
  { 'id_cliente': 9, 'id_empresa': 1, 'costo_diario': 38200, 'dias': 4},
  { 'id_cliente': 7, 'id_empresa': 2, 'costo_diario': 17000, 'dias': 1},
  { 'id_cliente': 5, 'id_empresa': 3, 'costo_diario': 1000, 'dias': 10},
  { 'id_cliente': 1, 'id_empresa': 2, 'costo_diario': 6000, 'dias': 20},
  { 'id_cliente': 3, 'id_empresa': 1, 'costo_diario': 16200, 'dias': 7},
  { 'id_cliente': 2, 'id_empresa': 2, 'costo_diario': 10000, 'dias': 5}
]

