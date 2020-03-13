import Category from './category';

export const CategoryRequest = new Category();

export const resetRequest = async () => {
  // make all functions here run simultaneously
  await CategoryRequest.init();
};
