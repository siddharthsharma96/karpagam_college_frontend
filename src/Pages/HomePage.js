import { useEffect, useState } from "react";
import ExpenseItem from "../Component/ExpenseItem";
export const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:1234/expense_data");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setData(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:1234/expense_data/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete data with id ${id}`);
      }

      console.log(`Data with id ${id} deleted successfully`);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Error deleting data:", err.message);
    }
  };
  return (
    <div className="layout-container__wrapper">
      <div className="flexbox flexbox-justify-between flexbox-align-baseline">
        <h3>Expenses</h3>
        <span className="pill info">INR 770</span>
      </div>
      <hr />

      <div className="layout-container__expenses">
        <ul>
          {data.length > 0
            ? data.map((item) => {
                return (
                  <ExpenseItem
                    detail={item}
                    handleDelete={handleDelete}
                    // deleteExpenseById={deleteExpenseById}
                  />
                );
              })
            : "no data found"}
        </ul>
      </div>
    </div>
  );
};

// export default HomePage;
