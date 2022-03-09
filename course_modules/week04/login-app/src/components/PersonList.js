/**
 * { personList }, App.js den gelen props
 * <PersonList personList={personList} />
 */
const PersonList = ({ personList }) => {
  return (
    <div className="user-information">
      {personList.map((person, index) => (
        <div key={index}>
          <h2>Your Information</h2>
          <ul>
            <li>Username: {person.username}</li>
            <li>Email: {person.email}</li>
            <li>Password: {person.password}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PersonList;
