import './HelloMessage.css';

function HelloMessage(props) {
  return (
    <div>
      Hello {props.name} date: {props.date} developer: {props.devName}
    </div>
  );
}

export default HelloMessage;