import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="flex-1 p-6 overflow-auto">
          <div className="border border-dashed border-zinc-800 rounded-2xl h-full flex items-center justify-center">
            <p className="text-zinc-500">Dashboard Content</p>
          </div>
        </main>
      </div>
    </div>
  );
}
