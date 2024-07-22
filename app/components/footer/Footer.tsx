import { MdFacebook } from "react-icons/md";
import Container from "../Container";
import FooterList from "./FooterList";
import Link from "next/link";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
        <Container> 
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
              <FooterList>
                <h3 className="text-base font-bold md-2">Shop Categories</h3>
                <Link href="#"> Phones</Link>
                <Link href="#"> Laptops</Link>
                <Link href="#"> Desktops</Link>
                <Link href="#"> Watches</Link>
                <Link href="#"> Tvs</Link>
                <Link href="#"> Accessories</Link>
              </FooterList>

              <FooterList>
                <h3 className="text-base font-bold md-2">Customer Services</h3>
                <Link href="#"> Contacts Us</Link>
                <Link href="#"> Shipping Policy</Link>
                <Link href="#"> Return & Exchange</Link>
                <Link href="#"> Watches</Link>
                <Link href="#"> FAQs</Link>
                
              </FooterList>

              <FooterList>
                <h3 className="text-base font-bold md-2">About Us</h3>
              <p className="mb-2 w-40">At our electronics store, we are dedicated to peoviding the latest and greatest devices and accessories to our customers, with a aide selections of phones, Tvs, Laptops,watches, and accessories.</p>
              <p>&copy ; {new Date().getFullYear()} E-Shop. All right reserved</p>
              </FooterList>

                <FooterList>
                <h3 className="text-base font-bold md-2">Follow Us</h3>
                <div className="flex gap-2">
                <Link href="#"> 
                <MdFacebook size={24}/>
                </Link>

                <Link href="#"> 
                <AiFillTwitterCircle size={24}/>
                </Link>

                <Link href="#"> 
                <AiFillInstagram size={24}/>
                </Link>

                <Link href="#"> 
                <AiFillYoutube size={24}/>
                </Link>

                </div>
                </FooterList>
            </div>
            </Container>
    </footer>
}
 
export default Footer ;