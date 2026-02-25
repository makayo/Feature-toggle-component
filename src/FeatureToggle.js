function FeatureToggle({ isEnabled, children }) {
    if (!isEnabled) {
        return null;
    }

    return <>{children}</>;
}

export default FeatureToggle;
