import "./SideBar.css";
import { Link } from 'react-router-dom';
function SideBar() {
    return (
        <div className="side-navbar-parent">
            <div className="side-navbar-child">
                <div className="side-navbar-img">
                    <img src="./side-navbar-images/men's-fashion.jfif" className="side-image" />
                </div>
                <div className="side-navbar-title">
                    <span className="side-title">Men's Fashion</span>
                    <div className="dropdown-content1">
                        <div className="dropdown-content-div">
                            <div className="list">
                                <span>CLOTHING</span>
                                <Link to="#" className="drop">T-Shirts & Polos</Link>
                                <Link to="#" className="drop">Shirts</Link>
                                <Link to="#" className="drop">Jeans</Link>
                                <Link to="#" className="drop">Trousers & Chinos</Link>
                                <Link to="#" className="drop">Innerwear & Sleapwear</Link>
                                <Link to="#" className="drop">Trackpants & Tracksuits</Link>
                                <Link to="#" className="drop">Jackets</Link>
                            </div>
                            <div className="list">
                                <span>FOOTWEAR</span>
                                <Link to="#" className="drop">Sports Shoes</Link>
                                <Link to="#" className="drop">Casual Shoes</Link>
                                <Link to="#" className="drop">Formal Shoes</Link>
                                <Link to="#" className="drop">Sandals & Floaters</Link>
                                <Link to="#" className="drop">Tizen</Link>
                            </div>
                            <div className="list">
                                <img src="./side-navbar-images/men's-fashion.jfif" className="side-list-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="side-navbar-child">
                <div className="side-navbar-img">
                    <img src="./side-navbar-images/women's-fashion.jfif" className="side-image" />
                </div>
                <div className="side-navbar-title">
                    <span className="side-title">Women's Fashion</span>
                    <div className="dropdown-content1">
                        <div className="dropdown-content-div">
                            <div className="list">
                                <span>CLOTHING</span>
                                <Link to="#" className="drop">Dresses</Link>
                                <Link to="#" className="drop">Tops & Tunics</Link>
                                <Link to="#" className="drop">T-Shirts & Shirts</Link>
                                <Link to="#" className="drop">Denims & Trousers</Link>
                                <Link to="#" className="drop">Pants & Plazoas</Link>
                                <Link to="#" className="drop">Innerwear & Nightwear</Link>
                                <Link to="#" className="drop">Outwear & Jackets</Link>
                            </div>
                            <div className="list">
                                <span>FOOTWEAR</span>
                                <Link to="#" className="drop">Heals</Link>
                                <Link to="#" className="drop">Flats & Sandles</Link>
                                <Link to="#" className="drop">Ethnic Footwear</Link>
                                <Link to="#" className="drop">Floater Sandal</Link>
                                <Link to="#" className="drop">Sports Shoes</Link>
                                <Link to="#" className="drop">Casual Shoes</Link>
                                <Link to="#" className="drop">Slippers & Flip Flops</Link>
                                <Link to="#" className="drop">Ballerinas </Link>
                            </div>
                            <div className="list">
                                <img src="./side-navbar-images/women's-fashion.jfif" className="side-list-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="side-navbar-child">
                <div className="side-navbar-img">
                    <img src="./side-navbar-images/home&kitchen.jfif" className="side-image" />
                </div>
                <div className="side-navbar-title">
                    <span className="side-title">Home & Kitchen</span>
                    <div className="dropdown-content1">
                        <div className="dropdown-content-div">
                            <div className="list">
                                <span>HOME FURNISING</span>
                                <Link to="#" className="drop">Bed Linen</Link>
                                <Link to="#" className="drop">Bath Linen</Link>
                                <Link to="#" className="drop">Blankets & Quilts</Link>
                                <Link to="#" className="drop">Curtains & Accessories</Link>
                                <Link to="#" className="drop">Mattresses</Link>
                                <Link to="#" className="drop">Lighting Fixtires</Link>
                                <Link to="#" className="drop">Wall Decor</Link>
                                <Link to="#" className="drop">Storage & Display</Link>
                            </div>
                            <div className="list">
                                <span>KITCHEN APPLIANCES</span>
                                <Link to="#" className="drop">Gas Stoves & Hobs</Link>
                                <Link to="#" className="drop">Chimneys</Link>
                                <Link to="#" className="drop">Jucier Mixer Grinders</Link>
                                <Link to="#" className="drop">Induction Cooktops</Link>
                                <Link to="#" className="drop">Kettles & Coffee Makers</Link>
                                <Link to="#" className="drop">Choppers & Blanders</Link>
                                <Link to="#" className="drop">Sandwich & Roti Makers</Link>
                                <Link to="#" className="drop">Electrics Cookers </Link>
                            </div>
                            <div className="list">
                                <img src="./side-navbar-images/home&kitchen.jfif" className="side-list-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="side-navbar-child">
                <div className="side-navbar-img">
                    <img src="./side-navbar-images/toys.jfif" className="side-image" />
                </div>
                <div className="side-navbar-title">
                    <span className="side-title">Toys</span>
                    <div className="dropdown-content1">
                        <div className="dropdown-content-div">
                            <div className="list">
                                <span>TOYS</span>
                                <Link to="#" className="drop">Toy Cars</Link>
                                <Link to="#" className="drop">Electronic Toys</Link>
                                <Link to="#" className="drop">Action Toys & Figures</Link>
                                <Link to="#" className="drop">Outdoor Toys</Link>
                                <Link to="#" className="drop">Soft Toys</Link>
                                <Link to="#" className="drop">Dolls & Doll Houses</Link>
                                <Link to="#" className="drop">Eductional Toys</Link>
                                <Link to="#" className="drop">Indoor & Board Games</Link>
                                <Link to="#" className="drop">Party Supplies</Link>
                                <Link to="#" className="drop">Ride On Scooters</Link>
                            </div>
                            <div className="list">
                                <img src="./side-navbar-images/toys.jfif" className="side-list-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="side-navbar-child">
                <div className="side-navbar-img">
                    <img src="./side-navbar-images/kids.jfif" className="side-image" />
                </div>
                <div className="side-navbar-title">
                    <span className="side-title">Kids Fashion</span>
                    <div className="dropdown-content2">
                        <div className="dropdown-content-div">
                            <div className="list">
                                <span>GIRLS</span>
                                <Link to="#" className="drop">Frocks & Dreses</Link>
                                <Link to="#" className="drop">Jeans & Pants</Link>
                                <Link to="#" className="drop">Suit Sets</Link>
                                <Link to="#" className="drop">Top,Tees & T-Shirts</Link>
                                <Link to="#" className="drop">Top & Bottom Sets</Link>
                                <Link to="#" className="drop">Leggins & Jeggings</Link>
                            </div>
                            <div className="list">
                                <span>BOYS</span>
                                <Link to="#" className="drop">Top Wear</Link>
                                <Link to="#" className="drop">Top & Bottom Sets</Link>
                                <Link to="#" className="drop">Bottom Wear</Link>
                                <Link to="#" className="drop">Ethnic Wear</Link>
                                <Link to="#" className="drop">Inner Wear</Link>
                                <Link to="#" className="drop">Night Wear</Link>
                            </div>
                            <div className="list">
                                <span>BABY</span>
                                <Link to="#" className="drop">Top & Bottom Sets</Link>
                                <Link to="#" className="drop">Frocks,Dresses & Skrits</Link>
                                <Link to="#" className="drop">Baby Mosqitues Nets</Link>
                                <Link to="#" className="drop">Babby Blankets</Link>
                                <Link to="#" className="drop">Feedings & Nursings</Link>
                            </div>
                            <div className="list">
                                <img src="./side-navbar-images/kids.jfif" className="side-list-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="side-navbar-child">
                <div className="side-navbar-img">
                    <img src="./side-navbar-images/stationary.jfif" className="side-image" />
                </div>
                <div className="side-navbar-title">
                    <span className="side-title">Stationary</span>
                    <div className="dropdown-content2">
                        <div className="dropdown-content-div">
                            <div className="list">
                                <span>STATIONARYS</span>
                                <Link to="#" className="drop">Pens & Markers</Link>
                                <Link to="#" className="drop">Pencils Boxes</Link>
                                <Link to="#" className="drop">File & Folders</Link>
                                <Link to="#" className="drop">Calculators</Link>
                                <Link to="#" className="drop">Diaries & Planners</Link>
                                <Link to="#" className="drop">Printing Papers</Link>
                                <Link to="#" className="drop">Notebooks & Writing Pads</Link>
                                <Link to="#" className="drop">Air & Crafts Supplies</Link>
                            </div>
                            <div className="list">
                                <img src="./side-navbar-images/stationary.jfif" className="side-list-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="side-navbar-child">
                <div className="side-navbar-img">
                    <img src="./side-navbar-images/beauty.jfif" className="side-image" />
                </div>
                <div className="side-navbar-title">
                    <span className="side-title">Beauty</span>
                    <div className="dropdown-content2">
                        <div className="dropdown-content-div">
                            <div className="list">
                                <span>BEAUTY</span>
                                <Link to="#" className="drop">Face</Link>
                                <Link to="#" className="drop">Eyes</Link>
                                <Link to="#" className="drop">Lips</Link>
                                <Link to="#" className="drop">Nails</Link>
                                <Link to="#" className="drop">Makeup Plattes</Link>
                                <Link to="#" className="drop">Bruses & Applicators</Link>
                            </div>
                            <div className="list">
                                <span>PERSONAL & GROOMING</span>
                                <Link to="#" className="drop">Skin Care</Link>
                                <Link to="#" className="drop">Hair Care</Link>
                                <Link to="#" className="drop">Oral Care</Link>
                                <Link to="#" className="drop">Men's Grooming</Link>
                            </div>
                            <div className="list">
                                <img src="./side-navbar-images/beauty.jfif" className="side-list-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="side-navbar-child">
                <div className="side-navbar-img">
                    <img src="./side-navbar-images/health.jfif" className="side-image" />
                </div>
                <div className="side-navbar-title">
                    <span className="side-title">Health</span>
                    <div className="dropdown-content3">
                        <div className="dropdown-content-div">
                            <div className="list">
                                <span>FOOD & GOURMENT</span>
                                <Link to="#" className="drop">Tea & Coffee</Link>
                                <Link to="#" className="drop">Noodels & Pastas</Link>
                                <Link to="#" className="drop">Biscuits</Link>
                                <Link to="#" className="drop">Breakfast Foods</Link>
                                <Link to="#" className="drop">Chocolates & Candies</Link>
                                <Link to="#" className="drop">Dry Fruits & Gift boxes</Link>
                            </div>
                            <div className="list">
                                <span>NUTRITION & SUPPLEMENTS</span>
                                <Link to="#" className="drop">Protines</Link>
                                <Link to="#" className="drop">Vitamins & Minerals</Link>
                                <Link to="#" className="drop">Health Drinks</Link>
                                <Link to="#" className="drop">Workout Supplements</Link>
                                <Link to="#" className="drop">Snakes</Link>
                            </div>
                            <div className="list">
                                <img src="./side-navbar-images/health.jfif" className="side-list-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="side-navbar-child">
                <div className="side-navbar-img">
                    <img src="./side-navbar-images/mobile&assecories.png" className="side-image" />
                </div>
                <div className="side-navbar-title">
                    <span className="side-title">Mobile & Accessories</span>
                    <div className="dropdown-content3">
                        <div className="dropdown-content-div">
                            <div className="list">
                                <span>MOBILE</span>
                                <Link to="#" className="drop">I-Phone</Link>
                                <Link to="#" className="drop">Samsung</Link>
                                <Link to="#" className="drop">Vivo</Link>
                                <Link to="#" className="drop">MI</Link>
                                <Link to="#" className="drop">Real ME</Link>
                                <Link to="#" className="drop">Oppo</Link>
                                <Link to="#" className="drop">Jio</Link>
                            </div>
                            <div className="list">
                                <span>MOBILE CASES & COVERS</span>
                                <Link to="#" className="drop">Printed Back Covers</Link>
                                <Link to="#" className="drop">Plain Back Covers</Link>
                                <Link to="#" className="drop">Flip Covers</Link>
                            </div>
                            <div className="list">
                                <img src="./side-navbar-images/mobile&assecories.png" className="side-list-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="side-navbar-child">
                <div className="side-navbar-img">
                    <img src="./side-navbar-images/computer.jfif" className="side-image" />
                </div>
                <div className="side-navbar-title">
                    <span className="side-title">Computeres & Gaming</span>
                    <div className="dropdown-content3">
                        <div className="dropdown-content-div">
                            <div className="list">
                                <span>STORAGE</span>
                                <Link to="#" className="drop">External Hard Drives</Link>
                                <Link to="#" className="drop">Memory Cards</Link>
                                <Link to="#" className="drop">Pen Drives</Link>
                                <Link to="#" className="drop">SSD</Link>
                                <Link to="#" className="drop">Data Cards</Link>
                                <Link to="#" className="drop">Dongles</Link>
                                <Link to="#" className="drop">Routers</Link>
                            </div>
                            <div className="list">
                                <span>Computer Accessories</span>
                                <Link to="#" className="drop">Keyboards</Link>
                                <Link to="#" className="drop">Mouses</Link>
                                <Link to="#" className="drop">Web Cams</Link>
                                <Link to="#" className="drop">Laptop Skins</Link>
                                <Link to="#" className="drop">Cooling Pads</Link>
                                <Link to="#" className="drop">Extensions Cords</Link>
                            </div>
                            <div className="list">
                                <img src="./side-navbar-images/computer.jfif" className="side-list-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;