import { azureCatalog } from './azure';
import { gcpCatalog } from './gcp';
import { awsCatalog } from './aws';

// const catalog = [
//   azureCatalog.map((item) => ({ ...item, Destination: 'Azure' }))
//   // ,gcpCatalog.map(
//   //   (item) => ({ ...item, Destination: 'GCP' }),
//   //   awsCatalog.map((item) => ({ ...item, Destination: 'AWS' }))
//   //)
// ];
// Decided to read from the ID of the object instead

const catalog = [...azureCatalog, ...gcpCatalog, ...awsCatalog];

export const azureCatalogCategories = () => {
  //get an array of all  categories from azureCatalog
  let categoryArray = [];
  catalog.map((item, index) => {
    item.categories.map((category, categoryIndex) => {
      categoryArray.push(category);
    });
  });

  const uniqueCategory = [...new Set(categoryArray.map((item) => item.name))];
  // console.log(uniqueCategory);
  return uniqueCategory;
};

export const getCatalog = () => {
  return catalog;
};

export const getCatalogforCategory = (categoryName) => {
  return catalog.filter((items) => items.categories.some((c) => c.name === categoryName));
};
