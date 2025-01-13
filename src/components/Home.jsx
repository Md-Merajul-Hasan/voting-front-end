import { Link } from "react-router-dom";

const Home = () => {
    const handleStartElection = () =>{

    }
    const handleVote= ()=> {

    }
    return (
        <div className="font-bold">
            <section className="flex flex-col gap-4 w-1/2 mx-auto border-2 bg-green-200 border-green-300 text-center p-3 mt-24 rounded-2xl">
                <p className="text-3xl font-bold">Start Election</p>
                <Link to='/addCandidate'><button onClick={handleStartElection} className="bg-green-600 p-2 rounded-xl w-full hover:bg-green-800 hover:text-white">Start</button></Link>
            </section>
        </div>
    );
};

export default Home;