
import { useState } from 'react';
import Controls from './components/Controls';
import Form from './components/Form';
import Title from './components/Title';
import ListTask from './components/ListTask';

function App() {
  //mock data
  const initListTask = [
    {taskId:1,taskName:"Đỗ Văn Tưởng",level:0},
    {taskId:2,taskName:"Đỗ Văn Tưởng",level:1},
    {taskId:3,taskName:"Đỗ Văn Tưởng",level:2},
  ];

  //tạo state listTask
  const [listTasks,setListTask] = useState(initListTask)

  //Form: Show/hide
  const [isToggle, setToggle] = useState(false);


  //AddOrEdit
  const handleAddOrEdit = (toggle,task)=>{
    setToggle(toggle);
    console.log(task);
    setTask(task)
  }

  const elementForm = (isToggle===true)? <Form onToggle={handleAddOrEdit}/>:"";

  return (

    <>
      <div className="container">
        {/* TITLE : START */}
          <Title />
        {/* TITLE : END */}
        {/* CONTROL (SEARCH + SORT + ADD) : START */}
          <Controls onToggle={handleAddOrEdit}/>
        {/* CONTROL (SEARCH + SORT + ADD) : END */}
        {/* FORM : START */}
          {elementForm}
        {/* FORM : END */}
        {/* LIST : START */}
          <ListTask renderListTasks = {listTasks} onEdit={handleAddOrEdit}/>
      </div>
      {/*
		This HTML file is a template.
		If you open it directly in the browser, you will see an empty page.
		You can add webfonts, meta tags, or analytics to this file.
		The build step will place the bundled scripts into the <body> tag.
		To begin the development, run `npm start` or `yarn start`.
		To create a production bundle, use `npm run build` or `yarn build`.
	*/}
      {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}
      {/* Include all compiled plugins (below), or include individual files as needed */}
    </>

  );
}

export default App;
