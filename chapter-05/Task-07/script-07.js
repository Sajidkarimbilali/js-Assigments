var item_01 = 650 ;
var item_02 = 100;
var ordQty_01 = 3;
var ordQty_02 = 7;

var shippingCharges = 100 ;

document.write("Price of item 1 is " + item_01 );
document.write("<br>Quantity of item 1 is " + ordQty_01 );
document.write("<br>Price of item 2 is " + item_02 );
document.write("<br>Quantity of item 2 is " + ordQty_02 );
document.write("<br>Shipping Charges " + shippingCharges );

var totalAmount = (item_01*ordQty_01) + (item_02*ordQty_02)+shippingCharges

document.write("<br>Total cost of your order is " + totalAmount );
