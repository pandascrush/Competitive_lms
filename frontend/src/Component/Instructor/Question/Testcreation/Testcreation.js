
import React, { useState } from "react";
// import "./Testcreation.css";

function Testcreation() {
  const [modules] = useState([
    {
      id: 1,
      moduleName: "Aptitude",
      submodules: [
        { id: 1, name: "Percentage", questions: "" },
        { id: 2, name: "Profit and Loss", questions: "" },
      ],
    },
    {
      id: 2,
      moduleName: "General Knowledge",
      submodules: [
        { id: 3, name: "History", questions: "" },
        { id: 4, name: "Geography", questions: "" },
      ],
    },
    {
      id: 3,
      moduleName: "Reasoning",
      submodules: [
        { id: 5, name: "Logical Reasoning", questions: "" },
        { id: 6, name: "Data Interpretation", questions: "" },
      ],
    },
  ]);

  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedSubmoduleId, setSelectedSubmoduleId] = useState(null);
  const [addedSubmodules, setAddedSubmodules] = useState([]);

  const handleModuleSelect = (event) => {
    const moduleName = event.target.value;
    const module = modules.find((mod) => mod.moduleName === moduleName);
    setSelectedModule(module);
    setSelectedSubmoduleId(null); // Reset submodule selection
  };

  const handleSubmoduleSelect = (event) => {
    const submoduleId = parseInt(event.target.value, 10);
    setSelectedSubmoduleId(submoduleId);
  };

  const addPart = () => {
    if (selectedModule && selectedSubmoduleId !== null) {
      const submoduleToAdd = selectedModule.submodules.find(
        (sub) => sub.id === selectedSubmoduleId
      );

      setAddedSubmodules((prev) => {
        // Avoid duplicates
        if (!prev.some((sub) => sub.id === submoduleToAdd.id)) {
          return [...prev, submoduleToAdd];
        }
        return prev;
      });

      setSelectedSubmoduleId(null); // Reset the submodule selection
    }
  };

  return (
    <div className="container-fluid">
      <h3 className="text-center headinginstructor">Test Creation</h3>
      <div className="modpart p-3">
        <form>
          <div className="form-group">
            <div className="form-group-inner">
              <label>Test Name</label>
              <input
                type="text"
                className="fc1"
                placeholder="Enter your Test Name"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-group-inner">
              <label>Total Number of Questions</label>
              <input
                type="number"
                className="fc1"
                placeholder="Enter the total number of Questions"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-group-inner">
              <label>Course Selection</label>
              <select className="fc1 w-100">
                <option>Select the course</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <div className="form-group-inner">
              <label>Select Module</label>
              <select
                className="fc1 w-100 py-1"
                onChange={handleModuleSelect}
                value={selectedModule ? selectedModule.moduleName : ""}
              >
                <option>Select the module</option>
                {modules.map((module) => (
                  <option key={module.id}>{module.moduleName}</option>
                ))}
              </select>
            </div>
          </div>

          {selectedModule && (
            <div className="form-group">
              <div className="form-group-inner d-flex align-items-center">
                <label>Select Submodule</label>
                <select
                  className="fc1 w-100 py-2"
                  onChange={handleSubmoduleSelect}
                  value={selectedSubmoduleId || ""}
                >
                  <option value="">Select the submodule</option>
                  {selectedModule.submodules.map((submodule) => (
                    <option key={submodule.id} value={submodule.id}>
                      {submodule.name}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  className="m-2 updatebtn rounded-5 px-3 py-2 text-light"
                  onClick={addPart}
                >
                  +
                </button>
              </div>
            </div>
          )}

{/* {addedSubmodules.length > 0 && (
  <div className="form-group mt-3">
    <label className="mb-2">Selected Submodules:</label>
    <div className="list-unstyled row">
      {addedSubmodules.map((submodule) => (
        <div
          className="d-flex align-items-center mt-3"
          key={submodule.id}
        >
            
          <label className="me-3">{submodule.name}:</label>
          <input
            type="number"
            className="form-control inpbx"
            placeholder="Enter questions"
          />
        </div>
      ))}
    </div>
  </div>
)} */}


{addedSubmodules.length > 0 && (
  <div className="form-group mt-3">
    <label className="mb-2">Selected Submodules:</label>
    <table className="table " style={{border:"none"}}>
      
      <tbody className="bg-danger" style={{border:"none"}}>
        {addedSubmodules.map((submodule) => (
          <tr key={submodule.id} style={{border:"none"}}>
            <td style={{border:"none"}}><p>{submodule.name}</p></td>
            <td style={{border:"none"}}>
              <input
                type="number"
                className="form-control w-25 fc1"
                placeholder="Enter questions"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

          <div className="d-flex justify-content-end">
            <input type="submit" className="updatebtn text-light" value="Submit"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Testcreation;




