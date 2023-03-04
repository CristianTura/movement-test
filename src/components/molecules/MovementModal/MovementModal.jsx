import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../context/AppContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import fetchData from '../../../helpers/fetchHelpers';


const movement = {
  "type": "",
  "value": 0,
  "observation": ""
}


const MovementModal = () => {

  const { user, togleModal, showModal, modalMovement, getMovements } = useContext(AppContext);


  const [newMovement, setNewMovement] = useState(movement);
  const { value, observation } = newMovement;


  const handleInputChange = ({target}) => {
    const { name, value } = target;
    if(!modalMovement) {
      setNewMovement({ ...newMovement, [name]: value });
      // console.log(newMovement)
    }
  }

  const sendSubmit = async(e) => {
    e.preventDefault();
    
    try {
      await fetchData(`users/${user.username}/bills` , newMovement, 'post');
    } catch (error) {
      console.log(error);
    }
    togleModal(null);
    getMovements()
  }

  const deleteBill = async (e) => {
    e.preventDefault();
    try {
      await fetchData(`users/${user.username}/bills/${modalMovement.id}`, {}, 'DELETE');

    } catch (error) {
      console.log(error);
    }
    togleModal(null);
    getMovements()
  }

  useEffect(() => {
    if(modalMovement){
      setNewMovement(modalMovement)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <>
      <Modal show={showModal} onHide={togleModal}>
        <div className='container-modal'>
          <h3 className='text-center'>
            {!modalMovement ? 'Registro de Movimiento' : 'Ver Movimiento'}
          </h3>
          <Form className='m-auto my-3'> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='font-500'>Descripción</Form.Label>
            <Form.Control 
              as="textarea" rows={3}
              name="observation" 
              value={observation}
              onChange={handleInputChange}
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='font-500'>Tipo de Movimiento</Form.Label>
            <div className='d-flex gap-4'>
              <Form.Check 
                type="radio"  
                onChange={handleInputChange}
                name="type" 
                label="Ingreso"
                value="1"
                className={modalMovement?.type === '1' && 'selected'}
                disabled={modalMovement && true}
              />
              <Form.Check 
                type="radio"  
                onChange={handleInputChange}
                className={modalMovement?.type === '2' && 'selected'}
                name="type" 
                label="Gasto"
                value="2"
                disabled={modalMovement && true}
              />
            </div>
            </Form.Group>
            <Form.Control 
              type="number"  
              name="value" 
              value={value}
              onChange={handleInputChange}
              className="mb-5"
            />
            <div className='d-flex gap-3 justify-content-center'>
              {
                !modalMovement
                  ? <Button type="submit" className='bg-primary border-0' onClick={sendSubmit}>
                      Registrar
                    </Button>
                  : <Button type="submit" className='bg-primary border-0' onClick={deleteBill}>
                      Eliminar
                    </Button>
              }
              <Button className='text-dark bg-gray-light border-0 btn-cancel' onClick={() => togleModal()}>
                Cancelar
              </Button>
            </div>
        </Form>
        </div>
      </Modal>
    </>
  )
}

export default MovementModal