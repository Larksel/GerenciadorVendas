import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { routes } from "./routes";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />} errorElement={<GlobalErrorBoundary />}>
      <Route path={routes.HOME} element={<HomePage />} />
    </Route>
  )
);

/**
 * Componente exibido ao dar erro nas rotas
 */
function GlobalErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="min-h-screen w-screen p-4">
      <h1 className="text-2xl text-danger">
        Erro ao tentar acessar a página!
      </h1>
    </main>
  );
}

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
