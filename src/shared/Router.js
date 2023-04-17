import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { AnimatedRoutes } from "./AnimatedRoutes";

const Router = () => {
  // Layout consists of Header and AddTask field
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
