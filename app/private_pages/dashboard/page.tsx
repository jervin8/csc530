import NavBar from "../../private_components/navbar";
import Footer from "../../public_components/footer";

export default function Dashboard() {
    return (
        <main>
            <NavBar />
            <div className="pagecontainer w-full h-screen">
                <p className="text-black">Dashboard page WIP</p>
                <p>https://flowbite.com/docs/components/tabs/</p>
            </div>
            <Footer/>
        </main>
    );
  }