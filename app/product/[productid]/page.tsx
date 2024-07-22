import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import { products } from "@/utils/Product";





interface IParams {
    productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
    console.log('params:', params);

    return <div className="p-8">
       <Container>
       <ProductDetails product = {products} />
       </Container>
        </div>;
}
 
export default Product;
 



