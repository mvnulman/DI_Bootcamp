import './Hello.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Hello = ({user}) => {
  // const {user} = props;
  const {name, email, username} = user;
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <h3>{name}</h3>
      <h4>{email}</h4>
      <p>{username}</p>
    </div>
  )
}
export default Hello;
