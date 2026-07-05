import Carousel from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";

export default function Home({onAddToCart}) {
    return(
        <div>
            {/* <Navbar /> */}
            <Carousel />
            <Product onAddToCart={onAddToCart}/>
        </div>
    );
}