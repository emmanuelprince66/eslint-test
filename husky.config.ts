export default {
  hooks: {
    "pre-commit": "tsc --noEmit && eslint . && lint-staged",
  },
};
