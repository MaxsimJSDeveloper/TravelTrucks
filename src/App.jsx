import { Route, Routes } from "react-router-dom";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader.jsx";

const CamperFeatures = lazy(() =>
  import("./components/CamperFeatures/CamperFeatures.jsx")
);
const CamperReviews = lazy(() =>
  import("./components/CamperReviews/CamperReviews.jsx")
);
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));

const CamperDetailsPage = lazy(() =>
  import("./pages/CamperDetailsPage/CamperDetailsPage.jsx")
);
const CampersCatalogPage = lazy(() =>
  import("./pages/CampersCatalogPage/CampersCatalogPage.jsx")
);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CampersCatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />}>
            <Route path="features" element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
