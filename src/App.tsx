import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";

function Form() {
  const baseUrl: string = import.meta.env.VITE_BASE_URL as string; //Import base URL from environment variables
  const [url, setUrl] = useState(""); //Original input state
  const [shortUrl, setShortUrl] = useState(null);
  // const [urlId, setUrlId] = useState(null);
  const [loading, setLoading] = useState(false);
  // Handle fetch request
  const handlePostUrl = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); //Prvent on click refresh
    try {
      setLoading(true);
      const res = await fetch(`${baseUrl}/urlshort`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          originalUrl: url,
        }),
      });
      const data = await res.json();
      setShortUrl(data.shortUrl);
      // setUrlId(data.urlId);
    } catch (err) {
      alert(err);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form className="space-y-4">
        <label htmlFor="long-link" className="block">
          <span className="block text-slate-700">Enter Your Long URL</span>
          <input
            type="text"
            name="long-url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://yourlongurl.com"
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
            {/* <div className="bg-slate-200 flex items-center px-3">
              {baseUrl}/
            </div> */}
            <div className="text-slate-400 px-3 py-2 bg-white border shadow-sm border-slate-300 w-full sm:text-sm rounded-r-lg">
              {shortUrl ? (
                <a href={shortUrl} className="underline text-black">
                  {shortUrl}
                </a>
              ) : (
                `eg. ${baseUrl}/94sQErMXW`
              )}
            </div>
          </div>
        </label>
        <motion.button
          aria-label="button to shorten URL"
          className={`bg-indigo-600 px-3 py-1 text-white rounded-md ${
            loading ? "cursor-not-allowed" : null
          }`}
          whileHover={{ scale: 1.1 }}
          onClick={handlePostUrl}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {loading ? (
            <ColorRing
              visible={true}
              height="20"
              width="30"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#ffff", "#ffff", "#ffff", "#ffff", "#ffff"]}
            />
          ) : (
            "Submit"
          )}
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
