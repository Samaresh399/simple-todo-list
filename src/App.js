import "./App.css";

function App() {
  return (
    <div className="grid place-items-center bg-slate-200 h-screen">
      <div class="md:w-[500px] h-5/6 p-3 flex flex-col rounded shadow-xl bg-white space-y-2">
        <div class="flex items-center justify-between p-2 gap-2">
          <input class="w-5/6 p-2 rounded-md border-2 border-slate-200 focus:border-slate-300 shadow-sm focus:shadow-lg focus:outline-none focus:scale-105 transition" />
          <button class="py-2 px-3 rounded-md border-2 border-green-600 bg-green-500 text-white hover:border-green-500 hover:bg-green-400 focus:border-green-700 focus:bg-green-600">
            Add
          </button>
        </div>
        <div class="flex-grow bg-slate-100 shadow-inner flex flex-col">
          <div class="h-full grid place-items-center">
            <span class="text-xl text-slate-400">No Task Added Yet!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
