import "./ViewTask.css";
import taskthreedots from "../icons/threedots.svg";
import arrow from "../icons/arrow.svg";
const ViewTask = (props: any) => {
  return (
    <div className="viewTask_Container">
      <div className="viewTask_Content_Box">
        <a className="viewTask_Content_Title">
          Research pricing points of various competitors and trial different
          business models
        </a>
        <img src={taskthreedots} className="viewTask_Content_threeDots" />
        <a className="viewTask_Content_Description">
          We know what we're planning to build for version one. Now we need to
          finalise the first pricing model we'll use. Keep iterating the
          subtasks until we have a coherent proposition.
        </a>
        <div className="viewTask_Content_SubTasks_Box">
          <a className="viewTask_Content_SubTasks_Number">Subtasks (2 of 3)</a>
          <div className="viewTask_Content_SubTasks_List">
            <input
              type="checkbox"
              className="viewTask_Content_SubTasks_List_Checkbox"
            />
            <a className="viewTask_Content_SubTasks_List_Title">
              Research competitor pricing and business models
            </a>
          </div>
          <div className="viewTask_Content_SubTasks_List">
            <input
              type="checkbox"
              className="viewTask_Content_SubTasks_List_Checkbox"
            />
            <a className="viewTask_Content_SubTasks_List_Title">
              Research competitor pricing and business models
            </a>
          </div>
        </div>
        <div className="viewTask_Content_Current_Status_Box">
          <a className="viewTask_Content_Current_Status_Text">Current Status</a>
          <input
            type="text"
            className="viewTask_Content_Current_Status_Input"
            placeholder="Doing"
          />
          <img src={arrow} className="viewTask_Content_Current_Status_Arrow" />
        </div>
      </div>
    </div>
  );
};
export default ViewTask;
