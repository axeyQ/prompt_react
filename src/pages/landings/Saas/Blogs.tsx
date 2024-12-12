import React, { useState } from "react";
import { Footer1 } from "components/footer";
import "./Blogs.css";
import pic1 from "../../../assets/images/blog1Pic1.webp"
import pic2 from "../../../assets/images/blog2Pic1.webp"
import pic3 from "../../../assets/images/blog3Pic1.webp"
import pic4 from "../../../assets/images/blog4Pic1.webp"
import pic5 from "../../../assets/images/blog5Pic2.avif"
import pic6 from "../../../assets/images/blog6Pic1.avif"
import pic7 from "../../../assets/images/blog7Pic1.webp"
import pic9 from "../../../assets/images/blog9Pic1.webp"
import pic10 from "../../../assets/images/blog10Pic1.webp"
import pic11 from "../../../assets/images/blog11Pic1.webp"
import pic12 from "../../../assets/images/blog12Pic1.webp"
import BlogsContent from "./BlogsContent";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";
import "../../../MyCSS/hero.css";
import "../../../MyCSS/style.css"
import BlogCta from "./BlogCTA";
import Navbar4 from "components/navbars/Navbar4";


const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const blogs = [
    {
      id: 1,
      title: "Comprehensive Guide to Point of Sale (POS) Systems in Restaurants",
      path: "/blogs/comprehensive-guide-to-point-of-sale-pos-systems-in-restaurants",
      component: "Blog1",
      image: pic1,
      description:
        "A comprehensive guide to point of sale (POS) systems in restaurants, including their benefits, types, and how to choose the right one for your business.",
      category: "Technology & Innovations",
    },
    {
      id: 2,
      title: "The Impact of Zomato and Swiggy on the Indian Food Market",
      path: "/blogs/the-impact-of-zomato-and-swiggy-on-the-indian-food-market",
      component: "Blog2",
      image: pic2,
      description:
        "The impact of Zomato and Swiggy on the Indian food market, including how they have changed the way people eat and the challenges they face.",
      category: "Online Platforms",
    },
    {
      id: 3,
      title: "How Restaurants Can Get Started with Zomato and Swiggy: Step-by-Step Guide",
      path: "/blogs/how-restaurants-can-get-started-with-zomato-and-swiggy-step-by-step-guide",
      component: "Blog3",
      image: pic3,
      description:
        "A step-by-step guide for restaurants to get started with Zomato and Swiggy, including how to create an account, add your menu, and start accepting orders.",
      category: "Online Platforms",
    },
    {
      id: 4,
      title: "A Deep Dive into How Zomato and Swiggy Make Money",
      path: "/blogs/a-deep-dive-into-how-zomato-and-swiggy-make-money",
      component: "Blog4",
      image: pic4,
      description:
        "A deep dive into how Zomato and Swiggy make money, including how they generate revenue from advertising, commissions, and other sources.",
      category: "Online Platforms",
    },
    {
      id: 5,
      title: "Changes in the Way Food is Delivered Thanks to Zomato and Swiggy's Logistics Networks",
      path: "/blogs/changes-in-the-way-food-is-delivered-thanks-to-zomato-and-swiggys-logistics-networks",
      component: "Blog5",
      image: pic5,
      description:
        "Changes in the way food is delivered thanks to Zomato and Swiggy's logistics networks, including how they have changed the way people eat and the challenges they face.",
      category: "Online Platforms",
    },
    {
      id: 6,
      title: "The Challenges and Opportunities of Partnering with Zomato and Swiggy",
      path: "/blogs/the-challenges-and-opportunities-of-partnering-with-zomato-and-swiggy",
      component: "Blog6",
      image: pic6,
      description:
        "The challenges and opportunities of partnering with Zomato and Swiggy, including how they have changed the way people eat and the challenges they face.",
      category: "Online Platforms",
    },
    {
      id: 7,
      title: "How Zomato and Swiggy Are Improving the Consumer Experience Using Data",
      path: "/blogs/how-zomato-and-swiggy-are-improving-the-consumer-experience-using-data",
      component: "Blog7",
      image: pic7,
      description:
        "How Zomato and Swiggy are improving the consumer experience using data, including how they use data to improve their services and the challenges they face.",
      category: "Online Platforms",
    },
    {
      id: 8,
      title: "Future Predictions: What's Next for Zomato and Swiggy in the Coming Years",
      path: "/blogs/future-predictions-whats-next-for-zomato-and-swiggy-in-the-coming-years",
      component: "Blog8",
      image: pic2,
      description: "Future Predictions: What's Next for Zomato and Swiggy in the Coming Years",
      category: "Online Platforms",
    },
    {
      id: 9,
      title: "Role of AI in Restaurant Business",
      path: "/blogs/role-of-ai-in-restaurant-business",
      component: "Blog9",
      image: pic9,
      description:
        "The role of AI in restaurant business, including how it can help restaurants improve their operations and the challenges they face.",
      category: "Technology & Innovations",
    },
    {
      id: 10,
      title: "Top Tips for Efficient Restaurant Management",
      path: "/blogs/top-tips-for-efficient-restaurant-management",
      component: "Blog10",
      image: pic10,
      description: "Top Tips for Efficient Restaurant Management",
      category: "Management & Operations",
    },
    {
      id: 11,
      title: "How to Use Social Media to Promote Your Restaurant",
      path: "/blogs/how-to-use-social-media-to-promote-your-restaurant",
      component: "Blog11",
      image: pic11,
      description: "How to Use Social Media to Promote Your Restaurant",
      category: "Marketing & Promotion",
    },
    {
      id: 12,
      title: "Emerging Food Trends in 2024: Every Restaurant Should Know",
      path: "/blogs/emerging-food-trends-in-2024-every-restaurant-should-know",
      component: "Blog12",
      image: pic12,
      description: "Emerging Food Trends in 2024: Every Restaurant Should Know",
      category: "Industry Trends",
    },
  ];

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Optional: Separate filter for technology blogs
  const technologyBlogs = filteredBlogs.filter(
    (blog) => blog.category === "Technology & Innovations"
  );

  const onlinePlatformsBlogs = filteredBlogs.filter(
    (blog) => blog.category === "Online Platforms"
  );
  const restaurantManagement = filteredBlogs.filter(
    (blog) => blog.category === "Management & Operations"
  );
  const marketingPromotion = filteredBlogs.filter(
    (blog) => blog.category === "Marketing & Promotion"
  );
  const industryTrends = filteredBlogs.filter(
    (blog) => blog.category === "Industry Trends"
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Navbar4
        navClass="navbar-light"
        isSticky={true}
        fixedWidth
        buttonClass="btn-primary btn-sm"
      />
      <div className="">
        <div className="top-banner">
          <h1>Blogs</h1>
        </div>
        {/* Search Input */}
        <div className="search-container my-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="d-none d-lg-block">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="justify-content-center">
            <Col sm={2} className="fixed-left">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">All ({filteredBlogs.length})</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    Technology & Innovations ({technologyBlogs.length})
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Online Platforms ({onlinePlatformsBlogs.length})
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    Management & Operations ({restaurantManagement.length})
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">
                    Marketing & Promotion ({marketingPromotion.length})
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth">
                    Industry Trends ({industryTrends.length})
                  </Nav.Link>
                  </Nav.Item>
              </Nav>
              <BlogCta background="#ffd835" />
            </Col>
            <Col sm={10} style={{marginLeft: "180px"}}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <BlogsContent filteredBlogs={filteredBlogs} />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <BlogsContent filteredBlogs={technologyBlogs} />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <BlogsContent filteredBlogs={onlinePlatformsBlogs} />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <BlogsContent filteredBlogs={restaurantManagement} />
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <BlogsContent filteredBlogs={marketingPromotion} />
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <BlogsContent filteredBlogs={industryTrends} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        </div>
        <div className="d-block d-lg-none">
        <Tabs
      defaultActiveKey="home"
      id="justify-tab-example"
      className="mb-3 hidden-cat"
    >
      <Tab eventKey="home" title={`All (${filteredBlogs.length})`}>
      <BlogsContent filteredBlogs={filteredBlogs} />
        
      </Tab>
      <Tab eventKey="technology" title={`Technology (${technologyBlogs.length})`}>
        <BlogsContent filteredBlogs={technologyBlogs} />
      </Tab>
        <Tab eventKey="online-platforms" title={`Online Platforms (${onlinePlatformsBlogs.length})`}>
        <BlogsContent filteredBlogs={onlinePlatformsBlogs} />
      </Tab>
      <Tab eventKey="restaurant-management" title={`Restaurant Management (${restaurantManagement.length})`}>
        <BlogsContent filteredBlogs={restaurantManagement} />
      </Tab>
      <Tab eventKey="marketing" title={`Marketing (${marketingPromotion.length})`}>
        <BlogsContent filteredBlogs={marketingPromotion} />
      </Tab>
      <Tab eventKey="industry-trends" title={`Industry Trends (${industryTrends.length})`}>
        <BlogsContent filteredBlogs={industryTrends} />
      </Tab>
    </Tabs>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default Blogs;