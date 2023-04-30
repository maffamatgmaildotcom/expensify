import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);



// export class LoginPage extends React.Component {
//   onSubmit = (login) => {
//   //  this.props.startAddExpense(expense);
//   //  this.props.history.push('/');
//   }
//   render() {
//     return (
//       <div>
//         <h1>Login</h1>
//         <button onSubmit={this.onSubmit}>
//           Login
//         </button>
//       </div>
//     );
//   }
// }

// export default LoginPage;