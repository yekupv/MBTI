export default function tasksReducer(activeIndex, action) {
	switch (action.type) {
		case "added": {
			return action.id;
		}

		default: {
			throw Error("Unknown action: " + action.type);
		}
	}
}
