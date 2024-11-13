// import React, { useState, useEffect } from "react";
// import "./AddCategory.css";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer from react-toastify
// import "react-toastify/dist/ReactToastify.css"; // Import toast styles
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
// function AddCategory() {
//   const [categories, setCategories] = useState([]);
//   const [newCategory, setNewCategory] = useState("");
//   const [showInput, setShowInput] = useState(false);



//   const [inputs, setInputs] = useState([{ id: 1, value: '' }]);

//   const handleAddInput = () => {
//     setInputs([...inputs, { id: inputs.length + 1, value: '' }]);
//   };

//   const handleInputChange = (id, newValue) => {
//     setInputs(inputs.map(input => 
//       input.id === id ? { ...input, value: newValue } : input
//     ));

//   }

  
//   // Fetch categories when the component mounts
//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = () => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}category/getcategory`)
//       .then((res) => {
//         const fetchedCategories = res.data.result.map((category) => ({
//           name: category.course_category_name,
//           id: category.course_category_id,
//         }));
//         setCategories(fetchedCategories);
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error);
//         toast.error("Error fetching categories");
//       });
//   };

//   const handleAddCategory = () => {
//     if (newCategory.trim() === "") return; // Check if newCategory is empty

//     console.log(newCategory);

//     axios
//       .post(`${process.env.REACT_APP_API_URL}category/addcategory`, {
//         course_category_name: newCategory,
//       })
//       .then((response) => {
//         if (
//           response.data.message === "Quiz and context created successfully."
//         ) {
//           toast.success("Category added successfully");
//           fetchCategories(); // Refresh the category list
//           setShowInput(false); // Hide input after successful addition
//           setNewCategory(""); // Clear the input field
//         }
//       })
//       .catch((error) => {
//         console.error("Error adding new category:", error);
//         toast.error("Error adding new category");
//       });
//   };

//   return (
//     // <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
//     //   {/* ToastContainer for displaying toasts */}
//     //   <ToastContainer />
//     //   <div
//     //     className="card p-4 crdcolorforcard"
//     //     style={{ width: "600px", height: "400px" }}
//     //   >
//     //     <h4 className="text-center mb-5 headinginstructor">Course Category Creation</h4>
//     //     <div className="d-flex align-items-center">
//     //       <select className="form-select">
//     //         <option value="">Select a category</option>
//     //         {categories.map((category) => (
//     //           <option key={category.id} value={category.name}>
//     //             {category.name}
//     //           </option>
//     //         ))}
//     //       </select>
//     //       <button
//     //         className="ms-2 plusbtn text-light px-2"
//     //         onClick={() => setShowInput(!showInput)}
//     //       >
//     //         +
//     //       </button>
//     //     </div>

//     //     {showInput && (
//     //       <div className="mt-3">
//     //         <input
//     //           type="text"
//     //           value={newCategory}
//     //           onChange={(e) => setNewCategory(e.target.value)}
//     //           placeholder="Enter new category"
//     //           className="form-control"
//     //         />
//     //         <button
//     //           className="btnaddcategory mt-2 rounded-2 text-light p-2"
//     //           onClick={handleAddCategory}
//     //         >
//     //           Add
//     //         </button>
//     //       </div>
//     //     )}
//     //   </div>
//     // </div>


//    <div className="container-fluid p-0">
//      <h4 className="text-center mb-5 headinginstructor">Course Category Creation</h4>
//     <div className="row m-3 modpart p-3">
   
   
//       <div className="col-sm-12 col-md-7">
//       <div className="d-flex align-items-center">
//             {/* <select className="form-select p-3 fc1">
//             <option value="">Select a category</option>
//              {categories.map((category) => (
//                <option key={category.id} value={category.name}>
//                  {category.name}
//                </option>
//              ))}
//            </select> */}
//            <input type="text" className="fc1 form-control" placeholder="Enter the Category name"/>
//            <button
//              className="ms-2 plusbtn text-light px-2"
//            onClick={() => setShowInput(!showInput)}>+</button>
//          </div>
//          <button className="mt-4 rounded-2 updatebtn p-2" onClick={handleAddCategory}>Submit</button>
//          </div>
     
//       <div className="col-sm-12 col-md-5 ">
//         <div className="px-0 px-md-5">
//       <h4 className="mb-4 mt-4 mt-md-0 categorytitle">Added Category List</h4>
// <div>
//       {categories.map((category) => (
//         <div key={category.id} className="card p-2 d-flex flex-row justify-content-between fc1">
//           <p className="m-0">{category.name}</p>
//           <div>
//             <FontAwesomeIcon icon={faPencilAlt} className="me-2" style={{ cursor: 'pointer',color:'#ffa200' }} />
//             <FontAwesomeIcon icon={faTrash} style={{ cursor: 'pointer',color:'#ffa200' }} />
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//       </div>
//       </div>
//     </div>
   
//   );
// }

// export default AddCategory;





import React, { useState, useEffect } from "react";
import "./AddCategory.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

function AddCategory() {
  const [categories, setCategories] = useState([]);
  const [inputFields, setInputFields] = useState([{ id: 1, value: "" }]);

  // Fetch categories when the component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}category/getcategory`)
      .then((res) => {
        const fetchedCategories = res.data.result.map((category) => ({
          name: category.course_category_name,
          id: category.course_category_id,
        }));
        setCategories(fetchedCategories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        toast.error("Error fetching categories");
      });
  };

  const handleAddCategory = () => {
    inputFields.forEach(input => {
      if (input.value.trim()) {
        axios
          .post(`${process.env.REACT_APP_API_URL}category/addcategory`, {
            course_category_name: input.value,
          })
          .then((response) => {
            if (
              response.data.message === "Quiz and context created successfully."
            ) {
              toast.success("Category added successfully");
              fetchCategories();
            }
          })
          .catch((error) => {
            console.error("Error adding new category:", error);
            toast.error("Error adding new category");
          });
      }
    });
  };

  const handleAddInputField = () => {
    setInputFields([...inputFields, { id: inputFields.length + 1, value: "" }]);
  };

  const handleInputChange = (id, newValue) => {
    setInputFields(
      inputFields.map((input) =>
        input.id === id ? { ...input, value: newValue } : input
      )
    );
  };

  return (
    <div className="container-fluid p-0">
      <ToastContainer />
      <h4 className="text-center mb-5 headinginstructor">Course Category Creation</h4>
      <div className="row m-3 modpart p-1 p-lg-5">
        <div className="col-sm-12 col-md-7">
          {inputFields.map((input) => (
            <div key={input.id} className="d-flex align-items-center mb-2">
              <input
                type="text"
                className="fc1 form-control"
                placeholder="Enter Category name"
                value={input.value}
                onChange={(e) => handleInputChange(input.id, e.target.value)}
              />
              <button
                className="ms-2 plusbtn text-light px-2"
                onClick={handleAddInputField}
              >
                +
              </button>
            </div>
          ))}
          <button
            className="mt-4 rounded-2 updatebtn p-2"
            onClick={handleAddCategory}
          >
            Submit
          </button>
        </div>

        <div className="col-sm-12 col-md-5">
          <div className="px-0 px-md-5">
            <h4 className="mb-4 mt-4 mt-md-0 categorytitle">Added Category List</h4>
            <div>
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="card p-2 fc1">
                  <p className="m-0">{category.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
