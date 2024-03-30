document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    let myTask = document.getElementById('new-task-description')
    addList((myTask.value));
    e.target.reset()
  })
});
function addList(task){
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click',deleteFunction)
  btn.textContent=(' X ');
  li.textContent= ` ${task} `;
  li.appendChild(btn);
  document.querySelector('#tasks').appendChild(li);
  

}
function deleteFunction(e){
    e.target.parentNode.remove()

}