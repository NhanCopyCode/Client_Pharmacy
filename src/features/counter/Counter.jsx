import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

const Counter = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div className="text-center mt-10">
			<h1 className="text-3xl mb-4">Count: {count}</h1>
			<button
				onClick={() => dispatch(increment())}
				className="mx-2 px-4 py-2 bg-green-500 text-white rounded"
			>
				+
			</button>
			<button
				onClick={() => dispatch(decrement())}
				className="mx-2 px-4 py-2 bg-red-500 text-white rounded"
			>
				-
			</button>
			<button
				onClick={() => dispatch(reset())}
				className="mx-2 px-4 py-2 bg-gray-500 text-white rounded"
			>
				Reset
			</button>
		</div>
	);
};

export default Counter;
