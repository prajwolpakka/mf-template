import { Suspense } from "react";
import { RouterProvider } from "react-router";
import { appRouter } from "./router";

const LayoutFallback = () => (
  <div className="flex h-full w-full items-center justify-center border-b border-border px-6 py-3 text-sm text-muted-foreground">
    Loading layout...
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<LayoutFallback />}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
};

export default App;
