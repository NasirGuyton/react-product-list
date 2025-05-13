import data from './data.json';

const categories = data.map(item => item.category);
const uniqueCategories = [...new Set(categories)];

const productCountByCategory = data.reduce((acc, curr) => {
  acc[curr.category] = (acc[curr.category] || 0) + 1;
  return acc;
}, {});

const categoryObjects = Object.entries(productCountByCategory).map(
  ([name, count]) => ({ name, count })
);

const priceList = data.map(product => `${product.name}: $${product.price.toFixed(2)}`);

const expensiveProducts = data.filter(product => product.price > 50);

const totalInventoryValue = data.reduce((total, product) => {
  return total + product.price * product.units;
}, 0);

const totalPriceByCategory = data.reduce((acc, curr) => {
  acc[curr.category] = (acc[curr.category] || 0) + curr.price * curr.units;
  return acc;
}, {});

export {
  data,
  categories,
  uniqueCategories,
  productCountByCategory,
  categoryObjects,
  priceList,
  expensiveProducts,
  totalInventoryValue,
  totalPriceByCategory
};
