import React, { Component } from 'react';
// import { User } from '../requests'

export default class EditProfilePage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  userUpdate(event) {
    event.preventDefault();
    //User.update
  }

  render() {
    return (
      <main>
        <form onSubmit={this.userUpdate}>
          <div className="form-group">
            <label htmlFor="name">Name</label> <br />
            <input className="form-control" type="text" name="name" id="name" placeholder={sessionStorage.getItem('name')}/>
            <p><small>Other traders will see this name. If you change it, your deal completion score will be reset.</small></p>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label> <br />
            <input className="form-control" type="address" name="address" id="address" placeholder={sessionStorage.getItem('address')}/>
            <p><small>This won't be shown to other traders, it's just to get a rough measure on your distance from others.</small></p>
          </div>
          <div className="form-group">
            <label htmlFor="about">About me</label> <br />
            <textarea className="form-control" name="about" id="about" defaultValue={sessionStorage.getItem('about')}></textarea>
            <p><small>What do you specialize in growing? What produce do you look to acquire most often?</small></p>
          </div>
          <input className="float-left btn btn-outline-dark btn-sm" type="submit" value="Change Password" disabled/>
          <input className="float-right btn btn-outline-dark btn-sm" type="submit" value="Save" disabled/>
        </form>
      </main>
    )
  }
}