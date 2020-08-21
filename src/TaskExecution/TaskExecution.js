import React from 'react';
import movie from '../assets/automation.mov';
import ChatField from '../shared/ChatField/ChatField';
import './TaskExecution.css';

const TaskExecution = () => {
  const startAutomationVideo = () => {
    let video = document.getElementById('automationVideo');
    if (video.paused) video.play();
  };

  return (
    <div className="task-execution-wrapper">
      <div className="task-execution-left-pane">
        <div className="chat-field-wrapper">
          <ChatField startAutomation={startAutomationVideo} />
        </div>
      </div>
      <div className="task-execution-right-pane">
        <video id="automationVideo">
          <source src={movie} />
        </video>
      </div>
    </div>
  );
};

export default TaskExecution;
