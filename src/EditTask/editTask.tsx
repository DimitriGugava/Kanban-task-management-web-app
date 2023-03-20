import "./editTask.css";
import closeicon from "../icons/close.svg";
import arrow from "../icons/arrow.svg";
const EditTask = () => {
  return (
    <div className="editTask_Container">
      <div className="editTask_Box">
        <h1 className="editTask_Header_Text">Edit Task</h1>
        <div className="editTask_Content_Box">
          <div className="editTask_Content_Box_Title">
            <h1 className="editTask_Content_Box_Title_Text">Title</h1>
            <input
              className="editTask_Content_Box_Title_Input"
              type="text"
              placeholder="Enter Task Title"
            />
          </div>
          <div className="editTask_Content_Box_Description_Box">
            <h1 className="editTask_Content_Box_Title_Text">Description</h1>
            <div className="editTask_Content_Box_Description_Input_Box">
              <input
                className="editTask_Content_Box_Description_Input"
                type="text"
                placeholder="e.g. It’s always good to take a break."
              />
            </div>
          </div>
          <div className="editTask_Content_Box_SubTask_Box">
            <a className="editTask_Content_Box_SubTask_HeaderText">Subtasks</a>
            <div className="editTask_Content_Box_SubTask_InputBox">
              <input
                className="editTask_Content_Box_SubTask_Input"
                type="text"
                placeholder="e.g. Make coffee"
              />
              <img
                className="editTask_Content_Box_SubTask_Close"
                src={closeicon}
              />
            </div>
            <div className="editTask_Content_Box_SubTask_InputBox">
              <input
                className="editTask_Content_Box_SubTask_Input"
                type="text"
                placeholder="e.g. Drink coffee & smile"
              />
              <img
                className="editTask_Content_Box_SubTask_Close"
                src={closeicon}
              />
            </div>
            <button className="editTask_Content_Box_SubTask_Button">
              + Add New Subtask
            </button>
          </div>
          <div className="editTask_Content_Box_Status_Box">
            <a className="editTask_Content_Box_Status_Box_Header">Status</a>
            <div className="editTask_Content_Box_Status_Box_Input_Box">
              <input
                className="editTask_Content_Box_Status_Box_Input"
                type="text"
              />
              <img
                className="editTask_Content_Box_Status_Box_Arrow"
                src={arrow}
              />
            </div>
          </div>
        </div>
        <button className="editTask_Content_Box_Create_Taskbnt">
          Create Task
        </button>
      </div>
    </div>
  );
};

export default EditTask;
