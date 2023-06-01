import PriceCard from "./PriceCard"

export default function Pricing() {
    return(
        <section id="pricing" className="flex justify-between max-w-6xl m-auto">
            <PriceCard name="Basic" price="free" features={["Multiple choice test generation.", "Up to 100 tests generations per month."]}/>
            <PriceCard name="Deans List" price="$5.00" features={["Everything in the prior tier +", "Aditional question types.", "Unlimited test generations per month."]}/>
            <PriceCard name="Valedictorian" price="$10.00" features={["Everything in the prior tier +", "Access to all future features at a locked in rate."]}/>
        </section>
    )
}