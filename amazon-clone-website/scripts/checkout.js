import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadCart } from "../data/cart.js";
import { loadProductFetch } from "../data/products.js";
//import '../data/backend-practice.js';
//import '../data/cart-class.js';

async function loadPage() {
  try { 
    
    /*throw 'error1'; // this manually create an error */

    await loadProductFetch();

    await new Promise((resolve) => {
    loadCart(() => {
        resolve();
    });
   });

  } catch (error) {
    console.log('unexpected error. Please try later');
  }
   
   renderOrderSummary();
   renderPaymentSummary();
}

loadPage();

/*
Promise.all([
  loadProductFetch(),
  new Promise((resolve) => {
  loadCart(() => {
      resolve();
  });
 })
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/* new Promise((resolve) =>{
   loadProducts(() => {
    resolve('value1');
   });

}).then((value) => {
  return new Promise((resolve) => {
    loadCart(() => {
        resolve();
    });
  });

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
}); */


/*
loadProducts(() => {
   loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/