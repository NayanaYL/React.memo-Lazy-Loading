import React from "react";

function HeavyComponent() {
  console.log("HeavyComponent rendered");

  return (
    <div>
      <h3>Heavy UI Component</h3>
      <p>This component is expensive to render.</p>
    </div>
  );
}

/* Wrap with React.memo */
export default React.memo(HeavyComponent);
