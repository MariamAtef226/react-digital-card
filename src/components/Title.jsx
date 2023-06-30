import pp from "../assets/pp.webp"

function Title() {
  return (
    <>
      <div className="image">
        <img src={pp} alt="profile-picture" />
      </div>
      <div className="title-container">
        <h2>Mariam Atef Hassan</h2>
        <div className="title">Junior Frontend Developer</div>
      </div>
    </>
  );
}
export default Title;
