import React, {useEffect, useState} from  'react'
import Layout from '../components/layout/Layout';
import TransTable from '../components/table/TransTable';
import TransForm from '../components/form/TransForm';
import {fetchTrans} from "../utils/axiosHelper"
import { useNavigate } from 'react-router-dom';




 const Dashboard = () => {
  const navigate = useNavigate()
  const [trans, setTrans] = useState([]);
  useEffect(() => {
    getTrans();
    const user = JSON.parse(sessionStorage.getItem("user"));
    !user && navigate("/");
  
  }, [])

  const getTrans = async () => {
    const { trans } = await fetchTrans();
    setTrans(trans)
  
  };
  console.log(trans);
          


    
  return <Layout>



<TransForm getTrans={getTrans}/>
<TransTable trans = {trans} getTrans={getTrans}/>
   
 
  </Layout>
 
 }

export default Dashboard;
