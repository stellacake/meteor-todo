import React, { useState } from "react";
import { TasksCollection } from "/imports/api/TasksCollection";

export const TaskForm = ({ user }) => {
	const [text, setText] = useState("");

	const handleSumbit = (e) => {
		e.preventDefault();

		if (!text) return;

		TasksCollection.insert({
			text: text.trim(),
			createdAt: new Date(),
			userId: user._id,
		});

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
