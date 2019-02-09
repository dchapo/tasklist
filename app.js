const taskName = document.querySelector('#task');
const taskBtn = document.querySelector('.btn');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');


// Add 
taskBtn.addEventListener("click", addTask);

function addTask(e) {
  if (taskName.value === '') {
    alert('Please enter a value');
  } else {

  //Create an li with value to tasklist
  const li = document.createElement("li");

  // Add class
  li.setAttribute('class', 'collection-item');

  // Create text node and append to li
  const tasks = document.createTextNode(taskName.value);
  li.appendChild(tasks);
  taskList.appendChild(li);
 
  // Add link element  
  const a = document.createElement("a");
  a.setAttribute('href', '#!');
  a.setAttribute('class', 'delete-item secondary-content');

  // Add icon html
  a.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(a);

  
  }

  taskName.value = '';
  e.preventDefault(); 
};

//need to add an event listener on the remove icon
taskList.addEventListener('click', removeTask);

// Remove task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}








clearBtn.addEventListener("click", clearTasks);

function clearTasks(e) {
  taskList.remove();

  e.preventDefault();
}
