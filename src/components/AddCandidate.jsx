import { Link, useNavigate } from "react-router-dom";

const AddCandidate = () => {
  const navigate = useNavigate();
  const handleAddCandidate =()=>{
    navigate('/candidateList');
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    const form = e.target;
    const candidate_name = form.candidateName.value;
    const candidate_photo = form.candidatePhoto.value;
    const candidate_mark = form.candidateMark.value;
    const candidate_id = form.candidateId.value;
    const voting_area = form.votingArea.value;
    const candidate = {candidate_name, candidate_photo, candidate_mark, candidate_id, voting_area};
    console.log(candidate);
    
  }
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-600">Add Candidate</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Candidate Name</span>
          </label>
          <input
            type="text"
            placeholder="Candidate Name"
            name="candidateName"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Candidate Photo</span>
          </label>
          <input
            type="url"
            placeholder="Candidate Photo URL"
            name="candidatePhoto"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Candidate Mark</span>
          </label>
          <input
            type="url"
            placeholder="Candidate Mark URL"
            name="candidateMark"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Candidate Id</span>
          </label>
          <input
            type="number"
            placeholder="candidate Id"
            name="candidateId"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button onClick={handleAddCandidate} className="btn btn-primary"><Link to='/candidateList'>ADD</Link></button>
        </div>
      </form>
    </div>
  );
};

export default AddCandidate;
