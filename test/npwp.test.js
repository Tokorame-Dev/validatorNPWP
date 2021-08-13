const npwp = require("./../index");

test("npwp", () => {
    expect(npwp("01.855.081.4-412.000")).toBe(true);
});
