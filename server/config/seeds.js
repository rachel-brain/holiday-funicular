const db = require('./connection');
const { Customer, Product, Channel } = require('../models');

db.once('open', async () => {
  await Channel.deleteMany();

  const channels = await Channel.insertMany([
    { name: 'Distributor' },
    { name: 'Direct' },
    { name: 'Special' }
  ]);

  console.log('Channels seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Commercial Puff Pastry 5kg',
      description: 'Commercial Puff Pastry 5kg - Vegan',
      price: 50.00
    },
    {
      name: 'Commercial Puff Pastry 10kg',
      description: 'Commercial Puff Pastry 10kg - Vegan',
      price: 50.00
    },
    {
      name: 'Premium Puff Pastry 5kg',
      description: 'Premium Puff Pastry 5kg',
      price: 50.00
    },
    {
      name: 'Premium Puff Pastry 10kg',
      description: 'Premium Puff Pastry 10kg',
      price: 50.00
    },
    {
      name: 'French Puff Pastry 10kg',
      description: 'French Puff Pastry 10kg',
      price: 50.00
    },
    {
      name: 'Butter Puff Pastry 5kg',
      description: 'Butter Puff Pastry 5kg',
      price: 50.00
    },
    {
      name: 'Short Crust Pastry 5kg',
      description: 'Short Crust Pastry 5kg',
      price: 50.00
    },
    {
      name: 'Short Crust Pastry 10kg',
      description: 'Short Crust Pastry 10kg',
      price: 50.00
    },
    {
      name: 'Savoury Short Crust Pastry 10kg',
      description: 'Savoury Short Crust Pastry 10kg',
      price: 50.00
    },
    {
      name: 'Butter Short Crust Pastry 5kg',
      description: 'Butter Short Crust Pastry 5kg',
      price: 50.00
    },
    {
      name: 'Pie Base Short Crust Pastry 10kg',
      description: 'Pie Base Short Crust Pastry 10kg - Vegan',
      price: 50.00
    },
    {
      name: 'Sweet Crust Pastry 4kg',
      description: 'Sweet Crust Pastry 4kg',
      price: 50.000
    }
  ]);

  console.log('Products seeded');

  await Customer.deleteMany();

  await Customer.create({
    businessName: 'Victorian Food Distributors',
    firstName: 'Amy',
    email: 'admin@vicfooddist.com.au',
    password: 'password246',
    channel: 'Distributor',
    orders: [
      {
        products: [products[0]._id, products[8]._id, products[12]._id]
      }
    ]
  });

  await Customer.create({
    businessName: 'Surrey Food Store',
    firstName: 'Abby',
    email: 'info@surreyfoodstore.com.au',
    password: 'password123',
    channel: 'Direct',
    orders: [
      {
        products: [products[0]._id, products[4]._id, products[1]._id]
      }
    ]
  });

  await Customer.create({
    businessName: 'Artisan Gourmet Foods',
    firstName: 'Josh',
    email: 'josh@artisangourmetfoods.com.au',
    password: 'password987',
    channel: 'Direct',
    orders: [
      {
        products: [products[5]._id, products[4]._id, products[12]._id]
      }
    ]
  });

  await Customer.create({
    businessName: 'Super Pies Company',
    firstName: 'Harry',
    email: 'info@superpiesco.com.au',
    password: 'password848',
    channel: 'Special',
    orders: [
      {
        products: [products[2]._id, products[4]._id, products[6]._id]
      }
    ]
  });

  console.log('Customers seeded');

  process.exit();
});