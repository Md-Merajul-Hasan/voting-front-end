
const Home = () => {
    return (
        <div className="font-bold">
            <section className="flex flex-col gap-4 w-1/2 mx-auto border-2 bg-green-200 border-green-300 text-center p-3 mt-10 rounded-2xl">
                <p className="text-3xl font-bold">Start Election</p>
                <button className="bg-green-600 p-2 rounded-xl w-full hover:bg-green-800 hover:text-white">Start</button>
            </section>
            <section className="flex flex-col gap-4 w-1/2 mx-auto border-2 bg-green-200 border-green-300 text-center p-3 mt-10 rounded-2xl">
                <p className="text-3xl font-bold">Election has been Started</p>
                <button className="bg-green-600 p-2 rounded-xl w-full hover:bg-green-800 hover:text-white">Vote</button>
            </section>
            <section className="bg-red-500 p-3 rounded-xl w-1/2 mx-auto mt-12 text-center text-yellow-400">
                <p>Election is not started yet!</p>
                <p>Please wait for the starting time of the Election</p>
            </section>
            <section className="bg-red-500 p-3 rounded-xl w-1/2 mx-auto mt-12 text-center text-yellow-400">
                <p>Election is over!</p>
                <p>Hope you have contributed on that</p>
                <button className="bg-green-600 p-2 rounded-xl w-full text-black mt-2 hover:bg-green-800 hover:text-white">See Result</button>
            </section>
        </div>
    );
};

export default Home;