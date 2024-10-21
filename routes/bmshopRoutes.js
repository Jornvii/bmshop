const express = require('express');
const router = express.Router();
const bmshopController = require('../controllers/bmshopController');


// Customer Routes
router.post('/customers', bmshopController.createCustomer);
router.get('/customers', bmshopController.getCustomers);
router.get('/customers/:id', bmshopController.getCustomerById);
router.put('/customers/:id', bmshopController.updateCustomer);
router.delete('/customers/:id', bmshopController.deleteCustomer);


// Product Routes
router.post('/products', bmshopController.createProduct);
router.get('/products', bmshopController.getProducts);
router.get('/products/:id', bmshopController.getProductById);
router.put('/products/:id', bmshopController.updateProduct);
router.delete('/products/:id', bmshopController.deleteProduct);


// CATEGORY ROUTES
// Category Routes
router.post('/categories', bmshopController.createCategory);
router.get('/categories', bmshopController.getCategories);
router.get('/categories/:id', bmshopController.getCategoryById);
router.put('/categories/:id', bmshopController.updateCategory);
router.delete('/categories/:id', bmshopController.deleteCategory);

// ORDER ROUTES
router.post('/orders', bmshopController.createOrder);
router.get('/orders', bmshopController.getOrders);
router.get('/orders/:id', bmshopController.getOrderById);
router.put('/orders/:id', bmshopController.updateOrder);
router.delete('/orders/:id', bmshopController.deleteOrder);

// Order Item Routes
router.post('/order-items', bmshopController.createOrderItem);
router.get('/order-items', bmshopController.getOrderItems);
router.get('/order-items/:id', bmshopController.getOrderItemById);
router.put('/order-items/:id', bmshopController.updateOrderItem);
router.delete('/order-items/:id', bmshopController.deleteOrderItem);

// PAYMENT ROUTES
// Define payment CRUD routes...

module.exports = router;
