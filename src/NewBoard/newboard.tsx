import "./newboard.css";

const Newboard = () => {
  return (
    <div className="newBoardCont">
      <button className="NewBoard_Close">X</button>
      <div className="newBoardBox">
        <h1 className="newBoardBox_Header_Text">Add New Board</h1>
        <div className="newBoardBox_Content_Box">
          <div className="newBoardBox_Content_Box_Sub_Box">
            <a className="newBoardBox_Content_Box_Title_Text">Name</a>
            <input
              type="text"
              className="newBoardBox_Content_Box_Title_Input"
              placeholder="e.g. Web Design"
            />
          </div>
          <div className="newBoardBox_Content_Box_Sub_Second_Box">
            <a className="newBoardBox_Content_Box_Title_Text">Columns</a>
            <input
              type="text"
              className="newBoardBox_Content_Box_Title_Input"
              placeholder="e.g. Todo"
            />
            <input
              type="text"
              className="newBoardBox_Content_Box_Title_Input"
              placeholder="e.g. Doing"
            />
            <button className="newBoardBox_Content_Box_Add_Collumnt">
              + Add New Column
            </button>
          </div>
        </div>
        <button className="newBoardBox_Content_Create_New_Board">
          Create New Board
        </button>
      </div>
    </div>
  );
};

export default Newboard;
