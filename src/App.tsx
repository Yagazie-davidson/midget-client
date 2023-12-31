import "./App.css";
import { motion } from "framer-motion";
import { ColorRing } from "react-loader-spinner";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { LuClipboardList, LuClipboardCheck } from "react-icons/lu";

function Form() {
  const baseUrl: string = import.meta.env.VITE_BASE_URL as string; //Import base URL from environment variables
  const [url, setUrl] = useState(""); //Original input state
  const [shortUrl, setShortUrl] = useState("");
  const [copy, setCopy] = useState(false);
  const [loading, setLoading] = useState(false);
  // Handle fetch request
  const handlePostUrl = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); //Prvent on click refresh
    try {
      setLoading(true);
      setCopy(false);
      setShortUrl("");
      const res = await fetch(`${baseUrl}/urlshort`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          originalUrl: url,
        }),
      });
      const data = await res.json();
      setShortUrl(data.shortUrl);
    } catch (err) {
      alert(err);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  // Loading text display
  let loadingDisplay: string;
  if (loading) {
    loadingDisplay = "Generating your link. Please wait ";
  } else if (shortUrl !== "") {
    loadingDisplay = shortUrl;
  } else {
    loadingDisplay = `eg. ${baseUrl}/94sQErMXW`;
  }
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
            className="px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
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
            "Generate"
          )}
        </motion.button>
        {shortUrl && (
          <label htmlFor="short-url" className="block">
            <span className="block text-slate-700">Your Midget URL</span>
            <div className="flex justify-between items-center text-slate-400 bg-white border shadow-sm border-slate-300 w-full sm:text-sm rounded px-3 py-4">
              <input
                type="text"
                name="short-url"
                value={loadingDisplay}
                readOnly
                placeholder="https://yourlongurl.com"
                className={`placeholder-slate-400 focus:outline-none focus:border-0 block w-full rounded-md sm:text-sm  ${
                  shortUrl && "underline text-black"
                }`}
              />
              <CopyToClipboard
                text={shortUrl}
                onCopy={() => {
                  setCopy(true);
                  alert("copied to clipbord");
                }}
              >
                {copy ? (
                  <LuClipboardCheck
                    className="cursor-pointer"
                    aria-label="paste from clipboard"
                    size="1rem"
                    color="black"
                  />
                ) : (
                  <LuClipboardList
                    className="cursor-pointer"
                    aria-label="copy to clipboard"
                    size="1rem"
                    color="black"
                  />
                )}
              </CopyToClipboard>
            </div>
          </label>
        )}
        {/* </button> */}
      </form>
    </>
  );
}

function App() {
  return (
    <div className="grand h-screen  flex flex-col items-center place-content-center">
      <motion.div
        className="bg-white rounded-2xl py-12 px-10 sm:px-16 w-80 sm:w-2/4"
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
