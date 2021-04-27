function billingFunction(){

  if(document.getElementById('same').checked){
    var num = document.getElementById('shippingName').value;
    var sum = document.getElementById('shippingZip').value;
    document.getElementById('billingName').value= num;
    document.getElementById('billingZip').value= sum;
  }
  else{
    document.getElementById('billingName').value= "";
    document.getElementById('billingZip').value= "";
  }
}
