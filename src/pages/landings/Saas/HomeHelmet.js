import {Helmet} from "react-helmet/es/Helmet";
const HomeHelmet = () => {
    
    return ( 
        <Helmet>
            <title>Eazyposy - Your Digital Manager</title>
            <meta name="description" content="EazyPOSy is a comprehensive restaurant management software, assisting in billing, sales, management, ordering, and much more. Streamline your operations with EazyPOSy today!" />
            <meta name="keywords" content="restaurant management, POS system, billing, sales, ordering, EazyPOSy, digital manager, streamline operations, restaurant software"></meta>
            <link rel="canonical" href="https://eazyposy.io/"></link>
            <meta name="robots" content="index, follow"></meta>
        </Helmet>
     );
}
 
export default HomeHelmet;