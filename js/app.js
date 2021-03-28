        const inputForm = document.querySelector('.todo-input2');
        const  completed = document.querySelectorAll('.complete');
        const removed = document.querySelector('.remove-todo-btn');
        const itemsLeft = document.querySelector('.items-left');
        const  clearAll = document.querySelector('.clear-all');
        const  showAll = document.querySelector('.all-items');
        const  active = document.querySelector('.active-items');
        const completedItems = document.querySelector('.complete-items');
        const  listItems = document.querySelector('.todo-list');
        const addButton = document.querySelector('.submit-todo');
        const themeToggle = document.querySelector('.light');
        const filters = document.querySelector('.filters')

        

        

         taskListChildren = listItems.children;

         console.log(taskListChildren)
         
        

        document.addEventListener('keyup', function(evt){
            let lists = listItems;
            let text = inputForm.value

            
            if (evt.keyCode === 13){
                if(text === ''){
                    alert('You cannot add an empty task')
                    return
                }
                let div = document.createElement('div')
                div.classList.add('todo-items')

                const template = `<input type="checkbox" name="checkbox" id="checkbox" class="complete">
                                    <h4 class="todo-text">${text}</h4>
                                <button type="button" class="remove-todo-btn">X</button>`
                //create textNode 
                div.innerHTML = template;

                //append div to list items
                lists.insertBefore(div, filters)
                text === ''

                let totalDiv = `${taskListChildren.length} items left`
                itemsLeft.textContent = totalDiv;

            }
        })

        //click the checkbox
    listItems.addEventListener('click', function(evt){
        let item = evt.target;            
        let totalDiv = `${taskListChildren.length--} items left`


        if(item.name === 'checkbox'){
            let text = evt.target.nextElementSibling;
            text.classList.toggle('now-complete')
            itemsLeft.textContent = totalDiv;
        }else if(item.classList[0] === 'remove-todo-btn'){
            item.parentElement.remove()

            itemsLeft.textContent = totalDiv;
        }
    })

    // filters

    clearAll.addEventListener('click', function(evt){
        // for(let i = 0; i < listItems.children.length; i++){
        //     taskListChildren[i].remove();
        // }

        let childElements = Array.from(taskListChildren.ch)
        console.log(childElements)
        if(childElements){
            for (elements of childElements){
                elements.remove()
            }
        }
    })

    //dark mode

    themeToggle.addEventListener('click', function(){
        console.log('Dark mode activated')
        themeToggle.src = './images/icon-moon.svg'

        document.body.classList.toggle('dark-mode')
    })
    

    