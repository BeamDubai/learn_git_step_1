import {useNavigate} from 'react-router-dom'
import ProductList from '../component/ProductList'

const HomePage = ()=>{
    const navigate = useNavigate();
    const handleViewDetail = (productID)=>{
        navigate('/product/${productID}');
    }

    return (
        <div className='home-page'>
            <ProductList onViewDetail={handleViewDetail}/>
        </div>
    )
}
export default HomePage;