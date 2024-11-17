const Announcements = () => {
    const announcements = [
      { text: "Outing schedule for every department", time: "5 Minutes ago" },
      { text: "Meeting HR Department", time: "Yesterday, 12:30 PM" },
      { text: "IT Department needs 2 more designers", time: "Yesterday, 09:15 AM" },
    ];
  
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="font-bold text-lg mb-4">Announcements</h3>
        <ul className="space-y-3">
          {announcements.map((item, index) => (
            <li key={index} className="flex justify-between text-sm">
              <span>{item.text}</span>
              <span className="text-gray-500">{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Announcements;