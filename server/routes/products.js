import express from 'express';

const router = express.Router();

// In-memory array สำหรับเก็บข้อมูลสินค้า (หรือเชื่อมต่อ MongoDB ใน Stretch goal)
let products = [
    { id: '1', name: 'IRC Tire IZ-003', price: 3250, quantity: 10 },
    { id: '2', name: 'Michelin Pilot Street', price: 1450, quantity: 5 }
];

// GET /products (รองรับ Query String ?search=...)
router.get('/', (req, res) => {
    const { search } = req.query;
    let result = products;
    if (search) {
        result = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }
    res.status(200).json(result);
});

// GET /products/:id
router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
});

// POST /products
router.post('/', (req, res) => {
    const { name, price, quantity } = req.body;
    if (!name || price === undefined) {
        return res.status(400).json({ error: 'Name and price are required' });
    }

    const newProduct = {
        id: String(Date.now()),
        name,
        price: Number(price),
        quantity: quantity !== undefined ? Number(quantity) : 1
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT /products/:id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, price, quantity } = req.body;

    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }

    if (!name || price === undefined) {
        return res.status(400).json({ error: 'Name and price are required' });
    }

    products[productIndex] = {
        id,
        name,
        price: Number(price),
        quantity: quantity !== undefined ? Number(quantity) : products[productIndex].quantity
    };

    res.status(200).json(products[productIndex]);
});

// DELETE /products/:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }

    const deletedProduct = products.splice(productIndex, 1)[0];
    res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
});

export default router;