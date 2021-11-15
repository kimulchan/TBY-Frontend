import React,{ Suspense } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
const MainRouter = React.lazy(()=>import('./MainRouter'));

const RootRouter = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path='/*'
          element={
            <Suspense fallback={<div>...loading</div>}>
              <MainRouter></MainRouter>
            </Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;