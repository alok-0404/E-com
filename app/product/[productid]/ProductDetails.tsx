



"use client"
import SetColor from "@/app/components/Products/SetColor"
import SetQuantity from "@/app/components/Products/SetQuantity"
import { Rating } from "@mui/material"
import { teal } from "@mui/material/colors"
import { useCallback, useState } from "react"

interface ProductDetailsProps {
    product: any
}

export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    brand: string,
    seletedImg:  SeletedImgType,
    quantity: number,
    price: number
}

export type SeletedImgType = {
    color: string,
    colorCode: string,
    Image: string
}

const Horizontal = () => {
    return <hr className="w-[30%] my-2"></hr>
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        seletedImg: { ...product.images[0] },
        quantity: 1,
        price: product.price
    })
   console.log(cartProduct)


    const productRating = product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / product.reviews.length

    const handleColorSelect = useCallback((value:SeletedImgType) => {
        setCartProduct((prev) => {
            return {...prev, seletedImg:value}
        })
    }, [cartProduct.seletedImg])

    const handleQtyIncrease= useCallback
    (() => {
        setCartProduct((prev) => {
            return{...prev, quantity: ++prev.quantity}

        })
    }, [cartProduct])

    const handleQtyDecrease= useCallback
    (() => {
        setCartProduct((prev) => {
            return {...prev, quantity: --prev.quantity};
        })
    }, [cartProduct])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>Images</div>
            <div className="flex flex-col gap-1 text-slate-500 text-sm">
                <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
                <div className="flex items-center gap-2">
                    <Rating value={productRating} readOnly />
                    <div>{product.reviews.length} reviews</div>
                </div>
                <div className="text-justify">{product.description}</div>
                <Horizontal />
                <div>
                    <span className="font-semibold">CATEGORY:</span> {product.category}
                </div>
                <div>
                    <span className="font-semibold">BRAND:</span> {product.brand}
                </div>
                <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
                    {product.inStock ? "in stock" : "out of stock"}
                </div>
                <Horizontal />
                <SetColor
                    cartProduct={cartProduct}
                    images={product.images}
                    handleColorSelect={handleColorSelect}
                />
                <Horizontal />
                <SetQuantity 
                cartProduct={cartProduct}
            
                handleQtyIncrease={handleQtyIncrease}
                handleQtyDecrease={handleQtyDecrease}/>
                <div>Quantity</div>
                <Horizontal />
                <div>add to cart</div>
            </div>
        </div>
    )
}

export default ProductDetails
