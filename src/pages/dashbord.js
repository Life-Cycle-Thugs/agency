import DashboardHome from "@/Dashbord/home";
import Dashboard from "@/Dashbord/layout";
import DashbordNavbar from "@/Dashbord/navbar";
import Topbar from "@/Dashbord/topbar";


const Index = () => {
  return (
    <div style={{ display: "flex" }}>
      <DashbordNavbar />
      <div style={{ flexGrow: 1, padding: "20px" }}>
        <Topbar />

        {/* Main Content */}
        <div style={{ marginTop: "80px" }}>
          {/* Your main content goes here */}
          <DashboardHome/>
        </div>
      </div>
    </div>
  );
};

export default Index;
