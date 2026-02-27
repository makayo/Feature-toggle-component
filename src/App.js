import FeatureToggle from "./FeatureToggle";
import FeatureToggleClass from "./FeatureToggleClass";

function App() {
  // Flip this to switch versions
  //const useClassVersion = false;
  const useClassVersion = true;

  const ToggleComponent = useClassVersion
    ? FeatureToggleClass
    : FeatureToggle;
  const versionLabel = useClassVersion
    ? "🔥 Using the CLASS-based FeatureToggle"
    : "✨ Using the FUNCTION-based FeatureToggle";

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>{versionLabel}</h2>

      <ToggleComponent isEnabled={true}>
        <div style={{ marginTop: "10px", padding: "10px", border: "1px solid #ccc" }}>
          AD311 WK8 Toggle Components.
        </div>
      </ToggleComponent>
    </div>
  );
}

export default App;

