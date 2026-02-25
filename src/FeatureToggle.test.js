import { render, screen } from "@testing-library/react";
import FeatureToggle from "./FeatureToggle";

describe("FeatureToggle Component", () => {

    // -------------------------
    // NORMAL TEST CASES
    // -------------------------

    test("renders children when isEnabled is true", () => {
        render(
            <FeatureToggle isEnabled={true}>
                <div>Visible Content</div>
            </FeatureToggle>
        );
        expect(screen.getByText("Visible Content")).toBeInTheDocument();
    });

    test("does not render children when isEnabled is false", () => {
        render(
            <FeatureToggle isEnabled={false}>
                <div>Hidden Content</div>
            </FeatureToggle>
        );
        expect(screen.queryByText("Hidden Content")).toBeNull();
    });

    test("renders multiple children when enabled", () => {
        render(
            <FeatureToggle isEnabled={true}>
                <p>Line One</p>
                <p>Line Two</p>
            </FeatureToggle>
        );
        expect(screen.getByText("Line One")).toBeInTheDocument();
        expect(screen.getByText("Line Two")).toBeInTheDocument();
    });

    // -------------------------
    // EDGE TEST CASES
    // -------------------------

    test("renders nothing when children are undefined", () => {
        render(<FeatureToggle isEnabled={true} />);
        // Should not crash, but also nothing to find
        expect(screen.queryByText(/./)).toBeNull();
    });

    test("treats truthy non-boolean isEnabled as enabled", () => {
        render(
            <FeatureToggle isEnabled={"yes"}>
                <div>Truthy Enabled</div>
            </FeatureToggle>
        );
        expect(screen.getByText("Truthy Enabled")).toBeInTheDocument();
    });

    test("treats falsy non-boolean isEnabled as disabled", () => {
        render(
            <FeatureToggle isEnabled={0}>
                <div>Falsy Disabled</div>
            </FeatureToggle>
        );
        expect(screen.queryByText("Falsy Disabled")).toBeNull();
    });

});
