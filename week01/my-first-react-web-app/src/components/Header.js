//Header function to create header section of web page
const Header = () => {

  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-primary">
      <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4 ">LOGO</span>
      </div>

      <ul className="nav nav-pills">
        <li className="nav-item nav-link text-white">Home</li>
        <li className="nav-item nav-link text-white">About</li>
        <li className="nav-item nav-link text-white">Contact</li>
      </ul>
    </header>
  );
};

export default Header;