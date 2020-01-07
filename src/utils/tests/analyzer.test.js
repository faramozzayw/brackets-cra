import analyzer from "./../analyzer";

const truthyCases = ["(0)", "1(1(1)+(2)0)", "1(23124)", "0(1(2(s)2)1)0"];
const falsyCases = ["(0)))", "()", ")(", "1((((24)", "0(1(2s)2)1)0"];

describe("analyzer function", () => {
	for (const $case of truthyCases) {
		test(`${$case} is truthy case`, () => {
			const { status } = analyzer($case);

			expect(status).toBeTruthy();
		});
	}

	for (const $case of falsyCases) {
		test(`${$case} is truthy case`, () => {
			const { status } = analyzer($case);

			expect(status).toBeFalsy();
		});
	}
});
