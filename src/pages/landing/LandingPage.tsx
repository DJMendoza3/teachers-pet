import TopbarNav from "layout/navbar/TopbarNav"
import { Outlet } from "react-router-dom"

export default function LandingPage() {
    return (
        <div>
            <TopbarNav />
            <Outlet />
        </div>
    )
}