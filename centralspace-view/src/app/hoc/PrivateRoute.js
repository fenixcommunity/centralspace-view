import React from "react";
import PropTypes from 'prop-types';
import { Route, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { connect as connectRedux } from "react-redux";
import ErrorPage from "../beautypage/components/error/ErrorPage";

const propTypes = {
  history: PropTypes.object.isRequired,
  authenticationInFirebase: PropTypes.object.isRequired,
  authenticatedInCentralspace: PropTypes.bool
}

const mapStateToProps = state => ({
  authenticationInFirebase: state.firebase.auth,
  authenticatedInCentralspace: state.centralspaceAuth.authenticatedInCentralspace
});

const mapDispatchToProps = {};

const enhance = compose(
  connectRedux(mapStateToProps, mapDispatchToProps)
);

const PrivateRoute = ({ history, component: Component, authenticationInFirebase, authenticatedInCentralspace, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        (!!authenticationInFirebase.uid || authenticatedInCentralspace)
          ? <Component {...props} />  // : <Redirect to="/signin" />
          : <ErrorPage headerText="Not Authorized"
            message="You are not authorized to view the requested page. Go to our homepage. We apologize for the inconvenience"
            goToFunc={() => history.push('/signin')} goToIconName="login"
          />
      }
    />
  );
};


PrivateRoute.propTypes = propTypes;

export default withRouter(enhance(PrivateRoute));