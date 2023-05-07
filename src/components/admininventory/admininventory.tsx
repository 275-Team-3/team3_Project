import React from "react";
import { Button } from "react-bootstrap";
<>
    <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
    ></link>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
</>;

<>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script></script>
</>;

function Admininventory(): JSX.Element {
    /*
    function InsertRow():
        | React.MouseEventHandler<HTMLButtonElement>
        | undefined {
        throw new Error("Function not implemented.");
    }

    function DeleteRow():
        | React.MouseEventHandler<HTMLButtonElement>
        | undefined {
        throw new Error("Function not implemented.");
    }
*/
    /*function addRow() {
        // Create a new row
        const tableBody = document
            .getElementById("myTable")
            .getElementsByTagName("tbody")[0];

        const newRow = tableBody.insertRow();

        // Create cells for the new row
        const nameCell = newRow.insertCell();
        const emailCell = newRow.insertCell();

        // Set the cell content
        nameCell.innerHTML = "New Name";
        emailCell.innerHTML = "newemail@example.com";
    }
    */
    return (
        <div className="container">
            <div className="row clearfix">
                <div className="col-md-12 column">
                    <table
                        className="table table-bordered table-hover"
                        id="tab_logic"
                    >
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th className="text-center">Product</th>
                                <th className="text-center">Brand</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="addr0">
                                <td>1</td>
                                <td>
                                    <input
                                        type="text"
                                        name="name[]"
                                        placeholder="Enter Product Name"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="Brand"
                                        placeholder="Enter Brand Name"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="Price"
                                        placeholder="Enter Price"
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="Stock"
                                        placeholder="Enter Stock"
                                        className="form-control"
                                    />
                                </td>
                            </tr>
                            <tr id="addr1"></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Button
                id="add_row"
                className="btn btn-default pull-left"
                // onClick={InsertRow()}
            >
                Add Row
            </Button>
            <Button
                //onClick={DeleteRow()}
                id="delete_row"
                className="pull-right btn btn-default"
            >
                Delete Row
            </Button>
        </div>
    );
}

export default Admininventory;
