import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout';
import TransTable from '../components/table/TransTable';
import TransForm from '../components/form/TransForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTransAction } from "../redux/transaction/TransAction"





const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { trans } = useSelector((state) => state.trans)
  const { isLoggedIn } = useSelector((state) => state.user)

  useEffect(() => {
    isLoggedIn && navigate("/dashboard");
    dispatch(getTransAction())
  }, [isLoggedIn, navigate, dispatch])






  return <Layout>



    <TransForm />
    <TransTable trans={trans} />


  </Layout>

}

export default Dashboard;
