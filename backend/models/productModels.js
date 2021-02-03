import mogoose from 'mongoose';

// specify how the product will be saved in database
const productSchema = new mogoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, default: 0, required: true },
    category: { type: String, required: true },
    countInStock: { type: Number, default: 0, required: true },
    description: { type: String, required: true },
    rating: { type: Number, default: 0, required: true },
    numReviews: { type: Number, default: 0, required: true },
});

// Take the schema and create an instance of a document equivalent to records in a relational database
const productModel = mogoose.model("Product", productSchema);

export default productModel;