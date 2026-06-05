import img1 from "./assets/img1.png"
import Productcard from './productcard'
function Productlist() {
    var product = [{
        name: 'Product1',
        price: 35000,
        rating: 4.2,
        image: img1
        },
        {
            name: 'Product2',
            price: 34000,
            rating: 4.5,
            image: img1
        },
        {
            name: 'Product3',
            price: 25000,
            rating: 3,
            image: img1
        }
    ]
    return (
        <>
            <Productcard d={product} />
            </>
    )
}export default Productlist
