import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "../pages/Details";
import { TaskList } from "../pages/TaskList";
import { Layout } from "./Layout";

const Router = () => {
  // Layout consists of Header and AddTask field
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="tasks/:id" element={<Details />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
