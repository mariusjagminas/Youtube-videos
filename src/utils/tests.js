import renderer from "react-test-renderer";
import propTypesFunc from "check-prop-types";

export const checkIfMatchSnapshot = component => {
  return it("should match a snapshot", () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
};

export const checkPropTypes = (component, props) => {
  return it("should have correct propTypes", () => {
    const result = propTypesFunc(
      component.propTypes,
      props,
      "props",
      component.name
    );
    expect(result).toBe(undefined);
  });
};
