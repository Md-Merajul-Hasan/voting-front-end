import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin  = () =>{
    navigate('/addCandidate')
  }
  const handleSubmit =()=>{
    e.preventDefault();
  }
  return (
    <div onSubmit={handleSubmit} className="w-11/12 mx-auto">
        <p className="text-center text-3xl font-bold text-blue-600">Login</p>
        <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Voting Area Id</span>
          </label>
          <input
            type="number"
            placeholder="Voting Area Id"
            name="areaId"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Branch Manager</span>
          </label>
          <input
            type="text"
            placeholder="Branch Manager"
            name="branchManager"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Login Key</span>
          </label>
          <input
            type="password"
            name="loginKey"
            placeholder="Login Key"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
