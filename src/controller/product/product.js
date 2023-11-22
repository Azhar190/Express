import productModel from "../../model/product.js";

const ProductController = {
  create: async (req, res) => {
    try {
      const { Watch, Clothes, Books, Items } = req.body;

      const product = await productModel.create({
        Watch,
        Clothes,
        Books,
        Items,
      });

      return res.status(201).json({
        message: "Product created",
        product,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Product not created",
      });
    }
  },

  getAll: async (req, res) => {
    const products = await productModel.findAll({
      where: {
        Watch: "apple",
      },
    });
    res.json({
      products,
    });
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await productModel.findOne({
        where: {
          id,
        },
      });
      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      res.json({
        product,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await productModel.findOne({
        where: {
          id,
        },
      });
      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      await product.destroy();
      res.json({
        message: "Product deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { Watch, Clothes, Books, Items } = req.body;

      const product = await productModel.findOne({
        where: {
          id,
        },
      });
      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      product.Watch = Watch;
      product.Clothes = Clothes;
      product.Books = Books;
      product.Items = Items;
      await product.save();

      res.json({
        message: "Product Updated",
        product,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
};

export default ProductController;
