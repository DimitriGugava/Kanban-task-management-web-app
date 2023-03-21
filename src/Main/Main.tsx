import "./Main.css";
import sidebaricon from "../icons/sidebaricon.svg";
import kanbanheadertext from "../icons/kanbanheadertext.svg";
import boardwhiteicon from "../icons/boardwhiteicon.svg";
import boardgreyicon from "../icons/boardgreyicon.svg";
import boardblueicon from "../icons/boardblueicon.svg";
import sun from "../icons/sun.svg";
import moon from "../icons/moon.svg";
import eyeicon from "../icons/eyeicon.svg";
import threedots from "../icons/threedots.svg";
import { useState } from "react";
import kanbanheadertextwhite from "../icons/kanbanheadertextwhite.svg";
import NewBoard from "../NewBoard/newboard";

import EditTask from "../EditTask/editTask";
import ViewTask from "../ViewTask/ViewTask";
import SideBar from "../SideBar/SideBar";
import eye from "../icons/eye.svg";

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [hideSideBar, setHideSideBar] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const lightModeStyles = {
    backgroundColor: "white",
    color: "black",
  };

  const darkModeStyles = {
    backgroundColor: "black",
    color: "white",
  };

  const styles = darkMode ? darkModeStyles : lightModeStyles;

  const toggleHideSideBar = () => {
    setHideSideBar(!hideSideBar);
  };

  return (
    <>
      {/* <NewBoard darkMode={darkMode} /> */}
      {/* <EditTask darkMode={darkMode} /> */}

      {/* <ViewTask darkMode={darkMode} /> */}
      <div
        className="main"
        style={{
          backgroundColor: darkMode ? "#20212C" : "#F4F7FD",
        }}
      >
        {hideSideBar ? (
          <SideBar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            toggleHideSideBar={toggleHideSideBar}
          />
        ) : (
          <>
            <div
              className="MainSideBar_Header_Box"
              style={{
                position: hideSideBar ? "relative" : "absolute",
                backgroundColor: darkMode ? "#2B2C37" : "white",
                marginTop: hideSideBar ? "0px" : "-4px",
                width: hideSideBar ? "0px" : "290px",
                height: hideSideBar ? "0px" : "97px",
              }}
            >
              <img className="MainSideBar_Icon" src={sidebaricon} />
              {!darkMode ? (
                <img className="MainSideBar_Header" src={kanbanheadertext} />
              ) : (
                <img
                  className="MainSideBar_Header"
                  src={kanbanheadertextwhite}
                />
              )}
            </div>
            <button className="showSideBar" onClick={toggleHideSideBar}>
              <img src={eye} className="showSideBar_EyeIcon" />
            </button>
          </>
        )}
        <div
          className="MainHeader_Box"
          style={{
            backgroundColor: darkMode ? "#2B2C37" : "white",
            marginTop: hideSideBar ? "0px" : "0px",
          }}
        >
          <a
            className="Main_HeaderBox_Text"
            style={{ color: darkMode ? "white" : "Black" }}
          >
            Platform Launch
          </a>
          <div className="Main_HeaderBox_AddTask_Box">
            <button className="Main_HeaderBox_AddTask_Button">
              + Add New Task
            </button>
            <img className="Main_HeaderBox_ThreeDots" src={threedots} />
          </div>
        </div>
        <div className="MainContainer_Center_ContentBox">
          <a className="MainContainer_Center_ContentBox_Text">
            This board is empty. Create a new column to get started.
          </a>
          <button className="MainContainer_Center_ContentBox_Button">
            + Add New Column
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;
