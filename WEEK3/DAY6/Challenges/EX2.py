items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet = "$300"

wallet = int(wallet.replace("$", "").replace(",", ""))

basket = []

for item, price in items_purchase.items():

    item_price = int(price.replace("$", "").replace(",", ""))

 
    if wallet >= item_price:
        basket.append(item)
        wallet -= item_price 


if len(basket) == 0:
    print("Nothing")
else:
    print(sorted(basket))


items_purchase = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}
wallet = "$100"


