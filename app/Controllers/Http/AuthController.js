"use strict";

const User = use("App/Models/User");

class AuthController {
  async register({ request }) {
    const data = request.only(["username", "email", "password", "company_id"]);

    const user = await User.create(data);

    return user;
  }

  async authenticate({ request, auth }) {
    const { email, password } = request.all();

    const token = await auth.attempt(email, password);

    return token;
  }

  async get() {
    return User.query().with('company').fetch()
  }
}

module.exports = AuthController;
