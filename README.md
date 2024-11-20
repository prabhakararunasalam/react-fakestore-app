# Project Overview
  This is a ReactJS application that allows users to browse products fetched from the Fake Store API, add them to a cart, and manage the cart through a modal interface. The project is styled using CSS to ensure a responsive and clean design.

## Features
- Fetch and display product data (image, title, and price) from Fake Store API.
- Add products to the cart with a single click.
- Alert users if an item is already added to the cart.
- Display the cart item count in the navbar.
- View cart contents in a modal interface.
- Remove items from the cart using the "Remove from Cart" button.
- Responsive design for both desktop and mobile devices.

## Tech Stack
- ReactJS: Frontend framework.
- Tailwind CSS: Styling and layout.
- HTML/CSS: Additional styling.
- JavaScript: Application logic.

## Key Functionalities

### Fetching Products:
Data is retrieved using fetch() from Fake Store API.
### Add to Cart:
- Products are added to the cart state.
- Duplicate additions trigger an alert message.
### View Cart:
Cart contents are shown in a modal interface.
### Remove from Cart:
Items can be removed directly from the modal.