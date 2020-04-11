import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";

import {
  productRemove,
  productAdd,
  productEdit,
} from "../../actions/product/productActions";

import ProductTable from "./ProductTable";

import jsonData from "./data";

class Product extends Component {
  state = {
    Product_List: jsonData.data,
    isDeleteOpen: false,
    isEditOpen: false,
    isAddOpen: false,
    deleteId: "",
    editData: {},
    addData: {
      product_id: null,
      product_name: "",
      product_price: "",
      product_dis: "",
    },
    filtered: [],
    flag: true,
  };

  //when delete Popoup Open
  toggleDelete = (value) => {
    this.setState({
      isDeleteOpen: true,
      isEditOpen: false,
      deleteId: value,
      editData: {},
      isAddOpen: false,
      addData: {},
    });
  };

  //edit modal Open
  toggleEdit = (data) => {
    this.setState({
      isEditOpen: true,
      isDeleteOpen: false,
      editData: data,
      isAddOpen: false,
      addData: {},
    });
  };

  //add Modal Open
  toggleAdd = () => {
    this.setState({
      isAddOpen: true,
      isEditOpen: false,
      isDeleteOpen: false,
      deleteId: "",
      editData: {},
    });
  };

  //onClose of all popup modal
  onClose = () => {
    this.setState({
      isDeleteOpen: false,
      isEditOpen: false,
      deleteId: "",
      editData: {},
      isAddOpen: false,
      addData: {},
    });
  };

  //function for Remove Data from Table
  removeRecord = () => {
    const list = this.state.Product_List.slice(); //slice the array
    //find exact match and delete with splice
    list.some((el, i) => {
      if (el.product_id === this.state.deleteId) {
        list.splice(i, 1);
        return true;
      }
      return false;
    });
    this.props.productRemove(this.state.deleteId);
    this.setState({
      Product_List: list,
      isDeleteOpen: false,
      isEditOpen: false,
      deleteId: "",
      editData: {},
      isAddOpen: false,
      addData: {},
    });
    // NotificationManager.success("successfully deleted record");
  };

  //change event function for edit form
  onChangeEdit = (e) => {
    var tempObj = Object.assign({}, this.state.editData);
    tempObj[e.target.name] = e.target.value;
    this.setState({
      editData: tempObj,
    });
  };

  //on Edit Button Click
  onEditData = () => {
    debugger;
    //find the index of object in array
    var objIndex = this.state.Product_List.findIndex(
      (obj) => obj.product_id === this.state.editData.product_id
    );
    //store array in new var and replace index of Array object with new one
    var newObj = this.state.Product_List;
    newObj[objIndex] = this.state.editData;
    this.setState({
      Product_List: newObj,
      isEditOpen: false,
      isDeleteOpen: false,
      deleteId: "",
      editData: {},
      isAddOpen: false,
      addData: {},
    });
    this.props.productEdit(this.state.editData);
    // NotificationManager.success("successfully updated record");
  };

  //onChange event Of add Form
  onChangeAdd = (e) => {
    var tempObj = Object.assign({}, this.state.addData);
    tempObj[e.target.name] = e.target.value;
    tempObj["product_id"] = this.state.Product_List.length + 1;
    this.setState({
      addData: tempObj,
    });
  };

  //add button click function
  onAddData = () => {
    this.setState({
      Product_List: [...this.state.Product_List, this.state.addData],
      isAddOpen: false,
      isDeleteOpen: false,
      isEditOpen: false,
      addData: {},
      editData: {},
      deleteId: "",
    });
    this.props.productAdd(this.state.addData);
    // NotificationManager.success("successfully added record");
  };

  //on Search Data in Table
  onSearchData = (e) => {
    var searchData = [];
    if (e.target.value !== "") {
      function find(arr) {
        var result = [];
        for (var i in arr) {
          if (
            arr[i].product_name
              .toLowerCase()
              .match(e.target.value.toLowerCase()) ||
            arr[i].product_price
              .toLowerCase()
              .match(e.target.value.toLowerCase())
          ) {
            result.push(arr[i]);
          }
        }
        return result;
      }
      searchData = find(this.state.Product_List);
      this.setState({
        filtered: searchData,
        flag: false,
      });
    } else {
      searchData = [];
      this.setState({
        filtered: searchData,
        flag: true,
      });
    }
  };

  render() {
    const {
      Product_List,
      isDeleteOpen,
      isEditOpen,
      editData,
      isAddOpen,
      addData,
      filtered,
      flag,
    } = this.state;
    return (
      <Fragment>
        <div className="App">
          <div className="App-Search">
            <TextField
              fullWidth
              id="standard-basic"
              label="Search"
              placeholder="Product Search By Name....."
              onChange={(e) => this.onSearchData(e)}
            />
          </div>
          <div>
            <ProductTable
              removeRecord={this.removeRecord}
              isDeleteOpen={isDeleteOpen}
              toggleDelete={this.toggleDelete}
              Product_List={flag ? Product_List : filtered}
              onClose={this.onClose}
              toggleEdit={this.toggleEdit}
              isEditOpen={isEditOpen}
              editData={editData}
              onEditData={this.onEditData}
              onChangeEdit={this.onChangeEdit}
              isAddOpen={isAddOpen}
              addData={addData}
              toggleAdd={this.toggleAdd}
              onChangeAdd={this.onChangeAdd}
              onAddData={this.onAddData}
            />
          </div>
        </div>
        {/* <NotificationContainer /> */}
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  productRemove,
  productAdd,
  productEdit,
};

// const mapStateToProps = ({ ProductReducer }) => {
//   const { loading, deleteProduct, addProduct } = ProductReducer;
//   return { loading, deleteProduct, addProduct };
// };

export default connect(null, mapDispatchToProps)(Product);
