import { useState } from 'react';

const ToDoList = () => {
	const [tasks, setTasks] = useState(['Eat banana', 'Clean the room', 'Hit the gym']);
	const [newTask, setNewTask] = useState('');

	const handleInputChange = (event) => {
		setNewTask(event.target.value);
	};

	const handleAdd = () => {
		if (newTask.trim() !== '') {
			const updatedTasks = [...tasks, newTask];
			setTasks(updatedTasks);
			setNewTask('');
		}
	};

	const handleRemove = (index) => {
		setTasks((t) => t.filter((_, i) => i !== index));
	};

	const handleMoveUp = (index) => {
		if (index > 0) {
			const updateTasks = [...tasks];
			[updateTasks[index], updateTasks[index - 1]] = [
				updateTasks[index - 1],
				updateTasks[index],
			];
			setTasks(updateTasks);
		}
	};

	const handleMoveDown = (index) => {
		if (index < tasks.length - 1) {
			const updateTasks = [...tasks];
			[updateTasks[index], updateTasks[index + 1]] = [
				updateTasks[index + 1],
				updateTasks[index],
			];
			setTasks(updateTasks);
		}
	};

	return (
		<>
			<div>
				<h1>To Do List</h1>
				<input
					type="text"
					placeholder="Enter a task"
					value={newTask}
					onChange={handleInputChange}
				/>
				<button onClick={handleAdd}>Add</button>

				<ol>
					{tasks.map((task, index) => (
						<li key={index}>
							<span>{task}</span>
							<button onClick={() => handleRemove(index)}>Delete</button>
							<button onClick={() => handleMoveUp(index)}>Up</button>
							<button onClick={() => handleMoveDown(index)}>Down</button>
						</li>
					))}
				</ol>
			</div>
		</>
	);
};

export default ToDoList;
