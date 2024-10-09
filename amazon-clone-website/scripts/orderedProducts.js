import { orders } from "../data/orders.js";
import { formatCurrency } from "./utils/money.js";
import { getProduct } from "../data/products.js";


function renderOrderedSummaryHTML() {
    
    let OrderedCartHTML = '';

   orders.forEach((order) => {
      
      order.products.forEach((product) => {
        const id = product.productId;

        const matchingProduct = getProduct("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        console.log(matchingProduct)
       
      OrderedCartHTML +=  `
     <div class="order-container">
          <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>${order.orderTime}</div>
              </div>
              <div class="order-total">
                <div class="order-header-label">Total:</div>
                <div>$${formatCurrency(order.totalCostCents)}</div>
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              <div>${order.id}</div>
            </div>
          </div>

          <div class="order-details-grid">
            <div class="product-image-container">
              <img src="${matchingProduct.image}">
            </div>

            <div class="product-details">
              <div class="product-name">
                ${matchingProduct.name}
              </div>
              <div class="product-delivery-date">
                Arriving on: ${order.products[0].estimatedDeliveryTime}
              </div>
              <div class="product-quantity">
                Quantity: ${order.products[0].quantity}
              </div>
              <button class="buy-again-button button-primary">
                <img class="buy-again-icon" src="images/icons/buy-again.png">
                <span class="buy-again-message">Buy it again</span>
              </button>
            </div>

            <div class="product-actions">
              <a href="tracking.html">
                <button class="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>

            <div class="product-image-container">
              <img src="${matchingProduct.image}">
            </div>

            <div class="product-details">
              <div class="product-name">
              ${matchingProduct.name}
              </div>
              <div class="product-delivery-date">
                Arriving on: ${order.products[0].estimatedDeliveryTime}
              </div>
              <div class="product-quantity">
                Quantity: ${matchingProduct.quantity}
              </div>
              <button class="buy-again-button button-primary">
                <img class="buy-again-icon" src="images/icons/buy-again.png">
                <span class="buy-again-message">Buy it again</span>
              </button>
            </div>

            <div class="product-actions">
              <a href="tracking.html">
                <button class="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>
          </div>
        </div>
        `;
      });
   });

   document.querySelector('.js-order-html').innerHTML = OrderedCartHTML;
}

renderOrderedSummaryHTML();