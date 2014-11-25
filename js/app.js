
var itemInput,
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
					editInput = document.createElement("input"),
					editButton = document.createElement("button"),
					deleteButton = document.createElement("button");


					listItem.appendChild(checkBox);
					listItem.appendChild(label);
					listItem.appendChild(editInput);
					listItem.appendChild(editButton);
					listItem.appendChild(deleteButton);

					return listItem;
		},

		addItem: function() {
					console.log("Add item..");
					itemInput.value = "";
					feedback.innerHTML = "Item Added Successfully!";

					var newListItem = shoppingList.createNewShoppingItem();
							cartedItemsHolder.appendChild(newListItem);

		},

		moveItemsToBought: function() {
					console.log('buy item..');
					var listItem = this.parentNode;
					boughtItemsHolder.appendChild(listItem);
					onReady(listItem, moveItemToCart);
		},

		moveItemToCart: function() {
					console.log('cart Item..');
					var listItem = this.parentNode;
					cartedItemsHolder.appendChild(listItem);
					onReady(listItem, moveItemToCart);
		},

		editItem: function() {
					console.log("Item can now be edited..");
					var listItem = this.parentNode;
					var li = listItem.parentNode;
					li.removeChild(listItem);
		},

		deleteItem: function() {
					console.log("Item can now be deleted..");
					var listItem = this.parentNode;
					var li = listItem.parentNode;
					li.removeChild(listItem);
		},

		append: function() {
			for (var i = 0; i < onReady.children.length; i++) {
					onReady(cartedItemsHolder.children[i], itemsBought );
			}

			for (var i = 0; i < onReady.children.length; i++) {
					onReady(boughtItemsHolder.children[i], itemsCarted );
			}

		}	
		

};

window.onload = shoppingList.onReady;

