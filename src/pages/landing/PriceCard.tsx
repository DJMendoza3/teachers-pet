import { ButtonPrimary } from "components/buttons/Buttons"

import checkmark_blue from "assets/images/checkmark_blue.png";

type PriceCardProps = {
    name: string;
    price: string;
    features: string[];
    img: string;
    alt: string;
    border?: string;
    background?: string;
    text?: string;
}

export default function PriceCard({name, price, features, img, alt, border, background, text}: PriceCardProps) {
    return(
        <div className={`w-70 h-96 text-center rounded-xl ${border} border-4 border-solid`}>
            <img src={img} alt={alt} className="h-40"/>
            <h4 className={`text-3xl ${text}`}>{name}</h4>
            
            <p>{price}</p>
            
            <ButtonPrimary className={background}>Get Started</ButtonPrimary>
            <ul>
                {features &&
                    features.map((feature, index) => {
                        return <li key={index} className="flex content-center"><img src={checkmark_blue} alt="" className="w-5 h-5" />{feature}</li>
                    })
                }
            </ul>
        </div>
    )
}