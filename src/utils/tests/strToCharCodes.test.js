import { strToCharCodes } from "./../func-utils";

const example = ["123", "qwerty", "___ ___", "pass1234"];
const result = [
	[49, 50, 51],
	[113, 119, 101, 114, 116, 121],
	[95, 95, 95, 32, 95, 95, 95],
	[112, 97, 115, 115, 49, 50, 51, 52],
];

describe("strToCharCodes function", () => {
	example.forEach((val, index) => {
		test(`"${val}" => [${result[index].join(", ")}]`, () => {
			expect(strToCharCodes(val)).toEqual(result[index]);
		});
	});
});
