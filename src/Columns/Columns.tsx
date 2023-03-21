import "./Columns.css";

const Columns = (props: any) => {
  return (
    <div
      className="columns_Container"
      style={{
        marginLeft: props.hideSideBar ? "300px" : "0px",
      }}
    >
      <div className="columns_Container_First_Column">
        <div className="columns_Container_Header_Box">
          <div className="columns_Container_Header_ColorBall"></div>
          <a className="columns_Container_Header_Text">TODO (4)</a>
        </div>
        <div className="columns_Container_Box">
          <div className="columns_Container_Box_Sub_Box">
            <a className="columns_Container_Box_Title">
              Build UI for onboarding flow
            </a>
            <a className="columns_Container_Box_SubTask_Number">
              0 of 3 substasks
            </a>
          </div>
        </div>
      </div>
      <div className="columns_Container_Add_NewColumn">
        <button className="columns_Container_Add_NewColumn_Button">
          + Add New Column
        </button>
      </div>
    </div>
  );
};
export default Columns;
