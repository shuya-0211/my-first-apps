const Product = require('./model/product')

class FakeDb {

    constructor(){
        this.products = [ 
        {
            coverImage: './assets/image/phone-cover.jpg',
            name: 'Phone XL',
            price: 799,
            description: 'A large phone with one of the best screens',
            heading1: 'サンプルテキスト１',
            heading2: 'サンプルテキスト２',
            heading3: 'サンプルテキスト３',
            headingtext1:
              'Martin Heidegger was a German philosopher who is best known for contributions to phenomenology, hermeneutics, and existentialism.',
            headingtext2:
              'Arguing that transcendental consciousness sets the limits of all possible knowledge, Husserl redefined phenomenology as a transcendental-idealist philosophy.',
            headingtext3:
              'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
          },
          {
            coverImage: './assets/image/phone-cover.jpg',
            name: 'Phone Mini',
            price: 699,
            description: 'A great phone with one of the best cameras',
            heading1: 'サンプルテキスト１',
            heading2: 'サンプルテキスト２',
            heading3: 'サンプルテキスト３',
            headingtext1:
              'Martin Heidegger was a German philosopher who is best known for contributions to phenomenology, hermeneutics, and existentialism.',
            headingtext2:
              'Arguing that transcendental consciousness sets the limits of all possible knowledge, Husserl redefined phenomenology as a transcendental-idealist philosophy.',
            headingtext3:
              'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
          },
          {
            coverImage: './assets/image/phone-cover.jpg',
            name: 'Phone Standard',
            price: 299,
            description: '',
            heading1: 'サンプルテキスト１',
            heading2: 'サンプルテキスト２',
            heading3: 'サンプルテキスト３',
            headingtext1:
              'Martin Heidegger was a German philosopher who is best known for contributions to phenomenology, hermeneutics, and existentialism.',
            headingtext2:
              'Arguing that transcendental consciousness sets the limits of all possible knowledge, Husserl redefined phenomenology as a transcendental-idealist philosophy.',
            headingtext3:
              'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
          },
          {
            coverImage: './assets/image/phone-cover.jpg',
            name: 'Phone Special',
            price: 999,
            description: 'A top grade phone',
            heading1: 'サンプルテキスト１',
            heading2: 'サンプルテキスト２',
            heading3: 'サンプルテキスト３',
            headingtext1:
              'Martin Heidegger was a German philosopher who is best known for contributions to phenomenology, hermeneutics, and existentialism.',
            headingtext2:
              'Arguing that transcendental consciousness sets the limits of all possible knowledge, Husserl redefined phenomenology as a transcendental-idealist philosophy.',
            headingtext3:
              'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
          }
        ]
    }
async initDb(){
    await this.cleanDb()
    this.pushProductsToDb()
}

async cleanDb(){
    await Product.deleteMany({})
}

    pushProductsToDb(){
        this.products.forEach(
            (product) => {
                const newProduct = new Product (product)
                newProduct.save()
            }
        )
    }
    seeDb(){
        this.pushProductsToDb()
    }
}
module.exports = FakeDb
