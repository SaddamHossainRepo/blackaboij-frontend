import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './ClientSide/main';
import Home from './ClientSide/Home/Home';
import ManCollections from './ClientSide/Pages/ManCollections/ManCollections';
import Store from './ClientSide/Pages/Store/Store';
import AllProducts from './ClientSide/Pages/AllProducts/AllProducts';
import Tees from './ClientSide/Pages/Tees/Tees';
import HoodiesAndSweeters from './ClientSide/Pages/HoodiesAndSweeters/HoodiesAndSweeters';
import Pants from './ClientSide/Pages/Pants/Pants';
import Outwear from './ClientSide/Pages/Outwear/Outwear';
import Accessories from './ClientSide/Pages/Accessories/Accessories';
import Womens from './ClientSide/Pages/WomensCollections/Womens/Womens';
import WomensTees from './ClientSide/Pages/WomensCollections/WomensTees/WomensTees';
import WomenHoodies from './ClientSide/Pages/WomensCollections/WomenHoodies/WomenHoodies';
import WomenPants from './ClientSide/Pages/WomensCollections/WomenPants/WomenPants';
import WomenOutwear from './ClientSide/Pages/WomensCollections/WomenOutwear/WomenOutwear';
import Prince from './ClientSide/Pages/PrinceCollections/Prince';
import PrinceTees from './ClientSide/Pages/PrinceCollections/PrinceTees';
import PrincePants from './ClientSide/Pages/PrinceCollections/PrincePants';
import PrinceHoodies from './ClientSide/Pages/PrinceCollections/PrinceHoodies';
import PrinceOutwear from './ClientSide/Pages/PrinceCollections/PrinceOutwear';
import Princess from './ClientSide/Pages/PrincessCollection/Princess';
import PrincessTees from './ClientSide/Pages/PrincessCollection/PrincessTees';
import PrincessHoodies from './ClientSide/Pages/PrincessCollection/PrincessHoodies';
import PrincessPants from './ClientSide/Pages/PrincessCollection/PrincessPants';
import PrincessOutwear from './ClientSide/Pages/PrincessCollection/PrincessOutwear';
import { CartProvider } from './ClientSide/Utilites/CartContext';
import SingleProductMen from './ClientSide/Home/NewArivalSection/SingleProductMen';
import SingleProductWomen from './ClientSide/Home/NewArivalSection/SingleWomen';
import SingleProductPrince from './ClientSide/Home/NewArivalSection/SinglePrince';
import SingleProductAccessories from './ClientSide/Home/NewArivalSection/SingleAccessories';
import HotSaleSingleMen from './ClientSide/Home/HotSale/HotSaleSingleMen';
import HotSaleSingleWomen from './ClientSide/Home/HotSale/HotSaleSingleWomen';
import HotSaleSinglePrince from './ClientSide/Home/HotSale/HotSaleSinglePrince';
import HotSaleSinglePrincess from './ClientSide/Home/HotSale/HotSaleSinglePrincess';
import HotSaleSingleAccessories from './ClientSide/Home/HotSale/HotSaleSingleAccessories';
import SingleMenCollections from './ClientSide/Pages/ManCollections/SingleMenCollections';
import SingleWomen from './ClientSide/Pages/WomensCollections/Womens/SingleWomen';
import SinglePrince from './ClientSide/Pages/PrinceCollections/SinglePrince';
import SinglePrincess from './ClientSide/Pages/PrincessCollection/SinglePrincess';

// import AllProductSearch from './ClientSide/Pages/AllProductSearch/AllProductSearch';
// import SingleProductWomen from './ClientSide/Home/NewArivalSection/SingleWomen';
import SingleAccessories from './ClientSide/Pages/Accessories/SingleAccessories';
import SingleHoodies from './ClientSide/Pages/HoodiesAndSweeters/SingleHoodies';
import SinglePants from './ClientSide/Pages/Pants/SinglePants';
import SingleOutwear from './ClientSide/Pages/Outwear/SingleOutwear';
import SingleWomensTees from './ClientSide/Pages/WomensCollections/WomensTees/SingleWomensTees';
import SingleWomenHoodies from './ClientSide/Pages/WomensCollections/WomenHoodies/SingleWomenHoodies';
import WomenSinglePants from './ClientSide/Pages/WomensCollections/WomenPants/WomenSinglePants';
import WomenSingleOutwear from './ClientSide/Pages/WomensCollections/WomenOutwear/WomenSingleOutwear';
import SinglePrinceTees from './ClientSide/Pages/PrinceCollections/SinglePrinceTees';
import SinglePrinceHoodies from './ClientSide/Pages/PrinceCollections/SinglePrinceHoodies';
import SinglePrincePants from './ClientSide/Pages/PrinceCollections/SinglePrincePants';
import SinglePrinceOutwear from './ClientSide/Pages/PrinceCollections/SinglePrinceOutwear';
import SinglePrincessTees from './ClientSide/Pages/PrincessCollection/SinglePrincessTees';
import SinglePrincessHoodies from './ClientSide/Pages/PrincessCollection/SinglePrincessHoodies';
import SinglePrincessPants from './ClientSide/Pages/PrincessCollection/SinglePrincessPants';
import SinglePrincessOutwear from './ClientSide/Pages/PrincessCollection/SinglePrincessOutwear';
import TeesSingle from './ClientSide/Pages/Tees/TeesSingle';
import SignIn from './ClientSide/UserLoginAndRegiter/SignIn';
import SignUp from './ClientSide/UserLoginAndRegiter/SignUp';
import Checkout from './ClientSide/Pages/Payment/Checkout';
import SinglePrincessNew from './ClientSide/Home/NewArivalSection/SinglePrincessNew';
import ForgetPassword from './ClientSide/UserLoginAndRegiter/ForgetPassword';
import NewPassword from './ClientSide/UserLoginAndRegiter/NewPassword';
// import SinglePrincess from './ClientSide/Home/NewArivalSection/SinglePrincessNew';



// all route here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      // --------------- just dropeed men , women , prince , princess , accessories collections start ----------
      {
        path: "productMen/:id",
        element: <SingleProductMen></SingleProductMen>,
        loader: async ({ params }) => {
          const response = await fetch(`/MenProducts.json`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },

      {
        path: "/productWomen/:id",
        element: <SingleProductWomen></SingleProductWomen>,
        loader: async ({ params }) => {
          const response = await fetch(`./womenProducts.json`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },

      {
        path: "productPrince/:id",
        element: <SingleProductPrince></SingleProductPrince>,
        loader: async ({ params }) => {
          const response = await fetch(`/prince.json`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },
      
      {
        path: "/productPrincess/:id",
        element: <SinglePrincessNew></SinglePrincessNew>,
        loader: async ({ params }) => {
          const response = await fetch(`/princess.json`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },
      
      {
        path: "/accessories/:id",
        element: <SingleProductAccessories></SingleProductAccessories>,
        loader: async ({ params }) => {
          const response = await fetch(`./accessories.json`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },
  // --------------- just dropeed men , women , prince , princess , accessories collections end ----------
  

   // --------------- Hot sale men , women , prince , princess , accessories collections start ----------
  {
        path: "/hotSaleMen/:id",
        element: <HotSaleSingleMen></HotSaleSingleMen>,
        loader: async ({ params }) => {
          const response = await fetch(`./HotSaleMenProducts.json`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },
      {
        path: "/hotSaleWomen/:id",
        element: <HotSaleSingleWomen></HotSaleSingleWomen>,
        loader: async ({ params }) => {
          const response = await fetch(`./HotSalewomenProducts.json`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },
      {
        path: "/HotSalePrince/:id",
        element: <HotSaleSinglePrince></HotSaleSinglePrince>,
        loader: async ({ params }) => {
          const response = await fetch(`./HotSaleprince.json`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },
      {
        path: "/HotSaleprincess/:id",
        element: <HotSaleSinglePrincess></HotSaleSinglePrincess>,
        loader: async ({ params }) => {
          const response = await fetch(`./HotSaleprincess.json`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },
      {
        path: "/HotSaleaccessories/:id",
        element: <HotSaleSingleAccessories></HotSaleSingleAccessories>,
        loader: async ({ params }) => {
          const response = await fetch(`./HotSaleaccessories.json`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },
      // --------------- Hot sale men , women , prince , princess , accessories collections end ----------


      // --------------men product routes start ------------
      // men collections 
      {
        path: "/menCollections",
        element: <ManCollections></ManCollections>
      },
      {
        path: "/tees",
        element: <Tees></Tees>
      },
      {
        path: "/hoodiesAndSweeters",
        element: <HoodiesAndSweeters></HoodiesAndSweeters>
      },
      {
        path: "/pants",
        element: <Pants></Pants>
      },
      
      {
        path: "/outwear",
        element: <Outwear></Outwear>
      },
      {
        path: "/accessories",
        element: <Accessories></Accessories>
      },

      // men collentins by ID
      // men tees collection by id 
      {
        path: "menCollections/productMen/:id",
        element: <SingleMenCollections></SingleMenCollections>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products?sortBy=name&limit=6&page=0&max=500&min=0&categoryId=1`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },
      
      // men tees by id
      {
        path: "tees/productTees/:id",
        element: <TeesSingle></TeesSingle>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=1&subCategoryId=1`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },

      // men hoodies and sweaters by id 
      {
        path: "hoodiesAndSweeters/productHoodies/:id",
        element: <SingleHoodies></SingleHoodies>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=1&subCategoryId=2`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },

      // men pants collection by id 
      {
        path: "pants/productPants/:id",
        element: <SinglePants></SinglePants>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=1&subCategoryId=4`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },

      // men outwear collection by id 
      {
        path: "outwear/productoutwear/:id",
        element: <SingleOutwear></SingleOutwear>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=1&subCategoryId=6`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },
      // --------------men product routes end ------------

      // --------------women product routes start ------------
      // womens colllections 
      {
        path: "/womens",
        element: <Womens></Womens>
      },
      {
        path: "/womenTees",
        element: <WomensTees></WomensTees>
      },
      {
        path: "/womensHoodies",
        element: <WomenHoodies></WomenHoodies>
      },
      {
        path: "/womenPants",
        element: <WomenPants></WomenPants>
      },
      {
        path: "/womenOutwear",
        element: <WomenOutwear></WomenOutwear>
      },
      // women collections By ID
      {
        path: "womens/productWomen/:id",
        element: <SingleWomen></SingleWomen>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products/?sortBy=name&limit=10&page=2`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id)
          );

          return { product };
        }
      },

      // women Tees By ID
      {
        path: "womenTees/productWomenTees/:id",
        element: <SingleWomensTees></SingleWomensTees>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=2&subCategoryId=1`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },

      // women hoodies
      {
        path: "womensHoodies/productWomenHoodies/:id",
        element: <SingleWomenHoodies></SingleWomenHoodies>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=2&subCategoryId=2`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },

      // womens pants By ID
      {
        path: "womenPants/productWomenPants/:id",
        element: <WomenSinglePants></WomenSinglePants>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=2&subCategoryId=3`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },

      // women outwear By ID
      {
        path: "womenOutwear/productWomenOutwear/:id",
        element: <WomenSingleOutwear></WomenSingleOutwear>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=2&subCategoryId=4`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },
      // --------------women product routes end ------------

      // --------------prince product routes start ------------
      //prince collections routes
      {
        path: "/princeCollections",
        element: <Prince></Prince>
      },
      {
        path: "/princeTeesCollections",
        element: <PrinceTees></PrinceTees>
      },
      {
        path: "/princeHoodiesAndSweeters",
        element: <PrinceHoodies></PrinceHoodies>
      },
      {
        path: "/princePants",
        element: <PrincePants></PrincePants>

      },     
      {
        path: "/princeOutwear",
        element: <PrinceOutwear></PrinceOutwear>
      },


      //prince collections routes by ID
      {
        path: "princeCollections/productPrince/:id",
        element: <SinglePrince></SinglePrince>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=3`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },

      // prince Tees  By ID
      {
        path: "princeTeesCollections/productPrinceTees/:id",
        element: <SinglePrinceTees></SinglePrinceTees>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=3&subCategoryId=1`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },

      // prince Hoodies By ID
      {
        path: "princeHoodiesAndSweeters/productPrinceHoodies/:id",
        element: <SinglePrinceHoodies></SinglePrinceHoodies>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=3&subCategoryId=2`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },

      // prince pants By ID
      {
        path: "princePants/productPrincePants/:id",
        element: <SinglePrincePants></SinglePrincePants>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=3&subCategoryId=3`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },

      // prince Outwear By ID
      { 
        path: "princeOutwear/productPrinceOutwear/:id",
        element: <SinglePrinceOutwear></SinglePrinceOutwear>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=3&subCategoryId=4`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },
      // --------------prince product routes end ------------

      // --------------princess product routes start ------------
      // princess products routes
      {
        path: "/princessCollections",
        element: <Princess></Princess>
      },
      {
        path: "/princessTees",
        element: <PrincessTees></PrincessTees>
      },
      {
        path: "/princessHoodies",
        element: <PrincessHoodies></PrincessHoodies>
      },
      {
        path: "/princessPants",
        element: <PrincessPants></PrincessPants>
      },
      {
        path: "/princessOutwear",
        element: <PrincessOutwear></PrincessOutwear>
      },

      // princess products routes By ID
      {
        path: "princessCollections/productPrincess/:id",
        element: <SinglePrincess></SinglePrincess>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=4`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },

      // princess tees By ID
      {
        path: "princessTees/productPrincessTees/:id",
        element: <SinglePrincessTees></SinglePrincessTees>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=4&subCategoryId=1`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },

      // princess Hoodies By ID
      {
        path: "princessHoodies/productPrincessHoodies/:id",
        element: <SinglePrincessHoodies></SinglePrincessHoodies>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=4&subCategoryId=2`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },

      // princess pants By ID
      {
        path: "princessPants/productPrincessPants/:id",
        element: <SinglePrincessPants></SinglePrincessPants>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=4&subCategoryId=3`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },

      // princess outwear By ID
      {
        path: "princessOutwear/productPrincessOutwear/:id",
        element: <SinglePrincessOutwear></SinglePrincessOutwear>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=4&subCategoryId=4`);
          const data = await response.json();

          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },
      // -------------- princess product routes end ------------

      // 




      {
        path: "accessories/productaccessories/:id",
        element: <SingleAccessories></SingleAccessories>,
        loader: async ({ params }) => {
          const response = await fetch(`http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0&max=500&min=0&categoryId=1&subCategoryId=5`);
          const data = await response.json();
          // Find the specific product based on the provided id
          const product = data.find(product => product.id === parseInt(params.id));

          return { product };
        }
      },


      {
        path: "/store",
        element: <Store></Store>
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>
      },

      
      
      // ------- Sign in and SignUp route start --------     
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      // ------- Sign in and SignUp route End --------

      //========= password forget ==========
      {
        path : "forgetPassword" ,
        element : <ForgetPassword></ForgetPassword>
      } ,
      // ---------new Password ---------
      {
        path:"/newPassword",
        element : <NewPassword></NewPassword>
      },

      // ------ checkOut page ------
      {
        path: "/checkout",
        element: <Checkout></Checkout>
      }
      // {
      //   path : "/allProductSearch",
      //   element : <AllProductSearch></AllProductSearch>
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
