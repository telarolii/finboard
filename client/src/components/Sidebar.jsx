const Sidebar = () => {
  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-4">
      <h1 className="text-2xl font-bold text-amber-400">Finboard</h1>

      <nav className="mt-10 flex flex-col gap-2">
        <button className="text-left px-4 py-2 rounded-lg hover:bg-zinc-800 transition">
          Dashboard
        </button>
        <button className="text-left px-4 py-2 rounded-lg hover:bg-zinc-800 transition">
          Transactions
        </button>
        <button className="text-left px-4 py-2 rounded-lg hover:bg-zinc-800 transition">
          Widgets
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
