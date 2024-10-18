import React from 'react'

function Pending({ pendingTasks }) {
    const toggleTaskCompletion = async (goalPathId, taskId, completed) => {
        try {
          await axios.patch(`http://localhost:7001/user/goal/updateTaskStatus/${goalPathId}/${taskId}`, { completed });
      
          setTasks(tasks.map(task => task._id === taskId ? { ...task, completed } : task));
      
          // Remove from pending if task is marked completed
          if (completed) {
            setPendingTasks(pendingTasks.filter(task => task._id !== taskId));
          } else {
            setPendingTasks([...pendingTasks, tasks.find(task => task._id === taskId)]);
          }
          completedTasks = tasks.filter((task) => task.completed).length;
      
        } catch (error) {
          console.error(`Failed to ${completed ? 'mark as completed' : 'undo completion'}:`, error);
        }
      };
    
    return (
        <div>
            {pendingTasks.length > 0 && (
                <div className="mt-8 p-4 bg-yellow-100 rounded">
                    <h2 className="text-2xl font-bold mb-4">Pending Tasks</h2>
                    <ul className="space-y-4">
                        {pendingTasks.map(task => (
                            <li key={task._id} className="flex items-center justify-between p-4 bg-white rounded shadow">
                                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className="text-lg">
                                    {task.task} - {task.time} hours
                                </span>
                                <button onClick={() => toggleTaskCompletion(localStorage.getItem("goalId"), task._id, !task.completed)} className="text-2xl">
                                    {task.completed ? <TiTimesOutline className="text-red-500" /> : <TiTickOutline className="text-green-500" />}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Pending