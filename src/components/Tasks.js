import {useState} from 'react'



const Tasks = () => {
    const [tasks,setTasks] = useState(
        [
            {
                id: 1,
                text: 'Doctors Appointment',
                day: 'Fec 5th at 2.30pm',
                reminder: true,
            },
            {
                id: 2,
                text: 'School Appointment',
                day: 'Fec 10th at 4.30pm',
                reminder: true,
            },
            {
                id: 3,
                text: 'Food shopping',
                day: 'Fec 5th at 2.30pm',
                reminder: false,
            }
        ]
    )

  return (
    <>
        {tasks.map((task)=> (
        <h3 key={task.id}>{task.text}</h3>
        ))}
    </>
  )
}

export default Tasks