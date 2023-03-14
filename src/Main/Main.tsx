import "./Main.css";
import sidebaricon from "../icons/sidebaricon.svg";
import kanbanheadertext from "../icons/kanbanheadertext.svg";
import boardwhiteicon from "../icons/boardwhiteicon.svg";
import boardgreyicon from "../icons/boardgreyicon.svg";
import boardblueicon from "../icons/boardblueicon.svg";
import sun from "../icons/sun.svg";
import moon from "../icons/moon.svg";
import eyeicon from "../icons/eyeicon.svg";
const Main = () => {
  return (
    <div className="main">
      <div className="MainSideBar">
        <div className="MainSideBar_Header_Box">
          <img className="MainSideBar_Icon" src={sidebaricon} />
          <img className="MainSideBar_Header" src={kanbanheadertext} />
        </div>
        <div className="MainSideBar_Boards_Box">
          <div className="MainSideBar_Boards_Number">ALL BOARDS (3)</div>
          <div className="MainSideBar_Boards_Board">
            <div className="MainSideBar_Boards_Board_Info_Box">
              <img
                className="MainSideBar_Boards_Board_Info_Box_whiteIcon"
                src={boardwhiteicon}
              />
              <a className="MainSideBar_Boards_Board_Info_Box_WhiteText">
                Platform Launch
              </a>
            </div>
            <div className="MainSideBar_Boards_Board_Info_Box">
              <img
                className="MainSideBar_Boards_Board_Info_Box_whiteIcon"
                src={boardgreyicon}
              />
              <a className="MainSideBar_Boards_Board_Info_Box_GreyText">
                Marketing Plan
              </a>
            </div>
            <div className="MainSideBar_Boards_Board_Info_Box">
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
        <div className="Main_Dark_Light_Box">
          <img className="Main_Dark_Light_Box_Icon" src={sun} />
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <img className="Main_Dark_Light_Box_Icon" src={moon} />.
        </div>
        <div className="HideSideBar">
          <div className="HideSideBar_Content_Box">
            <img className="eyeIcon" src={eyeicon} />
            Hide Sidebar
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
