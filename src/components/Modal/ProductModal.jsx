import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import useStockCall from "../../hook/useStockCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProductModal({ handleClose, open, initialState }) {
  const { createStockData } = useStockCall();

  const handleSubmit = (e) => {
    e.preventDefault();
    createStockData("products", info);
  };

  const { categories, brands } = useSelector((state) => state.stock);

  const [info, setInfo] = useState({
    initialState
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={info.categoryId}
                label="Category"
                onChange={handleChange}
              >
                {categories.map((category, index) => (
                  <MenuItem key={index} value={category._id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Brands</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={info.brandId}
                label="Brands"
                onChange={handleChange}
              >
                {brands.map((brand, index) => (
                  <MenuItem key={index} value={brand._id}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Product Name"
              name="productName"
              id="productName"
              type="text"
              variant="outlined"
              onChange={handleChange}
              value={info.name}
              required
            />
            <Button type="submit" variant="contained" fullWidth>
              SUBMIT FIRM
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
