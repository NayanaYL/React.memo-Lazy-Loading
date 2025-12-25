import { useState, lazy, Suspense } from "react";

/* Lazy load the heavy component */
const HeavyComponent = lazy(() => import("./HeavyComponent"));

export default function App() {
  console.log("Parent App rendered");

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>React.memo & Lazy Loading Demo</h2>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <hr />

      {/* Lazy loading with Suspense */}
      <Suspense fallback={<p>Loading Heavy Component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
