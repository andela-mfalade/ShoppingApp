var addButton = document.getElementById('add_item'),
		itemInput = document.getElementById('new_item'),
		cartedItemsHolder = document.getElementById('cart_items'),
		boughtItemsHolder = document.getElementById('bought_items');


var createNewShoppingListItem = function(itemString) {

		var listItem = document.createElement("li"),
				checkBox = document.createElement("input");
				label = document.createElement("label"),
				editInput = document.createElement("input"),
				editButton = document.createElement("button"),
				deleteButton = document.createElement("button");


				checkBox.type = "checkbox";
				label.innerHTML = itemString;
				editInput.type = "text";
				editButton.innerHTML = "Edit";
				editButton.className = "edit";
				deleteButton.innerHTML = "Remove Item";
				deleteButton.className  = "delete";


				listItem.appendChild(checkBox);				
				listItem.appendChild(label);
				listItem.appendChild(editInput);
				listItem.appendChild(deleteButton);
				listItem.appendChild(editButton);



		bindShoppingEvents(listItem, itemBought);

		return listItem;
};

var addItem = function() {

	var listItem = createNewShoppingListItem(itemInput.value);
			
	//Dealing with user input..
		//for empty strings..
			if(itemInput.value === "") {
				label.innerHTML = prompt("You haven't added an item.. Add item here..");
					if(label.innerHTML === "") {
						alert("You haven't added any item still.. Click Ok to reload page and try again..");
						window.location.reload();
					}
					else {
						cartedItemsHolder.appendChild(listItem);
					}
			}

			//Appending the newly created list item to the carted items holder
			else {
				cartedItemsHolder.appendChild(listItem);
			}

			itemInput.value = "";
};

var editItem = function() {
		console.log('This function EDIT item has been called.. It works.. Items can now be edited');
		var listItem = this.parentNode;
				editButton = listItem.querySelector("button.edit"),
				editInput = listItem.querySelector("input[type=text]"),
				label = listItem.querySelector("label"),

				containsClass = listItem.classList.contains("editMode");

		if(containsClass) {
			label.style.display = "inline";
			editInput.style.display = "none";
			label.innerHTML = editInput.value;
			editButton.innerHTML = "Edit";
		} 
		else {
			editInput.style.display = "inline";
			label.style.display = "none";
			editInput.value = label.innerHTML;
			listItem.className = "editMode";
			editButton.innerHTML = "Save";
			return listItem.className;
		}

		listItem.classList.toggle("editMode");
};

var deleteItem = function() {
		console.log('This function DELETE item has been called.. It works.. Items can now be deleted');
		var listItem = this.parentNode,
				ul = listItem.parentNode;

		ul.removeChild(listItem);
};

var itemCarted = function() {
		console.log('function called.. itemCarted.. returned from the bought items category..');
		var listItem = this.parentNode;
		boughtItemsHolder.appendChild(listItem);
		bindShoppingEvents(listItem, itemBought);
};

var itemBought =  function() {
		console.log('Function called.. itemBought..');
		var listItem = this.parentNode;
		cartedItemsHolder.appendChild(listItem);
		bindShoppingEvents(listItem, itemCarted);
};


//This function will be used to bind events to the list Items children
var bindShoppingEvents = function(shoppingListItem, checkBoxEventHandler) {

		var checkBox = shoppingListItem.querySelector("input[type=checkbox]"),
				editButton = shoppingListItem.querySelector("button.edit"),
				deleteButton = shoppingListItem.querySelector("button.delete");

		console.log("Events have been bound..");
		
		checkBox.onchange = checkBoxEventHandler;
		editButton.onclick = editItem;
		deleteButton.onclick = deleteItem;
		
};

// This function will be used to cycle through the list items in the unordered list called the cartedItemsHolder
//cycle over the cartedItemsHolder list items
for(var i = 0; i < cartedItemsHolder.children.length; i+=1) {
	bindShoppingEvents(cartedItemsHolder.children[i], itemCarted);
}

//cycle over the boughtItemsHolder list items
for(var i = 0; i < boughtItemsHolder.children.length; i+=1) {
	bindShoppingEvents(boughtItemsHolder.children[i], itemBought);
}

addButton.addEventListener('click', addItem);
