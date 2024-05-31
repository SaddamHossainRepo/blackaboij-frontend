
// import { IoIosSearch } from "react-icons/io";
// import { Link } from "react-router-dom";

// const SearchButton = () => {
//     return (
//         <div className="relative ">

//             <input type="text" id="search" placeholder="Search Here" autoComplete="off" className="w-[250px] py-1 rounded-sm p-4 bg-transparent border border-[#383838] text-white focus:outline-none " />
//             <Link to="/allProductSearch"><button className="absolute  top-[10px] text-white ml-[-25px] "><IoIosSearch></IoIosSearch></button></Link>
//         </div>

//     );
// };

// export default SearchButton;

import { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';

const SearchButton = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [products, setProducts] = useState([]);
    //   const history = useHistory();

    const AllProductSearch = "./AllProductSearch.json";

    useEffect(() => {
        // Fetch the JSON data
        fetch(AllProductSearch)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [AllProductSearch]);

    const handleSearch = () => {
        const results = products.filter(item =>
            item.productName.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSearchResults(results);
        console.log(searchResults);

    };

    return (
        <div className="relative">
            <input
                type="text"
                id="search"
                placeholder="Search Here"
                autoComplete="off"
                className="w-[250px] py-1 p-4 bg-transparent border border-[#383838] rounded-[20px] text-white focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link to="/allProductSearch"> <button
                className="absolute top-[10px] text-white ml-[-25px]"
                onClick={handleSearch}

            >
                <IoIosSearch />
            </button></Link>
        </div>
    );
};

export default SearchButton;
