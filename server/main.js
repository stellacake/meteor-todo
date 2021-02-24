import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { TasksCollection } from "/imports/db/TasksCollection";
import "/imports/api/tasksMethods";
import "/imports/api/tasksPublications";

const insertTask = (taskText, user) =>
	TasksCollection.insert({
		text: taskText,
		userId: user._id,
		createdAt: new Date(),
	});

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";

Meteor.startup(() => {
	if (!Accounts.findUserByUsername(SEED_USERNAME)) {
		Accounts.createUser({
			username: SEED_USERNAME,
			password: SEED_PASSWORD,
		});
	}

	const user = Accounts.findUserByUsername(SEED_USERNAME);

	if (TasksCollection.find().count() === 0) {
		[
			"First task",
			"Second task",
			"Third task",
			"Fourth task",
			"Fifth task",
			"Sixth task",
			"Seventh task",
		].forEach((taskText) => insertTask(taskText, user));
	}
});
