import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage";
import HittaHus from "./Pages/HittaHus";
import KontaktaOss from "./Pages/KontaktaOss";
import OmOss from "./Pages/OmOss";
import UpptäckOmrådet from "./Pages/UpptäckOmrådet";
import NotFound from "./Pages/NotFound";
import MinaFavorites from "./Pages/MinaFavorites";
import Contact from "./Pages/KontaktaOss";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<NotFound />}>
        <Route index element={<HomePage />} />
        <Route path="/KontaktaOss" element={<KontaktaOss />} />
        <Route path="/HittaHus" element={<HittaHus />} />
        <Route path="/UpptäckOmrådet" element={<UpptäckOmrådet />} />
        <Route path="/OmOss" element={<OmOss />} />
        <Route path="/MinaFavorites" element={<MinaFavorites />} />
        <Route path="/KontaktaOss" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);
