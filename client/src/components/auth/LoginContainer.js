import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
