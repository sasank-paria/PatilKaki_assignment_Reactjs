import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import   { useEffect, useState } from "react";
import Box from '@mui/material/Box';


export default function DataTable() {


  const [data, setData] = useState([])

  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Gender", field: "gender" },
    { title: "Status", field: "status" }
  ]
  
  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }, [])


var i ;
var malecount = 0 ;
var femalecount = 0 ;
var count = data.length ;

for(i=0 ;i<count ;i++){
  //console.log(data[i].gender);
var gndr = data[i].gender ;
if(gndr == "female"){
  femalecount=femalecount+1 ;
}
else if (gndr == "male"){
  malecount=malecount+1 ;
}

}




  return (
    <div style={{ height: 400, width: '100%'  }}>
      <h1>Users data</h1>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />

<Box
      sx={{
        width: 100,
        height: 100,
        ml: 10 ,
        color: 'text.primary', fontSize: 20, fontWeight: 'medium' ,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      >
      <p>number of Male:{malecount} </p>
   
    </Box>

    <Box
      sx={{
        width: 100,
        height: 100,
        ml: 10 ,
        color: 'text.primary', fontSize: 20, fontWeight: 'medium' ,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      >
      <p>number of Female:{femalecount} </p>
    </Box>

    </div>
  );
}
