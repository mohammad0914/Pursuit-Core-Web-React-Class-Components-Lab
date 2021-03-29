const isClassComponent = (component) => {
  return !!(
    typeof component === "function" &&
    component.prototype &&
    component.prototype.isReactComponent
  );
};

export default isClassComponent;
