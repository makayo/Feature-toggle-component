import { render, screen } from "@testing-library/react";
import FeatureToggle from "./FeatureToggle";

describe("FeatureToggle Component", () => {

    // -------------------------
    // NORMAL TEST CASES
    // -------------------------

    test("renders featureName when isEnabled is true", () => {
        render(<FeatureToggle isEnabled={true} featureName="Dark Mode" />);
        expect(screen.getByText("Dark Mode")).toBeInTheDocument();
    });

    test("renders disabled message when isEnabled is false", () => {
        render(<FeatureToggle isEnabled={false} featureName="Chat Widget" />);
        expect(
            screen.getByText("Feature Chat Widget is disabled")
        ).toBeInTheDocument();
    });

    test("renders correct featureName for another enabled feature", () => {
        render(<FeatureToggle isEnabled={true} featureName="Search Bar" />);
        expect(screen.getByText("Search Bar")).toBeInTheDocument();
    });

    // -------------------------
    // EDGE TEST CASES
    // -------------------------

    test("handles empty featureName string", () => {
        render(<FeatureToggle isEnabled={false} featureName="" />);
        expect(
            screen.getByText("Feature is disabled")
        ).toBeInTheDocument();
    });


    test("handles undefined featureName", () => {
        render(<FeatureToggle isEnabled={false} />);
        expect(
            screen.getByText("Feature undefined is disabled")
        ).toBeInTheDocument();
    });

    test("handles non-boolean isEnabled (truthy value)", () => {
        render(<FeatureToggle isEnabled={"yes"} featureName="Beta Mode" />);
        expect(screen.getByText("Beta Mode")).toBeInTheDocument();
    });

});
