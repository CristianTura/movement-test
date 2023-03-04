import React, { useContext, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import BtnMore from '../../../components/atoms/BtnMore'
import MovementModal from '../../../components/molecules/MovementModal/MovementModal'
import Navbar from '../../../components/molecules/Nav/Navbar'
import { AppContext } from '../../../context/AppContext'

const Home = () => {

  const { showModal, togleModal, getMovements, movements } = useContext(AppContext);
  
  useEffect(() => {
    getMovements();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  
  return (
    <>
      <Navbar/>
      <section className='mx-5 my-5 sm-mx-16 table-responsive'>
        <Table striped bordered hover className='text-center'>
          <thead className='bg-primary text-white'>
              <tr>
                <th>#</th>
                <th>Descripción</th>
                <th>Fecha</th>
                <th>Valor</th>
              </tr>
          </thead>
          <tbody>
            {
              movements?.map( (item, index) => (
                <tr onClick={ () => togleModal(item) } key={index}>
                  <td>{ index }</td>
                  <td>{ item.observation }</td>
                  <td>{ item.date_bill.slice(0,10) }</td>
                  <td>{ item.value }</td>
                </tr>
              ))
            }
            {
              movements.length === 0 &&
              <tr>
                <td colSpan={4}>Loading...</td>
              </tr>
            }
          </tbody>
        </Table>
      </section>
      <BtnMore/>
      {showModal &&  <MovementModal/>}
    </>
  )
}

export default Home