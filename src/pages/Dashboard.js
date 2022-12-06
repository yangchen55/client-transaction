import React, {useEffect, useState} from  'react'
import Layout from '../components/layout/Layout';
import TransTable from '../components/table/TransTable';
import TransForm from '../components/form/TransForm';
import {fetchTrans} from "../utils/axiosHelper"




 const Dashboard = () => {
  const [trans, setTrans] =useState([]);
  useEffect(() => {
    getTrans();
  
  }, [])

  const getTrans = async () => {
    const { trans } = await fetchTrans();
    setTrans(trans)
  
  };
  console.log(trans);
          


    
  return <Layout>



<TransForm/>
<TransTable trans = {trans}/>
   
 
  </Layout>
 
 }

export default Dashboard;
