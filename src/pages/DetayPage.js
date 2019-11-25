import React, { Component } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import { fullPath } from '../constants';
import { Link } from 'react-router-dom';


export default class DetayPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: {}
    }
  }
  componentDidMount() {
    const id = queryString.parse(this.props.location.search).id
    axios.get(`${fullPath}/${id}`)
      .then(res => {
        this.setState({
          pet: res.data
        })
      });
  }

  render() {
    const { name, breed, image, description, age } = this.state.pet;
    return (
      <div className="col-lg-6 col-md-4 my-4 mx-auto">
        <h2><Link to="/">Geri Dön</Link></h2>
        <div className="card h-100">
          <img className="card-img-top" src={image} alt="" style={{ height: "292px" }} />
          <div className="card-body">
            <h4 className="card-title">
              {name}
              <div>
                <span className="badge badge-primary" style={{ fontSize: "12px" }}>{breed}</span>
              </div>
              <div>
                <span className="badge badge-warning" style={{ fontSize: "12px" }}>{age}</span>
              </div>
            </h4>
            <p className="card-text">
              {description}
            </p>
          </div>
          <div className="card-footer">
            <div className="btn btn-success">Favorilere Ekle</div>
          </div>
        </div>
      </div>
    )
  }
}
