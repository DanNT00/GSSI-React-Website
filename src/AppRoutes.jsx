import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProductsPage1 from "./pages/Products";
import ProductsPage2 from "./pages/Products-2";
import ServicesPage from "./pages/Services";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";

// Routes for Product Items
import KataloxLightPage from "./pages/products/katalox-light";
import FiltersorbSP3Page from "./pages/products/filtersorb-sp3";
import IsoftDescalerPage from "./pages/products/isoft-descaler";
import DuctingAndAccessoriesPage from "./pages/products/ducting-and-accessories";
import StpElcomPage from "./pages/products/stp-elcom";
import ElectrocoagulationPage from "./pages/products/electrocoagulation";
import SmallLargeFoodWasteStrainerPage from "./pages/products/small-large-food-waste-strainer";
import SolarPumpPage from "./pages/products/solar-pump";
import OilSludgeTreatmentSystemPage from "./pages/products/oil-sludge-treatment-system";
import PackagedTypeFirePumpSystemPage from "./pages/products/packaged-type-fire-pump-system";
import SolarPowerGeneratorPage from "./pages/products/solar-power-generator";
import VerticalOilSeparatorPage from "./pages/products/vertical-oil-separator";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage1 />} />
      <Route path="/products-2" element={<ProductsPage2 />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      {/* Routes for Product Items */}
      <Route
        path="/products/ducting-and-accessories"
        element={<DuctingAndAccessoriesPage />}
      />
      <Route path="/products/stp-elcom" element={<StpElcomPage />} />
      <Route
        path="/products/electrocoagulation"
        element={<ElectrocoagulationPage />}
      />
      <Route
        path="/products/small-large-food-waste-strainer"
        element={<SmallLargeFoodWasteStrainerPage />}
      />
      <Route path="/products/solar-pump" element={<SolarPumpPage />} />
      <Route path="/products/filtersorb-sp3" element={<FiltersorbSP3Page />} />
      <Route path="/products/isoft-descaler" element={<IsoftDescalerPage />} />
      <Route path="/products/katalox-light" element={<KataloxLightPage />} />
      <Route
        path="/products/oil-sludge-treatment-system"
        element={<OilSludgeTreatmentSystemPage />}
      />
      <Route
        path="/products/packaged-type-fire-pump-system"
        element={<PackagedTypeFirePumpSystemPage />}
      />
      <Route
        path="/products/solar-power-generator"
        element={<SolarPowerGeneratorPage />}
      />
      <Route
        path="/products/vertical-oil-separator"
        element={<VerticalOilSeparatorPage />}
      />
    </Routes>
  );
};

export default AppRoutes;
