import TopbarNav from "layout/navbar/TopbarNav"
import { Outlet } from "react-router-dom"

export default function LandingPage() {
    return (
        <div className="w-full">
            <TopbarNav />
            <Outlet />
        </div>
    )
}