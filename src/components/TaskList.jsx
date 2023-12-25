/* eslint-disable react/prop-types */
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Swal from "sweetalert2";



const TaskList = ({ todos, dones, refetch }) => {
    const axiosPrivate = useAxiosPrivate();

    // console.log(taskList);
    const handleDrag = async (result) => {
        // console.log(result);
        if (result.destination.droppableId !== "done") return;
        try {
            //update the task status
            await axiosPrivate.patch(`/task/${result.destination.droppableId}/${result.draggableId}`);
            //refetch lists
            refetch();
            //show alert
            Swal.fire({
                position: "center",
                icon: "success",
                title: 'Task List Updated',
                showConfirmButton: false,
                timer: 1000
            });
        } catch (err) {
            console.log(err.message);
            Swal.fire({
                position: "center",
                icon: "error",
                title: `${err.message}`,
                showConfirmButton: false,
                timer: 2500
            });
        }
    };
    return (
        // main container
        <div className="flex flex-col md:flex-row justify-around gap-5">
            {/* todo part*/}
            <DragDropContext onDragEnd={handleDrag}>
                <Droppable droppableId={"todo"}>
                    {(provided) => (
                        <div className="bg-base-200 md:w-1/2 p-5 rounded-xl border-2 border-info mx-1"
                            ref={provided.innerRef} {...provided.droppableProps}>
                            <h2 className="text-2xl text-center underline text-info font-bold">Todo</h2>
                            {/* todo tasks list */}
                            {todos.length === 0 ?
                                <h3 className="text-center text-xl text-accent font-bold my-5">None</h3> :
                                <div className="flex flex-col gap-3  w-full p-5">
                                    {todos?.map((task, index) => <TaskCard key={task._id} task={task} index={index} refetch={refetch} />)}
                                </div>
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                {/* completed part*/}
                <Droppable droppableId="done">
                    {(provided) => (
                        <div className="bg-base-200 md:w-1/2 p-5 rounded-xl border-2 border-success mx-1"
                            ref={provided.innerRef} {...provided.droppableProps}>
                            <h2 className="text-2xl text-center underline font-bold">Completed</h2>
                            {/* completed tasks list */}
                            {dones.length === 0 ?
                                <h3 className="text-center text-xl text-accent font-bold my-5">None</h3> :
                                <div className="flex flex-col gap-3 w-full p-5 text-white">
                                    {dones?.map((task, index) => <TaskCard key={task._id} task={task} index={index} refetch={refetch} />)}
                                </div>}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default TaskList;