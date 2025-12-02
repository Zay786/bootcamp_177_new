itemprice = input("Enter the item price: ")
itemprice = float(itemprice)
if itemprice > 1000:
    print("You are eligible for free shipping!")
   
else:
    print("Shipping charges will apply.")
    print(f"Please add Rs{1000 - itemprice}")
vat_rate = 0.15
final_price = itemprice + (itemprice * vat_rate)
print("The item price is:", itemprice)
print("The vat amount is:", itemprice * vat_rate)
print("The final price including VAT is:", final_price) 
print(f"The final price including VAT is Rs {final_price}")
