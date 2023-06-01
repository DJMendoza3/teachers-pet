import { ButtonPrimary } from "components/buttons/Buttons"

type PriceCardProps = {
    name: string;
    price: string;
    features: string[];
    img: string;
    alt: string;
}

export default function PriceCard({name, price, features, img, alt}: PriceCardProps) {
    return(
        <div className="w-70 h-96 flex-col text-center bg-accent rounded-xl">
            <h4 className="text-3xl">{name}</h4>
            <img src={img} alt={alt} />
            <p>{price}</p>
            <ul>
                {features &&
                    features.map((feature, index) => {
                        return <li key={index}>{feature}</li>
                    })
                }
            </ul>
            <ButtonPrimary>Sign Up</ButtonPrimary>
        </div>
    )
}