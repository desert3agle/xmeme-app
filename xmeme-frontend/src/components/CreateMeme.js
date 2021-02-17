import React, { Component } from 'react';
import axios from 'axios';
import SingleMeme from './SingleMeme'


//creat meme class component
class CreateMeme extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.deleteMeme = this.deleteMeme.bind(this);

        this.state = {
            name: '',
            caption: '',
            url: '',
            memeArray: []
        };

    }
    //GET (/memes endpoint) req in this lifecycle methods, helps getting data when component mounts
    componentDidMount() {
        axios.get('https://xmeme.harsh-vardhan.codes/memes')
            .then(response => {
                this.setState({
                    memeArray: response.data
                })
            })
            .catch((err) => {
                alert(err);
                console.log(err);
            })
    }

    //funtion to delete meme, recieves id. makes DELETE (/memes/:id endpoint) req to the server
    deleteMeme(memeId) {
        console.log(memeId);
        axios.delete('https://xmeme.harsh-vardhan.codes/memes/' + memeId)
            .then(() => {
                this.setState({
                    memeArray: this.state.memeArray.filter(index => index.id !== memeId)
                })
            })
            .catch(err => {
                alert(err);
                console.log(err);
            })


    }

    //changes the state on change of feild in form ( name url and caption)
    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    //on submit, data posted to backend through POST (/memes endpoint) request
    onSubmit(event) {

        event.preventDefault();

        const meme = {
            name: this.state.name,
            caption: this.state.caption,
            url: this.state.url
        }
        axios.post('https://xmeme.harsh-vardhan.codes/memes', meme)
            .then(memeId => {
                const newMeme = {
                    id: memeId.data.id,
                    name: this.state.name,
                    caption: this.state.caption,
                    url: this.state.url
                }
                //state updates if meme is posted succesfully
                this.setState({
                    memeArray: [newMeme, ...this.state.memeArray]
                });

            })
            .catch(err => {
                alert(err);
                console.log(err);
            });



    }
    // fun to loop over the array of objectes and display it on the page
    memeList() {
        return this.state.memeArray.map(currMeme => {
            return <div className="col-md-4 col-sm-6 col-12" ><SingleMeme meme={currMeme} deleteMeme={this.deleteMeme} key={currMeme.id} /></div>
        })
    }



    render() {
        return (
            // form to obtain data from user
            <div className="container">
                <section >
                    <div>
                        <h1 id="heading">Meme Stream</h1>
                    </div>
                    <hr />
                    <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <h6 id="heading">Meme Owner</h6>
                            <input
                                className="form-control"
                                required
                                id="name"
                                type="text"
                                placeholder="Enter your full name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <h6 id="heading">Caption</h6>
                            <input
                                className="form-control"
                                required
                                id="caption"
                                type="text"
                                placeholder="Be creative with caption"
                                value={this.state.caption}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <h6 id="heading">Meme URL</h6>
                            <input
                                className="form-control"
                                required
                                id="url"
                                type="url"
                                placeholder="Enter URL of your meme here"
                                value={this.state.url}
                                onChange={this.onChange}
                            />
                        </div>
                        <input className="btn btn-primary" id="submit-btn" type="submit" value="Submit" />
                    </form>
                    <br />
                </section>

                <section >
                    <div className="container">
                        <div className="row">
                            {/*funtion called to display memes below the form */}
                            {this.memeList()}
                        </div>
                    </div>
                </section>
            </div>
        );
    };
}


export default CreateMeme;