import PriceCard from "./PriceCard"

export default function Pricing() {
    return(
        <section id="pricing" className="flex justify-between max-w-6xl m-auto pt-20 pb-20">
            <PriceCard name="Basic" price="free" features={["Multiple choice test generation.", "Up to 100 tests generations per month."]} border="border-red-600" text="text-red-600" background="bg-red-600"/>
            <PriceCard name="Deans List" price="$5.00" features={["Everything in the prior tier +", "Aditional question types.", "Unlimited test generations per month."]} border="border-emerald-600" text="text-emerald-600" background="bg-emerald-600"/>
            <PriceCard name="Valedictorian" price="$10.00" features={["Everything in the prior tier +", "Access to all future features at a locked in rate."]} border="border-indigo-600" text="text-indigo-600" background="bg-indigo-600"/>
        </section>
    )
}