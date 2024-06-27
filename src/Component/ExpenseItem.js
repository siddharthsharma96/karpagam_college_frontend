import { useNavigate } from "react-router-dom";
const ExpenseItem = ({ detail, handleDelete }) => {
  const navigate = useNavigate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const redirectHandler = () => {
    navigate(`/edit/${detail.id}`);
  };

  return (
    <li className="a">
      <div className="ab">
        <div className="flexbox flexbox-column flexbox-align-center date">
          <div className="month">
            {monthNames[new Date(detail.date).getMonth()]}
          </div>
          <div className="day">{new Date(detail.date).getDate()}</div>
        </div>
        <div className="ab">
          <h3 className="title">{detail.title}</h3>
          <span className="type-pill">
            {detail.type === 1 ? "Credit" : "Debit"}
          </span>
        </div>
      </div>
      <div className="ab">
        <div className="pill">{detail.currency}</div>
        <button className="actions" onClick={redirectHandler}>
          <span className="material-icons edit">edit</span>
        </button>
        <button className="actions" onClick={() => handleDelete(detail.id)}>
          <span className="material-icons delete">delete</span>
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
