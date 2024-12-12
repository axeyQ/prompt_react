
import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';


const Saas2 = React.lazy(() => import('../pages/landings/Saas/Saas2'))
const AdsPage = React.lazy(() => import('../pages/landings/Saas/AdsPage'))
const Privacy=React.lazy(()=>import("../pages/landings/Saas/Policy/Privacy"))
const Refund=React.lazy(()=>import("../pages/landings/Saas/Policy/Refund"))
const Terms=React.lazy(()=>import("../pages/landings/Saas/Policy/Terms"))
const Whatsapp = React.lazy(() => import('../pages/landings/Saas/Whatsapp'))
const Billing = React.lazy(() => import('../pages/landings/Saas/Billing'))
const Management = React.lazy(() => import('../pages/landings/Saas/Management'))
const Ordering = React.lazy(() => import('../pages/landings/Saas/Ordering'))
const InventoryManagement = React.lazy(() => import('../pages/landings/Saas/InventoryManagement'))
const ExpenseManagement = React.lazy(() => import('../pages/landings/Saas/ExpenseManagement'))
const StaffManagement = React.lazy(() => import('../pages/landings/Saas/StaffManagement'))
const StaffLoadManagement = React.lazy(() => import('../pages/landings/Saas/StaffLoadManagement'))
const PosManagement = React.lazy(() => import('../pages/landings/Saas/PosManagement'))
const MenuManagement = React.lazy(() => import('../pages/landings/Saas/MenuManagement'))
const OrderRecords = React.lazy(() => import('../pages/landings/Saas/OrderRecords'))
const Pricing = React.lazy(() => import('../pages/landings/Saas/Pricing'))
const BlackFriday = React.lazy(()=>import('../pages/landings/Saas/BlackFriday'))
const Blogs = React.lazy(() => import('../pages/landings/Saas/Blogs'))
const Blog1 = React.lazy(() => import('../pages/landings/Saas/Blog1'))
const Blog2 = React.lazy(() => import('../pages/landings/Saas/Blog2'))
const Blog3 = React.lazy(() => import('../pages/landings/Saas/Blog3'))
const Blog4 = React.lazy(() => import('../pages/landings/Saas/Blog4'))
const Blog5 = React.lazy(() => import('../pages/landings/Saas/Blog5'))
const Blog6 = React.lazy(() => import('../pages/landings/Saas/Blogs6'))
const Blog7 = React.lazy(() => import('../pages/landings/Saas/Blog7'))
const Blog8 = React.lazy(() => import('../pages/landings/Saas/Blog8'))
const Blog9 = React.lazy(() => import('../pages/landings/Saas/Blog9'))
const Blog10 = React.lazy(() => import('../pages/landings/Saas/Blog10'))
const Blog11 = React.lazy(() => import('../pages/landings/Saas/Blog11'))
const Blog12 = React.lazy(() => import('../pages/landings/Saas/Blog12'))



const loading = () => <div className=""></div>;

type LoadComponentProps = {
    component: React.LazyExoticComponent<() => JSX.Element>;
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => (
    <Suspense fallback={loading()}>
        <Component />
    </Suspense>
);

const AllRoutes = () => {
    return useRoutes([
        {
            // root route
            path: '/',
            element: <LoadComponent component={Saas2} />,
        },
        {
            // root route
            path: '/blackfriday',
            element: <LoadComponent component={BlackFriday} />,
        },
        {
            path: '/blogs',
            element: <LoadComponent component={Blogs} />,
        },
        {
            path: 'blogs/comprehensive-guide-to-point-of-sale-pos-systems-in-restaurants',
            element: <LoadComponent component={Blog1} />,
        },
        {
            path: 'blogs/the-impact-of-zomato-and-swiggy-on-the-indian-food-market',
            element: <LoadComponent component={Blog2} />,
        },
        {
            path: 'blogs/how-restaurants-can-get-started-with-zomato-and-swiggy-step-by-step-guide',
            element: <LoadComponent component={Blog3} />,
        },
        {
            path: 'blogs/a-deep-dive-into-how-zomato-and-swiggy-make-money',
            element: <LoadComponent component={Blog4} />,
        },
        {
            path: 'blogs/changes-in-the-way-food-is-delivered-thanks-to-zomato-and-swiggys-logistics-networks',
            element: <LoadComponent component={Blog5} />,
        },
        {
            path: 'blogs/the-challenges-and-opportunities-of-partnering-with-zomato-and-swiggy',
            element: <LoadComponent component={Blog6} />,
        },
        {
            path: 'blogs/how-zomato-and-swiggy-are-improving-the-consumer-experience-using-data',
            element: <LoadComponent component={Blog7} />,
        },
        {
            path: 'blogs/future-predictions-whats-next-for-zomato-and-swiggy-in-the-coming-years',
            element: <LoadComponent component={Blog8} />,
        },
        {
            path: 'blogs/role-of-ai-in-restaurant-business',
            element: <LoadComponent component={Blog9} />,
        },
        {
            path: 'blogs/top-tips-for-efficient-restaurant-management',
            element: <LoadComponent component={Blog10} />,
        },
        {
            path: 'blogs/how-to-use-social-media-to-promote-your-restaurant',
            element: <LoadComponent component={Blog11} />,
        },
        {
            path: 'blogs/emerging-food-trends-in-2024-every-restaurant-should-know',
            element: <LoadComponent component={Blog12} />,
        },
        {
            // root route
            path: '/ads',
            element: <LoadComponent component={AdsPage} />,
        },
        {
            path:"/pricing",
            element:<LoadComponent component={Pricing}/>
        },
        {
            path:"/privacy",
            element:<LoadComponent component={Privacy}/>
        },
        {
            path:"/refund",
            element:<LoadComponent component={Refund}/>
        },
        {
            path:"/terms",
            element:<LoadComponent component={Terms}/>
        },
        {
            path:"/sales",
            element:<LoadComponent component={Whatsapp}/>

        },
        {
            path:"/billing",
            element:<LoadComponent component={Billing}/>

        },
        {
            path:"/management",
            element:<LoadComponent component={Management}/>

        },
        {
            path:"/ordering",
            element:<LoadComponent component={Ordering}/>

        },
        {
            path:"/inventory",
            element:<LoadComponent component={InventoryManagement}/>

        },
        {
            path:"/expense",
            element:<LoadComponent component={ExpenseManagement}/>

        },
        {
            path:"/staff",
            element:<LoadComponent component={StaffManagement}/>

        },
        {
            path:"/staffload",
            element:<LoadComponent component={StaffLoadManagement}/>

        },
        {
            path:"/pos",
            element:<LoadComponent component={PosManagement}/>

        },
        {
            path:"/menu",
            element:<LoadComponent component={MenuManagement}/>

        },
        {
            path:"/orders",
            element:<LoadComponent component={OrderRecords}/>

        },
        {
            // public routes
            path: '/',
            children: [
              
               
                {
                    path: 'home',
                    element: <LoadComponent component={Saas2} />,
                },

            ],
        },
    
    ]);
};

export default AllRoutes;
