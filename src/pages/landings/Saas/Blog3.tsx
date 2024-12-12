import { Footer1 } from "components/footer";
import "./Blogs.css"
import Pic1 from "../../../assets/images/blog3Pic1.webp"
import BlogHeader from "./BlogHeader";
import Navbar4 from "components/navbars/Navbar4";
const Blog3 = () => {
    return (
        <>
        <Navbar4 navClass="navbar-light" isSticky={true} fixedWidth buttonClass="btn-primary btn-sm" />
        <div className="container">
            <BlogHeader title="How Restaurants Can Get Started with Zomato and Swiggy: Step by Step Guide" category="Online Platforms" author="Hritvik Agarwal" date="April 10, 2024" /> 
            <div className="blog-content">
                <img src={Pic1} alt="Hands of two people with phone in them and a Online Ordering Platform open in them" className="my-4" width={"100%"} />
                <p>Indian restaurants can get more customers and make more money by using Zomato and Swiggy, two of the most famous food delivery services in the country. Your company may benefit greatly from this as it might increase revenue, attract new clients, and provide existing clients with additional choices. Here's a detailed guide on adding your company to Swiggy and Zomato.</p>
                <h2>Getting Started with Zomato</h2>
                <p>Zomato offers two restaurant-specific services: Zomato for Restaurants and Zomato Gold. You can add your restaurant to Zomato for Restaurants and join Zomato Gold. The steps you need to take to list your business or sign up for meal delivery are:</p>
                <p><strong>Step 1: Set Up a Zomato Business Account</strong></p>
                <ul>
                    <li>Please visit the website for Zomato for Business, which may be found at <span><a href="https://www.zomato.com/business" target="_blank" rel="noopener noreferrer">https://www.zomato.com/business</a></span>.</li>
                    <li>Click on the “Sign Up” or “Get Started” button.</li>
                    <li>Fill in the details such as your restaurant’s name, location, contact information, and other necessary information.</li>
                    <li>You will also need to provide your restaurant’s GST number (if applicable) for tax purposes.</li>
                </ul>
                <p><strong>Step 2: Create a Page for your Restaurant</strong></p>
                <ul>
                    <li>Once your account has been created, you will need to provide further details about your company. The following details are included in this information:</li>
                    <ul>    
                        <li>You should showcase your company and the cuisine you provide with high-quality photos.</li>
                        <li>Include your menu, which should have detailed descriptions, prices, and pictures of the food.</li>
                        <li>Make sure that the contact information and hours listed for your business are correct.</li>
                        <li>Because Zomato is a website, you can also let people order online and have it delivered.</li>
                    </ul>
                </ul>
                <p><strong>Step 3: Accept Zomato's Terms and Conditions</strong></p>
                <ul>
                    <li>Before your company may be featured on Zomato, you must accept its terms. These terms and conditions outline the restaurant's obligations, fees, and any additional expenses for marketing or service.</li>
                </ul>
                <p><strong>Step 4: Set Up the Payment</strong></p>
                <ul>
                    <li>Following the completion of the establishment of your profile, you will be needed to connect a bank account in order to receive payments to your account. Generally speaking, Zomato will send funds once per week or every other week.</li>
                </ul>
                <p><strong>Step 5: Validation</strong></p>
                <ul>
                    <li>It is possible that Zomato will verify the information about your business by either sending a representative to visit your facility or by calling from your location. Your restaurant will become active on the site after it has been established.</li>
                </ul>
                <p><strong>Step 6: Keep Track of and Manage Orders</strong></p>
                <ul>
                    <li>After the training process is done, you will be able to check your sales and comments on the Zomato for Business page. You will also have access to important data and analytics about your customers' likes and dislikes and how well they do.</li>
                </ul>


                <h2>Getting Started with Swiggy</h2>
                <p>Companies who provide food services may also register with Swiggy and advertise their services there. The following actions must be taken in order to get your company featured on Swiggy:</p>
                <p><strong>Step 1: Create an Account on the Swiggy Partner Portal</strong></p>
                <ul>
                    <li>You can sign up on the Swiggy Partner page, which is <span><a href="https://partner.swiggy.com" target="_blank" rel="noopener noreferrer">https://partner.swiggy.com</a></span>.</li>
                    <li>Just click on "Sign Up" or "Get Started" to move forward.</li>
                    <li>Fill in the necessary details, such as the name of your business, where it is located, how to reach you, and the type of food it offers.</li>
                    <li>They will want verification that you are the business's owner, a license from the Food Safety and Standards Authority of India (FSSAI), and details regarding the Goods and Services Tax (GST).</li>
                </ul>
                <p><strong>Step 2: Include Restaurant Details</strong></p>
                <ul>
                    <li>You will be required to provide further information after creating an account, which may include the following:</li>
                    <ul>    
                        <li>The menu for your restaurant should be posted here, along with the costs, images, and nutritional information.</li>
                        <li>High-quality images of the restaurant's cuisine, surroundings, and any further branding materials you've selected may be uploaded</li>
                        <li>If you want to send or eat in, make sure that the schedules for those times are right.</li>
                    </ul>
                </ul>
                <p><strong>Step 3: Write Down the Rules and Terms. Everyone Agrees!</strong></p>
                <ul>
                    <li>Like Zomato, Swiggy makes you read and agree to their terms and conditions before you can use their service. These include, among other things, the payment details, transit conditions, and the pricing structure.</li>
                </ul>
                <p><strong>Step 4: Set Up the Payment</strong></p>
                <ul>
                    <li>You must provide Swiggy with comprehensive information about your bank account in order for them to be able to transfer money straight to it. In most cases, payments are paid once a week or according to the terms of the arrangement.</li>
                </ul>
                <p><strong>Step 5: Process of Verification</strong></p>
                <ul>
                    <li>Swiggy will check whether or not your establishment is listed. They could ask for a visit to the location in order to verify the facts about the company and examine the premises to ensure that they meet quality requirements.</li>
                </ul>
                <p><strong>Step 6: Go Live</strong></p>
                <ul>
                    <li>After the verification process is complete, your restaurant will be made available on the Swiggy platform, and you will begin to receive orders from consumers.</li>
                </ul>

                <h2>Notable Considerations Regarding the Onboarding Process</h2>
                <p><strong>1. Commission Fees</strong></p>
                <ul>
                    <li>The amount of commission fees charged by Zomato and Swiggy vary based on the kind of service being used (listing, delivery, etc.). Before you join up for the service, be sure you have read and understand the commission arrangements.</li>
                </ul>
                <p><strong>2. Delivery Services</strong></p>
                <ul>
                    <li>If you want to do your delivery via the platform, you should be aware that there will be commissions and service costs associated with the delivery. On the other hand, this does have the potential to help you expand your client base by giving convenience to those who prefer to place their orders online.</li>
                </ul>
                <p><strong>3. Ratings and Reviews from Customers</strong></p>
                <ul>
                    <li>Ratings and reviews from customers are essential to the visibility and reputation of your hospitality establishment on both platforms. You may improve your ratings by providing exceptional service on a consistent basis and delivering your products in a timely manner.</li>
                </ul>
                <p><strong>4. Promoting Your Restaurant</strong></p>
                <ul>
                    <li>Both platforms include promotional options such as discounts, specials, and highlighted listings when it comes to promoting your restaurant. Taking use of these may help boost the exposure of your business, particularly in the first phases of its operation.</li>
                </ul>

                <h3>References</h3>
                <ul>
                    <li>Zomato for Business: <a href="https://www.zomato.com/business" target="_blank" rel="noopener noreferrer">https://www.zomato.com/business</a>.</li>
                    <li>Swiggy Partner: <a href="https://partner.swiggy.com" target="_blank" rel="noopener noreferrer">https://partner.swiggy.com</a>.</li>
                    <li>The Zomato Business Blog offers information and updates on the restaurant onboarding process.</li>
                    <li>The Swiggy Partner Blog offers information on using Swiggy to expand your restaurant business.</li>
                </ul>
            </div>
        </div>
        <Footer1 />
        </>
     );
}
 
export default Blog3;