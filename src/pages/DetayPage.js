import React, { Component } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import { fullPath } from '../constants';
import { Link } from 'react-router-dom';


export default class DetayPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: {},
      yukleniyor: true
    }
  }
  componentDidMount() {
    const id = queryString.parse(this.props.location.search).id;
    axios.get(`${fullPath}/${id}`)
      .then(res => {
        this.setState({
          pet: res.data,
          yukleniyor: false
        });
      })
      .catch(err => {
        console.error(err.message);
        this.setState({
          yukleniyor: false
        });
      });
  }

  render() {
    const { name, breed, image, description, age } = this.state.pet;
    const Pet = (
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
    );
    const NoPet = (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h1>error</h1>
            <h2>page not found</h2>
            <h3>the requested URL <span className="text-danger">{this.props.location.pathname + this.props.location.search}</span> was not found</h3>
          </div>
        </div>
      </div>
    );
    const yukleniyor = (
      <div>Yukleniyor</div>
    );
    if(this.state.yukleniyor){
      return yukleniyor;
    }
    if(this.state.pet.name){
      return Pet;
    } else {
      return NoPet;
    }
  }
}
