import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: { fontSize: "14px" },
        }}
      />

      {/* your routes or main content */}
      <main />
    </>
  );
}

export default App;
