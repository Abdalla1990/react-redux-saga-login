import React, { Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import DeleteConfirm from "./DeleteConfirm"; //for Delete Confirmation Modal

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ProductTable({
  Product_List,
  onClose,
  editData,
  onEditData,
  onChangeEdit,
  removeRecord,
  isEditOpen,
  toggleDelete,
  toggleEdit,
  isDeleteOpen,
  toggleAdd,
  isAddOpen,
  addData,
  onChangeAdd,
  onAddData,
}) {
  return (
    <Fragment>
      <div className="row justify-content-between" style={{ margin: "0" }}>
        <div>
          <Typography variant="h4" gutterBottom>
            Product List
          </Typography>
        </div>
        <div>
          <Button
            variant="contained"
            style={{ width: "100px" }}
            onClick={toggleAdd}
            color="primary"
          >
            Add
          </Button>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
              <StyledTableCell>Discription</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {Product_List &&
              Product_List.map((item, key) => {
                return (
                  <StyledTableRow key={key}>
                    <StyledTableCell component="th" scope="row">
                      {key + 1}
                    </StyledTableCell>
                    <StyledTableCell>{item.product_name}</StyledTableCell>
                    <StyledTableCell>{item.product_price}</StyledTableCell>
                    <StyledTableCell>{item.product_dis}</StyledTableCell>
                    <StyledTableCell>
                      <IconButton
                        aria-label="close"
                        // className={classes.closeButton}
                        onClick={() => toggleDelete(item.product_id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        aria-label="close"
                        // className={classes.closeButton}
                        onClick={() => toggleEdit(item)}
                      >
                        <EditIcon />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <DeleteConfirm
        removeRecord={removeRecord}
        isDeleteOpen={isDeleteOpen}
        onClose={onClose}
      />
      {editData && (
        <Dialog open={isEditOpen} toggle={onClose}>
          <DialogTitle onClose={onClose}>Update Product</DialogTitle>
          <DialogContent dividers>
            <form noValidate autoComplete="off">
              <FormControl fullWidth>
                <InputLabel htmlFor="my-input">Product Name</InputLabel>
                <Input
                  fullWidth
                  type="text"
                  name="product_name"
                  placeholder="Product Name"
                  value={editData.product_name}
                  onChange={(e) => onChangeEdit(e)}
                />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel htmlFor="my-input">Product Price</InputLabel>
                <Input
                  fullWidth
                  type="text"
                  name="product_price"
                  placeholder="Product Price"
                  value={editData.product_price}
                  onChange={(e) => onChangeEdit(e)}
                />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel htmlFor="my-input">Product Discription</InputLabel>
                <Input
                  fullWidth
                  type="textarea"
                  name="product_dis"
                  placeholder="Product Discription"
                  value={editData.product_dis}
                  onChange={(e) => onChangeEdit(e)}
                />
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={onEditData}>
              Update
            </Button>{" "}
            <Button variant="contained" color="secondary" onClick={onClose}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {isAddOpen && (
        <Dialog open={isAddOpen} toggle={onClose}>
          <DialogTitle onClose={onClose}>Add Product</DialogTitle>
          <DialogContent dividers>
            <form noValidate autoComplete="off">
              <FormControl fullWidth>
                <InputLabel htmlFor="my-input">Product Name</InputLabel>
                <Input
                  fullWidth
                  type="text"
                  name="product_name"
                  placeholder="Product Name"
                  value={addData.product_name}
                  onChange={(e) => onChangeAdd(e)}
                />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel htmlFor="my-input">Product Price</InputLabel>
                <Input
                  fullWidth
                  type="text"
                  name="product_price"
                  placeholder="Product Price"
                  value={addData.product_price}
                  onChange={(e) => onChangeAdd(e)}
                />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel htmlFor="my-input">Product Description</InputLabel>
                <Input
                  fullWidth
                  type="textarea"
                  name="product_dis"
                  placeholder="Product Description"
                  value={addData.product_dis}
                  onChange={(e) => onChangeAdd(e)}
                />
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={onAddData}>
              Add
            </Button>{" "}
            <Button variant="contained" color="secondary" onClick={onClose}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Fragment>
  );
}
