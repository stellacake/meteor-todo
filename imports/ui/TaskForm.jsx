import { Meteor } from "meteor/meteor";
import React, { useState } from "react";

export const TaskForm = () => {
	const [text, setText] = useState("");

	const handleSumbit = (e) => {
		e.preventDefault();

		if (!text) return;

		Meteor.call("tasks.insert", text);

		setText("");
	};

	return (
		<form className="task-form" onSubmit={handleSumbit}>
			<input
				type="text"
				placeholder="click add a new task"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button type="submit"> Add task</button>
		</form>
	);
};
