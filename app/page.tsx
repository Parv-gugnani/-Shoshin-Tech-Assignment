import Sidebar from "./components/Sidebar";
const cardsData = [
  { title: "Available Position", value: 24, subtext: "4 Urgently Needed", color: "bg-red-100" },
  { title: "Job Open", value: 10, subtext: "4 Active Hiring", color: "bg-blue-100" },
  { title: "New Employees", value: 24, subtext: "4 Departments", color: "bg-pink-100" },
];

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 w-full">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-3 gap-4">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              value={card.value}
              subtext={card.subtext}
              color={card.color}
            />
          ))}
        </div>
      </main>
    </div>
  );
}