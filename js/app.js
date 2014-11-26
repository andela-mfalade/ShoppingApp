
var feedback,
		listItem, 
		addButton, 
		cartedItemsHolder, 
		boughtItemsHolder;
		


var shoppingList = {

		formElements: function() {
			var itemInput = document.getElementById('new_item'),
					itemString = itemInput.value;


					feedback = document.getElementById('displayMessage'), 
					addButton = document.getElementById('add_item'), 
					cartedItemsHolder = document.getElementById('cart'), 
					boughtItemsHolder = document.getElementById('bought_items')
		},

		onReady: function() {
					shoppingList.formElements();
					addButton.onclick = shoppingList.addItem;

			var checkBox =  cartedItemsHolder.querySelector("input[type=checkbox]"),
					checkedBox = boughtItemsHolder.querySelector("input[type=checkbox]"),
					editButton = cartedItemsHolder.querySelector("button.edit"),
					deleteButton = cartedItemsHolder.querySelector("button.delete"),
					removeButton = boughtItemsHolder.querySelector("button.delete");


					checkBox.onchange = shoppingList.moveItemsToBought;
					checkedBox.onchange = shoppingList.moveItemToCart;
					editButton.onclick = shoppingList.editItem;
					deleteButton.onclick = shoppingList.deleteItem;
					removeButton.onclick = shoppingList.deleteItem;
		},

		createNewShoppingItem: function(itemString) {

			var listItem = document.createElement("li"),
					checkBox = document.createElement("input"),
					label = document.createElement("label"),
					editButton = document.createElement("button"),
					deleteButton = document.createElement("button");


					checkBox.type = "checkbox";
					editButton.innerHTML = "Edit Item";
					editButton.className = "edit";
					deleteButton.innerHTML = "Remove Item";
					deleteButton.className = "delete";


					listItem.appendChild(checkBox);
					listItem.appendChild(label);
					listItem.appendChild(editButton);
					listItem.appendChild(deleteButton);
					listItem.appendChild(removeButton);

					return listItem;
		},

		addItem: function() {

					feedback.innerHTML = "Item Successfully Added !";

					var newListItem = shoppingList.createNewShoppingItem("Hello World");
							cartedItemsHolder.appendChild(newListItem);

		},

		moveItemsToBought: function() {
					var listItem = this.parentNode;
					boughtItemsHolder.appendChild(listItem);
					this.onReady(listItem, moveItemToCart);
		},

		moveItemToCart: function() {
					var listItem = this.parentNode;
					cartedItemsHolder.appendChild(listItem);
					this.onReady(listItem, moveItemsToBought);
		},

		editItem: function() {
					var listItem = this.parentNode;
					var li = listItem.parentNode;
					li.removeChild(listItem);
		},

		deleteItem: function() {
					var listItem = this.parentNode;
					var li = listItem.parentNode;
					li.removeChild(listItem);
		},

		// bindShoppingEvents: function() {
		// 	append: function() {
		// 	for (var i = 0; i < onReady.children.length; i++) {
		// 			onReady(cartedItemsHolder.children[i], itemsBought );
		// 	};

		// 	for (var i = 0; i < onReady.children.length; i++) {
		// 			onReady(boughtItemsHolder.children[i], itemsCarted );
		// 	}

		// };
		// }
		

};

window.onload = shoppingList.onReady;

