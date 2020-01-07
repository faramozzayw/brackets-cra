import Stack from "./../Stack";

describe("Stack", () => {
	test("Create Stack without arguments for construction", () => {
		const stack = new Stack();

		expect(stack.length).toEqual(0);
		expect(stack.type).toEqual("left");
		expect(stack.empty()).toBeTruthy();
		expect(stack.toString()).toEqual("[]");
	});

	test("Create Stack with arguments 'data' for construction as const", () => {
		const stack = new Stack([1, 2, 3]);

		expect(stack.length).toEqual(3);
		expect(stack.type).toEqual("left");
		expect(stack.empty()).toBeFalsy();
		expect(stack.toString()).toEqual("[1, 2, 3]");
	});

	test("Create Stack with arguments 'data' for construction with using pop() and push()", () => {
		let stack = new Stack([1, 2, 3]);

		expect(stack.length).toEqual(3);
		expect(stack.type).toEqual("left");
		expect(stack.empty()).toBeFalsy();
		expect(stack.toString()).toEqual("[1, 2, 3]");

		stack
			.push(4)
			.push(5)
			.push(6)
			.push(7);

		expect(stack.length).toEqual(7);
		expect(stack.pop()).toEqual(7);
		expect(stack.pop()).toEqual(6);
		expect(stack.pop()).toEqual(5);
		expect(stack.pop()).toEqual(4);
		expect(stack.pop()).toEqual(3);
		expect(stack.pop()).toEqual(2);
		expect(stack.pop()).toEqual(1);

		expect(stack.length).toEqual(0);
		expect(stack.empty()).toBeTruthy();
	});
});
