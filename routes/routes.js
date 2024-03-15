const express = require('express');
const router = express.Router();
const { loginPage, signUpPage, forgotPage, createPasswordPage, packagesplanPage, programsPage, verifyEmailPage, verifyNumberPage, verifyOtpPage, pageNotFound, packagesplanPageOverview, exercises, exerciseOverview, exerciseCategory, joinPackageForm, programsPageOverview} = require('../controllers/control.js');
// const { getAllProducts } = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth.js');
const { sendSMS } = require('../utils/sendSMS.js');
//GET
router.get('/auth/login', isAuthenticatedUser, loginPage);
router.get('/auth/sign-up', isAuthenticatedUser, signUpPage);
router.get('/auth/verify-otp', verifyOtpPage);
router.get('/auth/forgot', forgotPage);
router.get('/auth/verify-email', verifyEmailPage);
router.get('/auth/create-password', createPasswordPage);
router.get('/auth/verify-number', verifyNumberPage);
router.get('/auth/create-password', createPasswordPage);
// Program
router.get('/programs', programsPage);
router.get('/programs/:id', programsPageOverview);
router.get('/programs/:id/join', joinPackageForm);
// Package
router.get('/packages-plan', packagesplanPage);
router.get('/packages-plan/:id', packagesplanPageOverview)
router.get('/packages-plan/:id/join', joinPackageForm);
// Exercise
router.get('/exercises', exercises)
router.get('/exercise/:category', exerciseCategory)
router.get('/exercise/:category/:id', exerciseOverview)

// router.get('/product/:id', isAuthenticatedUser, productOverviewPage);
// router.get('/order/:id/shipping', isAuthenticatedUser, shippingPage);
// router.get('/order/:id/confirm-order', isAuthenticatedUser, confirmOrderPage);
// router.get('/order/:id/payment', isAuthenticatedUser, paymentPage);
// router.get('/order/my-orders/:id', isAuthenticatedUser, orderpage);
// router.get('/category', categoryPage);
// router.get('/seller/product/create-product', isAuthenticatedUser, authorizeRoles('admin', 'seller'), createProductPage);
// router.get('/seller/product/update-product/:id', isAuthenticatedUser, authorizeRoles('admin', 'seller'), updateProductPage);
// router.get('/seller/manage-product', isAuthenticatedUser, authorizeRoles('admin', 'seller'), sellerProductManagePage);
// router.get('/seller/dashboard', isAuthenticatedUser, authorizeRoles('admin', 'seller'), sellerDashboardPage);
// router.get('/seller/orders', isAuthenticatedUser, authorizeRoles('admin', 'seller'), sellerOrdersPage);
// router.get('/seller/product-reviews', isAuthenticatedUser, authorizeRoles('admin', 'seller'), sellerReviewPage);
// router.get('/auth/recovery-email', recoveryEmailPage);
// router.get('/admin-dashboard', adminDashboardPage);
// router.get('/shopping-cart', shoppingCartPage);
router.get('*', pageNotFound);

//POST
// router.post('/verify-otp', sendSMS);
module.exports = router;