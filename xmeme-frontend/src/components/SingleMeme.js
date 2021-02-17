import { Link } from 'react-router-dom';


// image card for the meme object recieved as a props. (bootstrap styling)
const SingleMeme = props => (
    <div >
        <div className="card">

            <div className="card-body">
                <img id="meme-img" width="100%" src={props.meme.url} alt="meme" />
                <hr />
                <h6 className="card-text">posted by: {props.meme.name} </h6>
                <h6 className="card-subtitle text-muted">{props.meme.caption} </h6>

                {/* link to EditMeme component */}
                <Link to={"/edit/" + props.meme.id} className="btn-sm btn-primary mr1" id="edit">Edit</Link>
                <Link to="#" className="btn-sm btn-danger" id="delete" onClick={() => props.deleteMeme(props.meme.id)}>Delete</Link>

            </div>
        </div>
        <br />
    </div >
)


export default SingleMeme;