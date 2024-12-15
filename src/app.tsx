import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute } from "./const";
import AllPositions from "./all-positions";
import Relative from "./relative";
import Absolute from "./absolute";
import Fixed from "./fixed";
import Sticky from "./sticky";
export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.AllPos} element={<AllPositions />} />
        <Route path={AppRoute.Relative} element={<Relative />} />
        <Route path={AppRoute.Absolute} element={<Absolute />} />
        <Route path={AppRoute.Fixed} element={<Fixed />} />
        <Route path={AppRoute.Sticky} element={<Sticky />} />
      </Routes>
    </BrowserRouter>
  );
}
