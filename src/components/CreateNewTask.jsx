/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import useMyContext from "../hooks/useMyContext";
import { useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import { IoIosAddCircleOutline } from "react-icons/io";


const CreateNewTask = ({ refetch }) => {
    const { user } = useMyContext();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosPrivate = useAxiosPrivate();
    const [adding, setAdding] = useState(false);

    const onSubmit = async (data) => {
        setAdding(true);
        // console.log(data);
        //add in db
        try {
            await axiosPrivate.post('/task', {
                email: user.email,
                task: data.taskName,
                description: data.description,
                priority: data.taskPriority,
                date: new Date().toISOString().split("T")[0],
                status: 'todo'
            });
            // close the modal
            document.getElementById('addNewTaskModal').close();
            //reset the from
            reset();
            //show alert
            Swal.fire({
                position: "center",
                icon: "success",
                title: `${data.taskName} added in To-Do List`,
                showConfirmButton: false,
                timer: 1000
            });
            //refresh the lists
            refetch();
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
        setAdding(false)
    };
    return (
        <div className="">
            {/* modal btn */}
            <button className="btn text-lg btn-accent" onClick={() => document.getElementById('addNewTaskModal').showModal()}>
                <IoIosAddCircleOutline className="text-2xl" />Add New Task
            </button>
            {/* modal */}
            <dialog id="addNewTaskModal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={() => reset()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    {/* modal content */}
                    <h2 className="font-bold text-2xl text-center">Add New Task</h2>
                    <div className="divider divider-accent w-2/3 mx-auto"></div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                        {/* task name */}
                        <div className="form-control indicator w-full">
                            <span className="indicator-item indicator-center badge text-accent font-bold">Task Name:</span>
                            <input
                                type="text"
                                {...register("taskName")}
                                placeholder="Your Task"
                                className="input input-bordered w-full" required />
                        </div>
                        {/* description */}
                        <div className="form-control indicator w-full">
                            <span className="indicator-item indicator-center badge text-accent font-bold">Task Description:</span>
                            <textarea
                                type="text"
                                {...register("description")}
                                placeholder="Your Task Description"
                                className="input input-bordered w-full h-24 py-2" required />
                        </div>
                        {/* priority */}
                        <div className="form-control indicator w-full">
                            <span className="indicator-item indicator-center badge text-accent font-bold">Set Task Priority:</span>
                            <select
                                type="text"
                                {...register("taskPriority",
                                    { validate: (value) => value !== 'none' })} defaultValue={"none"}
                                className="input input-bordered w-full" required >
                                <option value={"none"} >Set Priority</option>
                                <option value={1} className="">1. First</option>
                                <option value={2} className="">2. Second</option>
                                <option value={3} className="">3. Third</option>
                            </select>
                        </div>
                        {/* error */}
                        <div className="max-w-lg ">
                            {errors.taskPriority && <p className="text-center text-error font-semibold">Selecting a priority is Mandatory</p>}
                        </div>
                        {/* submit btn */}
                        <div className="form-control mt-5">
                            {adding ?
                                <button className="btn btn-accent text-white text-xl mx-auto">
                                    Adding<span className="loading loading-dots text-white"></span>
                                </button> :
                                <input type="submit" value="Add Task" className="btn btn-accent text-white text-xl mx-auto" />
                            }
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default CreateNewTask;