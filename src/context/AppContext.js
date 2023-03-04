import React, { createContext, useState } from "react";
import fetchData from "../helpers/fetchHelpers";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    
    const [user, setUser] = useState({});

    const [routeName, setRouteName] = useState('/');

    const [modalMovement, setModalMovement] = useState()

  const [movements, setMovements] = useState([]);


    const [showModal, setShowModal] = useState(false);
    const togleModal = (movement) => {
        movement ? setModalMovement(movement) : setModalMovement(null) 
        setShowModal(!showModal)
    };

    const getMovements = async () => {
        const dataBills = await fetchData(`users/${user.username}/bills`);
        setMovements(dataBills.data);
    } 

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                routeName,
                setRouteName,
                togleModal,
                showModal,
                modalMovement,
                movements,
                getMovements
            }}
        >
            {children}
        </AppContext.Provider>
    );
};