/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
const F1 = ({ changePage, updateForm }) => (
  <div>
    <form onSubmit={(e) => changePage(e)}>
      <input type="text" name="name" placeholder="Name..." onChange={(e) => updateForm(e)} />
      <input type="text" id="email" name="email" placeholder="Email..." onChange={(e) => updateForm(e)} />
      <input type="text" id="password" name="password" placeholder="Password..." onChange={(e) => updateForm(e)} />
      <button type="submit">Next</button>
    </form>
  </div>
);

export default F1;
