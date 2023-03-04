import AddIcon from '@mui/icons-material/Add';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const BtnMore = () => {
  const { togleModal } = useContext(AppContext);

  return (
    <button className='button-more' onClick={() => togleModal(null)}>
        <AddIcon/>
    </button>
  )
}

export default BtnMore