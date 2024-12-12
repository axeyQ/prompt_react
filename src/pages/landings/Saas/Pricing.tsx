import PCard from './PCard';
import { Footer1 } from 'components/footer';
import Navbar4 from 'components/navbars/Navbar4';
import Step from './Step';
import Screenshots from './Screenshots';
import CallToAction from './CallToAction';
import "./BlackFriday.css"



const Pricing = () => {
    const evergreen={
        title:"Evergreen",
        price:0,
        annualPrice:0,
        planType:["Free","Paid (Annual)"],
        features:[{
            title:"POS",
            features:[["Table View"],["Sales Register"],["Categorical Search"],["Item Search by Keyword/Diet Type"]
                ,["Item Layout Change"],["Quick Table Switch"],["Quick KOT View"],["Quick Live View"],["Open Item Punch"]
            ]
        },{
            title:"Customer Management",
            features:[["Guest Profiling"],["Tags & Attributes"],["Loyalty Points"],["Discount, Bill Split, Commission & Others"]]
        },{
            title:"Menu Management",
            features:[["Item Management"],["Multi Menu Setup"],["Table Management"],["Menu Configuration"],["Quick Item Status Change"]]
        },{
            title:"Dashboard and Reports",
            features:[["Order Reports"],["All KOTs"],["Item Wise Reports"],["Notepad"]]
        }]
    }

    const advanced={
        title:"Advanced",
        price:5000,
        annualPrice:50000,
        planType:["Monthly","Annual"],
        features:[{
            title:"POS",
            features:[["Table View"],["Sales Register"],["Categorical Search"],["Item Search by Keyword/Diet Type"]
                ,["Item Layout Change"],["Quick Table Switch"],["Quick KOT View"],["Quick Live View"],["Open Item Punch"]]
        },{
            title:"Customer Management",
            features:[["Guest Profiling"],["Tags & Attributes"],["Loyalty Points"],["Discount, Bill Split, Commission & Others"]]
        },{
            title:"Menu Management",
            features:[["Item Management"],["Multi Menu Setup"],["Table Management"],["Menu Configuration"],["Quick Item Status Change"]]
        },{
            title:"Dashboard and Reports",
            features:[["Order Reports"],["All KOTs"],["Item Wise Reports"],["Notepad"]]
        }]
    }

    const pro={
        title:"Pro",
        price:10000,
        annualPrice:100000,
        planType:["Monthly","Annual"],

        features:[{
            title:"POS",
            features:[["Table View"],["Sales Register"],["Categorical Search"],["Item Search by Keyword/Diet Type"]
                ,["Item Layout Change"],["Quick Table Switch"],["Quick KOT View"],["Quick Live View"],["Open Item Punch"]
            ]
        },{
            title:"Customer Management",
            features:[["Guest Profiling"],["Tags & Attributes"],["Loyalty Points"],["Discount, Bill Split, Commission & Others"]    ]
        },{
            title:"Menu Management",
            features:[["Item Management"],["Multi Menu Setup"],["Table Management"],["Menu Configuration"],["Quick Item Status Change"] ]
        },{
            title:"Dashboard and Reports",
            features:[["Order Reports"],["All KOTs"],["Item Wise Reports"],["Notepad"]]
        }]
    }
    return (
        <>
                <Navbar4 navClass="navbar-light" isSticky={true} fixedWidth buttonClass="btn-primary btn-sm" />

        <section className="section py-8 bg-gradient3 position-relative">
            <div className="divider top d-none d-sm-block"></div>
            <h1 className='text-center pricing-hit'>You can get the best plan for your restaurant business and the best part is you can start <br/> <span className='pricing-hit-span'>with a free plan</span></h1>

                <div className='d-flex flex-lg-row flex-column gap-4 mx-auto justify-content-center align-items-center'>
            <PCard plans={evergreen}/>
            <PCard plans={advanced}/>
            <PCard plans={pro}/>
                </div>
        </section>
        <Step/>
        <Screenshots/>
        <div className='d-none d-lg-block'>

        <br/><br/><br/><br/>
        </div>
        <CallToAction/>
        <Footer1/>
        </>
    );
};

export default Pricing;
