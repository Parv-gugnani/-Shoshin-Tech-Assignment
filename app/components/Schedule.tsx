const Schedule = () => {
    const schedule = [
      { title: "Review candidate applications", time: "11:30 AM" },
      { title: "Interview with candidates", time: "10:30 AM" },
      { title: "Meeting with product designer", time: "09:15 AM" },
    ];
  
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="font-bold text-lg mb-4">Upcoming Schedule</h3>
        <ul className="space-y-3">
          {schedule.map((item, index) => (
            <li key={index} className="flex justify-between text-sm">
              <span>{item.title}</span>
              <span className="text-gray-500">{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Schedule;