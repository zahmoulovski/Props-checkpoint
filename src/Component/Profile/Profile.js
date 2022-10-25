import "./profile.css";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function Profile(props){
    const alertName = props.alertName
    return(
        <div className="profile">
        <h1>{props.fullName}</h1>
        <img src={props.image} width="200px" />
        <br/>
        <h4>{props.nickName}</h4>
        <p>{props.bio}</p>
        <Button
        variant="warning"
        onClick={() => alertName(props.nickName,props.sound)}
        className="btn btn-profile"
        >
        Wanna know who I'm?
        </Button>{' '}
        </div>
    );

}

export default Profile;

Profile.propTypes = {
    fullName: PropTypes.string,
    nickName: PropTypes.string,
    bio: PropTypes.string,
    sound: PropTypes.string,
    alertName: PropTypes.func
  };
  
  Profile.defaultProps = {
    fullName: "I have a name ",
    nickName: "I must have a nickname ",
    bio: "Google me dang it ",
    sound: "I'm not mute",
    alertName: () => {
      alert("Look for me on Wikipedia ");
    }
  };