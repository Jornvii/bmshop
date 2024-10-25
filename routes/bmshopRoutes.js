const express = require('express');
const router = express.Router();
const bmshopController = require('../controllers/bmshopController');
const productController = require('../controllers/productController');
const authController = require('../controllers/authController');
const upload = require('../middleware/uploadImage');

// Customer Routes
//auth
router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/customers', bmshopController.getCustomers);
router.get('/customers/:id', bmshopController.getCustomerById);
router.put('/customers/:id', bmshopController.updateCustomer);
router.delete('/customers/:id', bmshopController.deleteCustomer);


// Product Routes
router.post('/products', upload.single('img_file'), productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.put('/products/:id', upload.single('img_file'), productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

// CATEGORY ROUTES
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

router.post('/payments', bmshopController.createPayment);
router.get('/payments', bmshopController.getPayments);
router.get('/payments/:id', bmshopController.getPaymentById);
router.put('/payments/:id', bmshopController.updatePayment);
router.delete('/payments/:id', bmshopController.deletePayment);

module.exports = router;
