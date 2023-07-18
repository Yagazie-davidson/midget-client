import "./App.css";
import { motion } from "framer-motion";

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
          {/* <input
            type="text"
            name="short-url"
            placeholder="eg. 94sQErMXW"
            className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          /> */}
          <div className="flex">
            <div className="bg-slate-200 flex items-center px-3">
              something.com/
            </div>
            <div className="text-slate-400 px-3 py-2 bg-white border shadow-sm border-slate-300 w-full sm:text-sm rounded-r-lg">
              eg. 94sQErMXW
            </div>
          </div>
        </label>
        <motion.button
          aria-label="button to shorten URL"
          className="bg-indigo-600 px-3 py-1 text-white rounded-md"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Submit
        </motion.button>
        {/* </button> */}
      </form>
    </>
  );
}

function App() {
  return (
    <div className="grand h-screen  flex flex-col items-center place-content-center">
      <motion.div
        className="bg-white rounded-2xl w-2/5 py-12 px-16"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <div className="">
          <h1 className="text-center text-lg mb-2 font-bold">
            Midget- URL Shortner
          </h1>
          <Form />
        </div>
      </motion.div>
    </div>
  );
}

export default App;
