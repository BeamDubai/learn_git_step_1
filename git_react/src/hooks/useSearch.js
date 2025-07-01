import { useState } from "react";
import { api } from '../services/api';

export const useSearch = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const search = async (query) => {

        if (!query.trim()) {
            setSearchResults([]);
            return;
        }

        


        try {
            setLoading(true);
            setSearchResults(data.products || []);
            const data = await api.searchProduct(query);
            setSearchResults(data);
        } catch (error) {
       console.error("Search error:", error);
        } finally {
            setLoading(false);  
        }
    };

    return { searchResults, loading, searchQuery , search };
};