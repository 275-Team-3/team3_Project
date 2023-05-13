/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

let inventoryData = [
    {
        Product: "Nike mercury",
        Description: "nike mercury 12 limited edition",
        Price: "200",
        Stock: "94",
        Brand: "nike",
        Photo: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/503e9eea-02dd-4f8f-91e3-6ad74a9225cc/quest-5-mens-road-running-shoes-1tmPXN.png"
    },
    {
        Product: "Nike mercury3",
        Description: "nike mercury 13 limited edition",
        Price: "200",
        Stock: "94",
        Brand: "nike",
        Photo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
    },
    {
        Product: "Nike Air ZOOM",
        Description: "nike Air ZOOM",
        Price: "200",
        Stock: "94",
        Brand: "nike",
        Photo: "https://media.istockphoto.com/id/1320786676/photo/stability-and-cushion-running-shoes-new-unbranded-running-sneaker-or-trainer-on-orange.jpg?s=170667a&w=0&k=20&c=DuOyE_MjpgEmenP0GPOVffO7-Y1J-F9hL-aJ5w4wI84="
    },
    {
        Product: "C.RONALDO JERSEY",
        Description: "Nike C. RONALDO Portugal Jersey",
        Price: "200",
        Stock: "94",
        Brand: "nike",
        Photo: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/504a9a69-9b64-411b-8673-2c917e55959f/portugal-national-team-2022-23-stadium-home-cristiano-ronaldo-mens-dri-fit-soccer-jersey-xBK2l8.png"
    },
    {
        Product: "L.Messi Jersey",
        Description: "L. Messi PSG Jersey",
        Price: "200",
        Stock: "94",
        Brand: "nike",
        Photo: "https://m.media-amazon.com/images/I/51ThXwpW4lL._AC_UY1000_.jpg"
    }
];

const saveDataKey = "MY-PAGE-INVE-1";

// Check if the user's data already exists
const previousData = localStorage.getItem(saveDataKey);
// If the data doesn't exist, `getItem` returns null
if (previousData !== null) {
    inventoryData = JSON.parse(previousData);
}
function Admininventory(): JSX.Element {
    const [data, setData] = useState<
        {
            Product: string;
            Description: string;
            Price: string;
            Stock: string;
            Brand: string;
            Photo: string;
        }[]
    >(inventoryData);
    const [showAdd, setShowAdd] = useState<boolean>(false);
    const [product, setProduct] = useState<string>("product name");
    const [company, setCompany] = useState<string>("Your Name");
    const [price, setPrice] = useState<string>("0");
    const [stock, setStock] = useState<string>("0");
    const [photo, setPhoto] = useState<string>("Photo URL");
    const [description, setDescription] = useState<string>("Photo URL");

    function saveData() {
        localStorage.setItem(saveDataKey, JSON.stringify(data));
    }
    function updateProduct(event: React.ChangeEvent<HTMLInputElement>) {
        setProduct(event.target.value);
    }
    function updateCompany(event: React.ChangeEvent<HTMLInputElement>) {
        setCompany(event.target.value);
    }

    function updateStock(event: React.ChangeEvent<HTMLInputElement>) {
        setStock(event.target.value);
    }
    function updatePrice(event: React.ChangeEvent<HTMLInputElement>) {
        setPrice(event.target.value);
    }
    function updatePhoto(event: React.ChangeEvent<HTMLInputElement>) {
        setPhoto(event.target.value);
    }
    function updateDescription(event: React.ChangeEvent<HTMLInputElement>) {
        setDescription(event.target.value);
    }
    function updateInventory() {
        setData([
            ...data,
            {
                Product: product,
                Description: description,
                Price: price,
                Stock: stock,
                Brand: company,
                Photo: photo
            }
        ]);
        console.log(data);
    }

    function removeFromInventory(productName: string) {
        const copiedData = [...data];
        const dataWithRemovedItem = copiedData.filter(
            (item): boolean => item.Product != productName
        );
        setData(dataWithRemovedItem);
    }

    function form(): JSX.Element {
        return (
            <h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        className="forms"
                        type="product"
                        placeholder="Product Name"
                        onChange={updateProduct}
                    />
                    <Form.Control
                        className="forms"
                        type="company"
                        placeholder="Brand"
                        onChange={updateCompany}
                    />
                    <Form.Control
                        className="forms"
                        type=""
                        placeholder="Description"
                        onChange={updateDescription}
                    />
                    <Form.Control
                        className="forms"
                        type="Price"
                        placeholder="price"
                        onChange={updatePrice}
                    />
                    <Form.Control
                        className="forms"
                        type="stock"
                        placeholder="stock"
                        onChange={updateStock}
                    />
                    <Form.Control
                        className="forms"
                        type=""
                        placeholder="Image URL"
                        onChange={updatePhoto}
                    />
                </Form.Group>
                ;<Button onClick={updateInventory}>Submit</Button>
            </h2>
        );
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Desc</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Image</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.Product}>
                            <th scope="row">{item.Product}</th>
                            <td>{item.Brand}</td>
                            <td>{item.Price}</td>
                            <td>{item.Stock}</td>
                            <td>{item.Description}</td>
                            <td>
                                <img width="20%" src={item.Photo} />
                            </td>
                            <td>
                                <Button
                                    onClick={() =>
                                        removeFromInventory(item.Product)
                                    }
                                >
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* {product} */}
            <Button onClick={() => setShowAdd(!showAdd)}>
                Add to Inventory
            </Button>
            <Button onClick={saveData}>Save new inventory</Button>
            {showAdd == true ? form() : null}
        </div>
    );
}

export default Admininventory;
