import { Link } from "next/link"; // Import Link from Next.js
import Home from "@/container/Home";
import Layout from "@/layouts/landing";

const Index = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default Index;
