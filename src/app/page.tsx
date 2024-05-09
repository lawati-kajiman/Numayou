import { Contact } from "@/components/contact/page";
import Home from "@/components/home/home";
import Navbar from "@/components/navbar/navbar";
import { Services } from "@/components/services/services";

const page = () => {
  return (
    <div className="flex flex-wrap justify-between flex-col overflow-auto">
      <Navbar />
      <Home />
      <Services />
      <Contact />
    </div>
  );
};

export default page;
