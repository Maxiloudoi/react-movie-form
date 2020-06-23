import React from 'react';

import '../App.css';
import Axios from 'axios';

class FormMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      poster: '',
      comment: '',
    };

    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
  }

  postEmployee() {
    const url = 'https://post-a-form.herokuapp.com/api/movies/';
    const data = this.state;
    Axios.post(url, data)
      .then((res) => res.data)
      .then((res) => {
        alert(`Film ajouté avec l'ID ${res.id} !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un Film: ${e.message}`);
      });
  }

  render() {
    return (
      <div className="FormEmployee">
        <h1>Saisie d'un film</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="lastname">Movie Name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                onChange={this.onChange}
                value={this.state.lastname}
              />
            </div>

            <div className="form-data">
              <label htmlFor="firstname">Poster URL</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                onChange={this.onChange}
                value={this.state.firstname}
              />
            </div>

            <div className="form-data">
              <label htmlFor="email">Comment</label>
              <input
                type="textarea"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormMovie;
