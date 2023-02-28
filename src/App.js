import { useEffect, useState } from 'react';
import './App.css';

import { ChromePicker } from 'react-color'


function App() {

  // DECLARING VARIABLES

  const [tasks, setTasks] = useState(() => {
    const localDataTask = localStorage.getItem("MyTaskList");  // Tasks List
    return localDataTask ? JSON.parse(localDataTask) : [];
  });

  const [newTask, setNewTask] = useState("");  // Add New Task

  const [noteTitle, setNoteTitle] = useState(() => {
    const localDataTitle = localStorage.getItem("NoteTitle");  // Title Note
    return localDataTitle ? JSON.parse(localDataTitle) : "My Note";
  })

  const [themeColor, setThemeColor] = useState(() => {
    const localDataBackgroundColor = localStorage.getItem("BackgroundColorSettings");   // Background Color
    return localDataBackgroundColor ? JSON.parse(localDataBackgroundColor) : "#b7b6bb";
  });

  const [noteColor, setNoteColor] = useState(() => {
    const localDataNoteColor = localStorage.getItem("NoteColorSettings");   // Note Color
    return localDataNoteColor ? JSON.parse(localDataNoteColor) : "#ffb100";
  });

  const [fontColor, setFontColor] = useState(() => {
    const localDataFontColor = localStorage.getItem("FontColorSettings");   // Font Color
    return localDataFontColor ? JSON.parse(localDataFontColor) : "#000000";
  });

  const [accentColor, setAccentColor] = useState(() => {
    const localDataAccentColor = localStorage.getItem("AccentColorSettings");   // Accent Color
    return localDataAccentColor ? JSON.parse(localDataAccentColor) : "#483948";
  });

  const [sizeX, setSizeX] = useState(() => {
    const localDataSizeX = localStorage.getItem("SizeXSettings");   // Size X
    return localDataSizeX ? JSON.parse(localDataSizeX) : 400;
  });

  const [sizeY, setSizeY] = useState(() => {
    const localDataSizeY = localStorage.getItem("SizeYSettings");   // Size Y
    return localDataSizeY ? JSON.parse(localDataSizeY) : 500;
  });

  const [titleSize, setTitleSize] = useState(() => {
    const localDataTitleSize = localStorage.getItem("TitleSizeSettings");   // Title Font Size
    return localDataTitleSize ? JSON.parse(localDataTitleSize) : 25;
  });

  const [contentSize, setContentSize] = useState(() => {
    const localDataContentSize = localStorage.getItem("ContentSizeSettings");   // Content Font Size
    return localDataContentSize ? JSON.parse(localDataContentSize) : 15;
  });

  // EDITE TASKS LIST

  const addNewTask = () => {
    setTasks((currentList) => [...currentList, [newTask],]); // Add New Task To List (by button +)
    setNewTask('');
  };

  const addNewTaskEnter = (event) => {
    if (event.key === 'Enter') {
      setTasks((currentList) => [...currentList, [newTask],]);  // Add New Task To List (by "Enter" key) 
      setNewTask('');
    }
  };

  const deleteTask = (x) => {
    setTasks((current) => current.filter((task) => task !== tasks[x]));   // Delete Task From List
  };


  // LOCAL MEMORY STORAGE

  useEffect(() => {
    localStorage.setItem("MyTaskList", JSON.stringify(tasks))   // Save Tasks List
  }, [tasks])

  useEffect(() => {
    localStorage.setItem("NoteTitle", JSON.stringify(noteTitle)) // Save Title
  }, [noteTitle])

  useEffect(() => {
    localStorage.setItem("BackgroundColorSettings", JSON.stringify(themeColor)) // Save Background Color
  }, [themeColor])

  useEffect(() => {
    localStorage.setItem("NoteColorSettings", JSON.stringify(noteColor)) // Save Note Color
  }, [noteColor])

  useEffect(() => {
    localStorage.setItem("FontColorSettings", JSON.stringify(fontColor)) // Save Font Color
  }, [fontColor])

  useEffect(() => {
    localStorage.setItem("AccentColorSettings", JSON.stringify(accentColor)) // Save Accent Color
  }, [accentColor])

  useEffect(() => {
    localStorage.setItem("SizeXSettings", JSON.stringify(sizeX)) // Save Size X
  }, [sizeX])

  useEffect(() => {
    localStorage.setItem("SizeYSettings", JSON.stringify(sizeY)) // Save Size Y
  }, [sizeY])

  useEffect(() => {
    localStorage.setItem("TitleSizeSettings", JSON.stringify(titleSize)) // Save Title Font Size
  }, [titleSize])

  useEffect(() => {
    localStorage.setItem("ContentSizeSettings", JSON.stringify(contentSize)) // Save Content Font Size
  }, [contentSize])



  // OPEN WINDOW FUNCTIONS

  const [isActive, setIsActive] = useState(false);    // Open Settings Window
  const OpenSettingWindow = () => {
    setIsActive(current => !current);
  }

  const [isActiveBckground, setIsActiveBckground] = useState(true);    // Open Background Color Picker
  const OpenColorBackground = () => {
    setIsActiveBckground(current => !current);

  }

  const [isActiveNote, setIsActiveNote] = useState(false);    // Open Note Color Picker
  const OpenColorNote = () => {
    setIsActiveNote(current => !current);
  }

  const [isActiveFont, setIsActiveFont] = useState(false);    // Open Font Color Picker
  const OpenColorFont = () => {
    setIsActiveFont(current => !current);
  }

  const [isActiveAccent, setIsActiveAccent] = useState(false);    // Open Accent Color Picker
  const OpenColorAccent = () => {
    setIsActiveAccent(current => !current);
  }


  // DEFAULT SETTINGS 

  const DefaultSettings = () => {
    setThemeColor("#b7b6bb");
    setNoteColor("#ffb100");
    setFontColor("#000000");
    setAccentColor("#483948");
    setSizeX(400);
    setSizeY(500);
    setTitleSize(25);
    setContentSize(15);
  }






  return (


    <div className="MainContainer" style={{ backgroundColor: themeColor }}>

      <button className="SettingsButton" onClick={OpenSettingWindow}>Settings</button>



      <div className={`SettingsContainer ${isActive ? "On" : "Off"}`}>

        <div className='ColorContainer'>
          <div className="ColorTitle">Background Color</div>
          <button className="ColorBtn" onClick={OpenColorBackground} style={{ backgroundColor: themeColor }}> </button>
        </div>

        <div className={`BackgroundColorPicker ${isActiveBckground ? "On" : "Off"}`}>
          <ChromePicker
            disableAlpha
            color={themeColor}
            onChange={e => setThemeColor(e.hex)} />
        </div>



        <div className='ColorContainer'>
          <div className="ColorTitle">Note Color</div>
          <button className="ColorBtn" onClick={OpenColorNote} style={{ backgroundColor: noteColor }}> </button>
        </div>

        <div className={`NoteColorPicker ${isActiveNote ? "On" : "Off"}`}>
          <ChromePicker
            disableAlpha
            color={noteColor}
            onChange={e => setNoteColor(e.hex)} />
        </div>


        <div className='ColorContainer'>
          <div className="ColorTitle">Font Color</div>
          <button className="ColorBtn" onClick={OpenColorFont} style={{ backgroundColor: fontColor }}> </button>
        </div>

        <div className={`FontColorPicker ${isActiveFont ? "On" : "Off"}`}>
          <ChromePicker
            disableAlpha
            color={fontColor}
            onChange={e => setFontColor(e.hex)} />
        </div>


        <div className='ColorContainer'>
          <div className="ColorTitle">Accent Color</div>
          <button className="ColorBtn" onClick={OpenColorAccent} style={{ backgroundColor: accentColor }}> </button>
        </div>

        <div className={`AccentColorPicker ${isActiveAccent ? "On" : "Off"}`}>
          <ChromePicker
            disableAlpha
            color={accentColor}
            onChange={e => setAccentColor(e.hex)} />
        </div>


        <div className="DimentionContainer">

          <div className='HorizontalSettings'>
            ↔
            <input
              className='HorizontalSlider'
              type="range"
              min="100" max="1000"
              value={sizeX}
              onChange={e => setSizeX(e.target.value)}
              step="5"
            />
            <input
              className='HorizontalInput'
              type="text"
              value={sizeX}
              onChange={e => setSizeX(e.target.value)}
            />
          </div>


          <div className='VerticalSettings'>
            ↕
            <input
              className='VerticalSlider'
              type="range"
              orient="vertical"
              min="100" max="1000"
              value={sizeY}
              onChange={e => setSizeY(e.target.value)}
              step="5"
            />
            <input
              className='VerticalInput'
              type="text"
              value={sizeY}
              onChange={e => setSizeY(e.target.value)}
            />
          </div>

        </div>


        <div className="FontSizeContainer">
          <div className="FontSize">
            Title Font Size:
            <input
              type="text"
              value={titleSize}
              onChange={e => setTitleSize(e.target.value)}
            />
          </div>

          <div className="FontSize">
            Content Font Size:
            <input
              type="text"
              value={contentSize}
              onChange={e => setContentSize(e.target.value)}
            />
          </div>
        </div>


        <button
          className='DefaultSettingBtn'
          onClick={DefaultSettings}>Default</button>

      </div>

      <div className="NoteContainer"
        style={{
          backgroundColor: noteColor,
          boxShadow: `8px 8px 24px 0px ${accentColor}`,
          width: `${sizeX}px`,
          height: `${sizeY}px`
        }}>

        <div className="TitleContainer">
          <input
            style={{
              color: fontColor,
              fontSize: `${titleSize}px`,
              borderBottom: `0.1rem solid ${accentColor}`
            }}
            className='TitleInput'
            type="text"
            value={noteTitle}
            onChange={e => setNoteTitle(e.target.value)}
          />
        </div>

        <div className="AddNewContainer"
          style={{ borderBottom: `0.1rem solid ${accentColor}` }}>

          <textarea
            className="NewInput"
            style={{
              color: fontColor,
              fontSize: `${contentSize}px`
            }}
            type="text"
            spellCheck="false"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            onKeyDown={addNewTaskEnter}
          />

          <button className="NewButton" onClick={addNewTask} style={{ color: fontColor }}>+</button>

        </div>

        <div className="ListContainer">

          <ul >
            {tasks.map((e) => (
              <li
                key={tasks.indexOf(e)}
                onClick={() => deleteTask(tasks.indexOf(e))}
                style={{
                  fontSize: `${contentSize}px`,
                  borderBottom: `0.1rem solid ${accentColor}`
                }}
              >
                <span
                  style={{
                    color: fontColor,
                    fontSize: `${contentSize}px`
                  }}
                > {e} </span>{" "}
              </li>
            ))}

          </ul>

        </div>

      </div>

    </div>
  );
}

export default App;
