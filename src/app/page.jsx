import About from "./components/fragments/About";
import BankPartners from "./components/fragments/BankPartners";
import Header from "./components/fragments/Header";
import Navbar from "./components/fragments/Navbar";
import NavbarTop from "./components/fragments/NavbarTop";
import TrainingSection from "./components/fragments/TrainingSection";
import WhyMeSection from "./components/fragments/Whyme";

async function getData() {
  const res = await fetch("http://localhost:3000/api/data-web", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data.data);
  return (
    <main className="min-h-screen">
      <div className="top-0 z-[99] sticky ">
        <NavbarTop {...data.data} />
        <Navbar {...data.data} />
      </div>
      <Header {...data.data} />
      <About {...data.data} />
      <BankPartners {...data.data} />
      <WhyMeSection {...data.data} />
      <TrainingSection {...data.data} />
    </main>
  );
}
