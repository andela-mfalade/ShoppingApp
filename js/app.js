
var itemInput = "",
		feedback, 
		addButton, 
		cartedItemsHolder, 
		boughtItemsHolder;
		


var shoppingList = {

		formElements: function() {
			itemInput = document.getElementById('new_item'),
			feedback = document.getElementById('displayMessage'), 
			addButton = document.getElementById('add_item'), 
			cartedItemsHolder = document.getElementById('cart'), 
			boughtItemsHolder = document.getElementById('bought_items')
		},

		onReady: function() {
			shoppingList.formElements();
			addButton.onclick = shoppingList.addItem;

			var checkBox =  cartedItemsHolder.querySelector("input[type=checkbox]"),
					editButton = cartedItemsHolder.querySelector("button.edit"),
					deleteButton = cartedItemsHolder.querySelector("button.delete");


					checkBox.onchange = shoppingList.moveItemsToBought;
					editButton.onclick = shoppingList.editItem;
					deleteButton.onclick = shoppingList.deleteItem;
		},

		createNewShoppingItem: function(itemString) {

			var listItem = document.createElement("li"),
					checkBox = document.createElement("input"),
					label = document.createElement("label"),
					editButton = document.createElement("button"),
					deleteButton = document.createElement("button");


					checkBox.type = "checkbox";
					label.value = "itemString";
					editButton.innerHTML = "Edit Item";
					editButton.className = "edit";
					deleteButton.innerHTML = "Remove Item";
					deleteButton.className = "delete";


					listItem.appendChild(checkBox);
					listItem.appendChild(label);
					listItem.appendChild(editButton);
					listItem.appendChild(deleteButton);

					return listItem;
		},

		addItem: function() {

					// itemInput.value = "";
					feedback.innerHTML = "Item Successfully Added !";

					var newListItem = shoppingList.createNewShoppingItem("Test Item");
							cartedItemsHolder.appendChild(newListItem);

		},

		moveItemsToBought: function() {
					var listItem = this.parentNode;
					boughtItemsHolder.appendChild(listItem);
					onReady(listItem, moveItemToCart);
		},

		moveItemToCart: function() {
					var listItem = this.parentNode;
					cartedItemsHolder.appendChild(listItem);
					onReady(listItem, moveItemsToBought);
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

