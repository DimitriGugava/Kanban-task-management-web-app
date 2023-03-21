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
import kanbanheadertextwhite from "../icons/kanbanheadertextwhite.svg";
import NewBoard from "../NewBoard/newboard";

import EditTask from "../EditTask/editTask";
import ViewTask from "../ViewTask/ViewTask";
import SideBar from "../SideBar/SideBar";
import eye from "../icons/eye.svg";
import data from "../data.json";
import React, { useState, useEffect } from "react";
import Columns from "../Columns/Columns";

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [hideSideBar, setHideSideBar] = useState(true);
  const [boardsInfo, setBoardsInfo] = useState<Board[]>([]);
  const [newBoard, setNewBoard] = useState(false);
  const [columnsInfo, setColumnsInfo] = useState(false);

  interface Task {
    title: string;
    description: string;
    status: string;
    subtasks: {
      title: string;
      isCompleted: boolean;
    }[];
  }

  interface Column {
    name: string;
    tasks: Task[];
  }

  interface Board {
    name: string;
    columns: Column[];
  }

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

  const createNewBoard = () => {
    setNewBoard(!newBoard);
  };

  useEffect(() => {
    setBoardsInfo(data.boards);
  }, []);

  const addInput = (newInput: any) => {
    setBoardsInfo([...boardsInfo, newInput]);
  };

  return (
    <>
      {newBoard ? <NewBoard darkMode={darkMode} addInput={addInput} /> : null}

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
            setNewBoard={setNewBoard}
            boardsInfo={boardsInfo}
            createNewBoard={createNewBoard}
            setBoardsInfo={setBoardsInfo}
            hideSideBar={hideSideBar}
          />
        ) : (
          <>
            <div
              className="MainSideBar_Header_Box"
              style={{
                position: hideSideBar ? "relative" : "absolute",
                backgroundColor: darkMode ? "#2B2C37" : "white",
                marginTop: hideSideBar ? "0px" : "-4px",
                marginLeft: hideSideBar ? "0px" : "0px",
                width: hideSideBar ? "0px" : "300px",
                height: hideSideBar ? "0px" : "101px",
                borderRight: hideSideBar ? "none" : "0.1px solid #E4E6EB",
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

        {!columnsInfo ? (
          <Columns hideSideBar={hideSideBar} />
        ) : (
          <div className="MainContainer_Center_ContentBox">
            <a className="MainContainer_Center_ContentBox_Text">
              This board is empty. Create a new column to get started.
            </a>
            <button className="MainContainer_Center_ContentBox_Button">
              + Add New Column
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
