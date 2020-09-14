### Welcome to Fritze Cards 👋
### Live Version: https://fritze-cards.herokuapp.com/
###
###

<div align="center">
  <img width="100%" src="frontend/src/resources/CardBanner.JPG" alt="cover" />
</div>

# Fritze Cards

Fritze Cards is an Ecommerce application for purchasing baseball cards from my personal collection.

## Installation

- Clone Repo
- Install MongoDB
- npm install

- create .env file in root folder like this:

#### MONGODB_URL=mongodb://localhost/your mongoDB db-name here
#### JWT_SECRET=secret
#### PAYPAL_CLIENT_ID=your dev paypal ID goes here
#
- npm start ('jayrow' root directory) - backend
- npm start ('frontend' directory) - frontend

## Technology - MERN Stack

- MongoDB
- Express
- React
- Node
- Redux
- Mongoose
- Axios
- Babel
- Nodemon
- Paypal (sandbox environment)
- React Lazy Load (for images)

## Potential Upcoming Changes
- Create a general landing page with about section
- Upload Card images by implementing a "choose file" button
- Implement Multer for image uploads
- Implement Amazon Web Services for uploading card images
- Adjust shipping costs based on location - to make shipping costs reasonable
- Implement "forgot password" functionality
- Implement a "Guest Checkout" option
- Add more card manufacturers

## Current Items to Repair/Improve
- Review and cleanup unused imports/variable
- Research how to speed up image loading
- Research why Paypal is slow to load (sometimes have to refresh screen)
- Improve Search functionality - auto complete (trie data structure)
- Research ways to improve UI

## License
[MIT](https://choosealicense.com/licenses/mit/)

