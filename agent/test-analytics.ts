const res = await fetch("http://localhost:3000/api/analytics", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    type: "click",
    element: "deploy-button",
    path: "/",
    sessionId: "test-1",
  }),
});

const data = await res.json();
console.log("Status:", res.status);
console.log("Response:", data);
