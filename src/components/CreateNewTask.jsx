import { useForm } from "react-hook-form";
import useMyContext from "../hooks/useMyContext";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useState } from "react";


const CreateNewTask = () => {
    const { user } = useMyContext();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const [adding, setAdding] = useState(false)

    const onSubmit = (data) => {
        setAdding(true);
        console.log(data);
        //add in db
        setAdding(false)
    };
    return (
        <div>
            {/* modal btn */}
            <button className="btn" onClick={() => document.getElementById('addNewTaskModal').showModal()}>Add New Task</button>
            {/* modal */}
            <dialog id="addNewTaskModal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
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
                                <input type="submit" value="Add Task" className="btn btn-accent text-white text-xl mx-auto" />}
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default CreateNewTask;