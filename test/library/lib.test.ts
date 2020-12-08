import { evaluate } from "../../src";
import code from "./vendors~index"

test("library", () => {
	console.time("test")
	const obj = evaluate(code);
	console.timeEnd("test")
	console.log(obj)
	// deepEqual(true, typeof obj.isTrue === "boolean");
	// deepEqual(true, obj.isTrue);
});

