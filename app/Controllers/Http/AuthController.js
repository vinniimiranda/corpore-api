"use strict";

const User = use("App/Models/User");

class AuthController {
  async register({ request }) {
    const data = request.all();

    const user = await User.create({...data});

    return user;
  }

  async authenticate({ request, auth }) {
    const { email, password } = request.all();

    const token = await auth.attempt(email, password);

    return token;
  }

  async get() {
    return User.query().setHidden(['password', 'created_at', 'updated_at']).fetch()
  }
}

module.exports = AuthController;
