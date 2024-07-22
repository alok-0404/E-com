// "use client"

// import { CartProductType, SeletedImgType } from "@/app/product/[productid]/ProductDetails";




// interface SetColorProps{
//     images: SeletedImgType[],
//     cartProduct: CartProductType,
//     handColorSelect: (value: SeletedImgType) => void
// }

// const SetColor: React.FC<SetColorProps> = ({
//     images,cartProduct,handColorSelect
// }) => {
//     return  <div>
//        <div className="flex gap-4 items-center"> 
//         <span className="font-semibold">COLOR:</span>
//         <div className="flex gap-1">{
//             images.map((image) => {
//                 return (
//                 <div key={image.color} onClick={() => handColorSelect(image)} className={`
//                 h-7 w-7 rounded-full border-teal-300 border-teal-300 flex items-center justify-center
//                 ${
//                     cartProduct.seletedImg.color === image.color ? 'border-[1.5px]' : 'border-none'
//                 }
//                 `}>
//                    <div style={{background: image.colorCode}} className="h-5 w-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer"></div>

//                 </div>
//                 )
//             })
//             }</div>
//         </div>

//     </div> ;
// }
 
// export default SetColor;


"use client"

import { CartProductType, SeletedImgType } from "@/app/product/[productid]/ProductDetails";

interface SetColorProps {
    images: SeletedImgType[],
    cartProduct: CartProductType,
    handleColorSelect: (value: SeletedImgType) => void
}

const SetColor: React.FC<SetColorProps> = ({
    images, cartProduct, handleColorSelect
}) => {
    return (
        <div>
            <div className="flex gap-4 items-center">
                <span className="font-semibold">COLOR:</span>
                <div className="flex gap-1">
                    {images.map((image) => (
                        <div
                            key={image.color}
                            onClick={() => handleColorSelect(image)}
                            className={`
                                h-7 w-7 rounded-full border-teal-300 flex items-center justify-center
                                ${cartProduct.seletedImg.color === image.color ? 'border-[1.5px]' : 'border-none'}
                            `}
                        >
                            <div
                                style={{ background: image.colorCode }}
                                className="h-5 w-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer"
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SetColor;

