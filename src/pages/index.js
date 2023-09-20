import { Link } from "next/link"; // Import Link from Next.js
import Home from "@/container/Home";
import ServiceArea from "@/container/Service/service";
import Layout from "@/layouts/landing";

const Index = () => {
  return (
    <Layout>
     {/* Link to the Service page */}
      <Home />
      {/* <ServiceArea /> */}
    </Layout>
  );
};

export default Index;
