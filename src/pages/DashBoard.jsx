/* eslint-disable react/no-unescaped-entities */
import { useQuery } from '@tanstack/react-query';
import CreateNewTask from '../components/CreateNewTask';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import useMyContext from '../hooks/useMyContext';
import TaskList from '../components/TaskList';

const Dashboard = () => {
    const { user } = useMyContext();
    const axiosPrivate = useAxiosPrivate();
    // get tasks
    const { data: todos = [], refetch } = useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const { data } = await axiosPrivate.get(`/tasks?email=${user.email}&task=todo`);
            return data;
        }
    });
    const { data: dones = [] } = useQuery({
        queryKey: ['dones', todos],
        queryFn: async () => {
            const { data } = await axiosPrivate.get(`/tasks?email=${user.email}&task=done`);
            return data;
        }
    });
    return (
        <div>
            <h2 className='flex justify-between px-3 md:px-10 text-3xl underline items-center py-5'>Today's Tasks <CreateNewTask refetch={refetch} /></h2>
            
            {/* drag and drop */}
            <TaskList todos={todos} dones={dones} refetch={refetch} />

            {/* warring text */}
            <div className='card bg-white w-fit px-5 mx-3 lg:mx-auto my-10 text-xl italic text-center text-pretty'>
                <p className='text-error'>[ Warning: You can only drop a "To-Do" task into the "Complete" box, Not Elsewhere. So, be sure before drag and drop a task. ]</p>
            </div>
        </div>
    );
};

export default Dashboard;
