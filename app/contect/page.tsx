export default function About() {
  return (
    <>
      <section>
        <div className="w-[80%] m-auto">
          <div className="lg:flex pt-40 pb-10">
            <div className="w-[20%]"></div>
            <div className="lg:w-[60%]  mr-2">
              <h2 className="text-5xl text-[#323232] font-bold ">
                Get In Touch
              </h2>
              <hr className=" my-5  h-2 border-t-0 bg-[#323232] opacity-100 dark:opacity-50 mr-[40%] lg:mr-[85%]" />
              <form>
                <div className="">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-5 mb-5 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-5 mb-5 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-3 py-10 mb-5 border border-gray-300 rounded-md"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#323232] hover:bg-[#6e6e6e] text-white font-bold py-5 px-14 rounded"
                >
                  SEND NOW
                </button>
              </form>
            </div>
          </div>
          <div className="w-[20%]"></div>
        </div>
      </section>
    </>
  );
}
