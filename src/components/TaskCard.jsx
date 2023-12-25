/* eslint-disable react/prop-types */
import { MdOutlineDeleteForever } from "react-icons/md";
import { Draggable } from 'react-beautiful-dnd';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Swal from "sweetalert2";

const TaskCard = ({ task, index, refetch }) => {
    const axiosPrivate = useAxiosPrivate();
    //delete task
    const handleDelete = async () => {
        await axiosPrivate.delete(`/task/${task._id}`).then(res => {
            // console.log(res.data);
            if (res.data.deletedCount) {
                //update site
                refetch();
                //show alert
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `The Task is Deleted.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }
    return (
        <Draggable draggableId={task._id} index={index}>
            {(provided) => (
                <div ref={provided.innerRef}
                    {...provided.draggableProps} {...provided.dragHandleProps}
                    className={`${task.status === 'todo' && "bg-base-100 card w-full shadow-xl mx-auto text-info" || task.status === 'done' && "bg-success card w-full shadow-xl mx-auto"} `}>
                    <div className="card-body flex-row justify-between items-center">
                        <div className=" flex-1">
                            <div className="flex items-center justify-around">
                                <h2 className="font-bold text-2xl">{task.task}</h2>
                                <div className="badge badge-outline text-white bg-amber-500 border-0">
                                    {task.priority === '1' ? "First" :
                                        task.priority === '2' ? "Second" : 'Third'}
                                </div>
                            </div>
                            <p className="text-lg">{task.description}</p>
                        </div>
                        {/* delete btn */}
                        <button onClick={handleDelete} className='text-error text-2xl btn btn-sm p-0 btn-outline hover:text-error'><MdOutlineDeleteForever /></button>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default TaskCard;