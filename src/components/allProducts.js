import plantsDataRaw from './plantsData';
import potsDataRaw from './potsData';
import gardenSuppliesDataRaw from './gardenSuppliesData';

const flattenData = (data, category) => {
  return Object.values(data).flat().map(item => {
    let parsedPrice = parseFloat(item.price);
    return {
      ...item,
      category: category,
      price: isNaN(parsedPrice) ? item.price : parsedPrice,
    };
  });
};

const plantsData = flattenData(plantsDataRaw, 'plants');
const potsData = flattenData(potsDataRaw, 'pots');
const gardenSuppliesData = flattenData(gardenSuppliesDataRaw, 'gardenSupplies');

const allProducts = [
  ...plantsData,
  ...potsData,
  ...gardenSuppliesData,
];

export default allProducts;
