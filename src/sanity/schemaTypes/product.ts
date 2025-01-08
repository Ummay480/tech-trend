
export const product ={
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'The name of the product',
      },
      {
        name: 'title',
        title: 'Product Title',
        type: 'string',
     },
      {
        name: 'description',
        title: 'Product Description',
        type: 'text',
        description: 'A detailed description of the product',
      },
      {
        name: 'productId',
        title: 'Product ID',
        type: 'string',
     },
      {
        name: 'category',
        title: 'Product Category',
        type: 'reference',
        to: [{ type: 'category' }],
        description: 'The category this product belongs to',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        description: 'The price of the product',
      
      },
      {
        name: 'image',
        title: 'Product Image',
        type: 'image',
        options: {
        hotspot: true, // Enables image cropping and focus point
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: 'Alternative text for the image for accessibility',
          },
        ],
      },
    ],
  };
  