import "./SideBar.css";
import sidebaricon from "../icons/sidebaricon.svg";
import kanbanheadertextwhite from "../icons/kanbanheadertextwhite.svg";
import kanbanheadertext from "../icons/kanbanheadertext.svg";
import boardwhiteicon from "../icons/boardwhiteicon.svg";
import boardgreyicon from "../icons/boardgreyicon.svg";
import boardblueicon from "../icons/boardblueicon.svg";
import sun from "../icons/sun.svg";
import moon from "../icons/moon.svg";
import eyeicon from "../icons/eyeicon.svg";
import threedots from "../icons/threedots.svg";
const SideBar = (props: any) => {
  return (
    <div
      className="MainSideBar"
      style={{ backgroundColor: props.darkMode ? "black" : "white" }}
    >
      <div className="MainSideBar_Header_Box">
        <img className="MainSideBar_Icon" src={sidebaricon} />
        {!props.darkMode ? (
          <img className="MainSideBar_Header" src={kanbanheadertext} />
        ) : (
          <img className="MainSideBar_Header" src={kanbanheadertextwhite} />
        )}
      </div>
      <div className="MainSideBar_Boards_Box">
        <div className="MainSideBar_Boards_Number">ALL BOARDS (3)</div>

        <div className="MainSideBar_Boards_Board">
          {props.boardsInfo.map((board: any, index: any) => (
            <div
              className="MainSideBar_Boards_Board_Info_Box_Wrap"
              style={{
                backgroundColor: props.darkMode
                  ? "black"
                  : " rgb(178, 185, 193)",
              }}
            >
              <div
                className="MainSideBar_Boards_Board_Info_Box"
                style={{ color: props.darkMode ? "white" : "grey" }}
              >
                <img
                  className="MainSideBar_Boards_Board_Info_Box_whiteIcon"
                  src={boardwhiteicon}
                />
                <a className="MainSideBar_Boards_Board_Info_Box_WhiteText">
                  {board.name}
                </a>
              </div>
            </div>
          ))}
          <div
            className="MainSideBar_Boards_Board_Info_Box"
            onClick={props.createNewBoard}
          >
            <img
              className="MainSideBar_Boards_Board_Info_Box_whiteIcon"
              src={boardblueicon}
            />
            <a className="MainSideBar_Boards_Board_Info_Box_BlueText">
              + Create New Board
            </a>
          </div>
        </div>
      </div>
      <div
        className="Main_Dark_Light_Box"
        style={{
          backgroundColor: props.darkMode ? "#20212C" : "#F4F7FD",
        }}
      >
        <img className="Main_Dark_Light_Box_Icon" src={sun} />
        <label className="switch">
          <input type="checkbox" onClick={props.toggleDarkMode} />
          <span className="slider"></span>
        </label>
        <img className="Main_Dark_Light_Box_Icon" src={moon} />.
      </div>
      <div className="HideSideBar">
        <div
          className="HideSideBar_Content_Box"
          onClick={props.toggleHideSideBar}
        >
          <img className="eyeIcon" src={eyeicon} />
          Hide Sidebar
        </div>
      </div>
    </div>
  );
};

export default SideBar;
