import React from "react";
import Layout from "../../components/Layout";
import checkLogin from "../../lib/checkLogin";
import redirect from "../../lib/redirect";
import RatesPresenter from "./ratesPresenter";

class RatesContainer extends React.Component {
  static async getInitialProps(context) {
    const { loggedInUser } = await checkLogin(context.apolloClient);

    if (!loggedInUser.ok) {
      redirect(context, "/login");
    }

    return { loggedInUser };
  }
  render() {
    return (
      <Layout loggedInUser={this.props.loggedInUser}>
        <RatesPresenter loggedInUser={this.props.loggedInUser} />
      </Layout>
    );
  }
}

export default RatesContainer;
