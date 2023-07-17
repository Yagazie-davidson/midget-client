import "./App.css";

function Form() {
  return (
    <>
      <form className="space-y-4">
        <label htmlFor="long-link" className="block">
          <span className="block text-slate-700">Enter You Long URL</span>
          <input
            type="text"
            name="long-url"
            placeholder="https://youlongurl.com"
            className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
        </label>
        <label htmlFor="short-url" className="block">
          <span className="block text-slate-700">Your Midget URL</span>
          <input
            type="text"
            name="short-url"
            placeholder="eg. 94sQErMXW"
            className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
        </label>
        <button
          type="submit"
          className="bg-indigo-600 px-3 py-1 text-white rounded-md"
          aria-label="button to shorten URL"
        >
          Submit
        </button>
      </form>
    </>
  );
}

function App() {
  return (
    <div className="grand h-screen  flex flex-col items-center place-content-center">
      <div className="bg-white rounded-2xl w-2/5 py-12 px-16">
        <h1 className="text-center text-lg mb-2">Midget- URL Shortner</h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
