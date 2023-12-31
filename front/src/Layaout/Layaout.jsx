import { Outlet } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button"
import NavBar from "../sections/NavBar/NavBar";

const Layaout = () => {
  return (
    <>
    <NavBar />
    <header>Header</header>
    <main className="container mx-2">
    <Outlet />

    {/* <Link to="/" className={buttonVariants({ variant: "outline" })} >Home</Link> */}

    </main>
    <footer>Footer</footer>
    </>
  )
}

export default Layaout