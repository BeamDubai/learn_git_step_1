import { useEffect , useState } from "react";
import {api} from '../services/api'

export const useProducts = () => {
    const [ products ,setProduct] = useState([]);
        const [loading ,setLoading] = useState(true);
        const [erroe ,setError] = useState(null);

        useEffect(()=>{
            const featchProducts = async () =>{
                try {
                    setLoading(true);
                    const data = await api.getProducts();
                    setProducts(data.product);
                } catch (error) {
                    setError(error.message);
                }
                finally{
                    setLoading(false);
                }
            }
            featchProducts();
        },[]);
        
        
        
        
        return { products , loading ,error};

            
    
}