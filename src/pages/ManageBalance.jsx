// import BalanceTransactions from './BalanceTransactions';
import * as React from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import AppWidgetSummary from '../sections/overview/app-widget-summary';
// import Card from '@mui/material/Card';
import Input from '@mui/material/Input';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ManageBalance() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // basis - 11 / 12;
  return (
    <>
      <Container>
        <h1 className="text-3xl p-4 my-5 mb-12">Manage Balance</h1>

        <Grid container spacing={10} sx={{ justifyContent: 'center' }}>
          <Grid
            item
            xs={10}
            sm={6}
            md={5}
            sx={{ borderRadius: 2, borderColor: 'black', px: 1, borderWidth: 1, margin: 1 }}
          >
            <div className="flex flex-row justify-end">
              <div className="mr-5 text-lg border-2 rounded-lg cursor-pointer  hover:text-white">
                <div>
                  <Button onClick={handleOpen}>+ Add</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="add_balance_popup"
                    aria-describedby="new_balance_add"
                  >
                    <Box sx={style}>
                      <Typography id="add_balance_popup" variant="h6" component="h2">
                        Add Balance
                      </Typography>
                      <Typography id="new_balance_add" sx={{ mt: 2 }}>
                        Amount :
                        <p>
                          <Input type="number" fullWidth />
                        </p>
                        <p className="mt-10 flex flex-row justify-end">
                          <button className="p-4" onClick={handleClose} type="button">
                            Cancel
                          </button>
                          <button className="bg-blue-500 p-3 rounded-lg" type="button">
                            Update
                          </button>
                        </p>
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
            <div className="basis-1/2  m-0 mx-5 p-10 ">
              <div className="flex flex-row my-6">
                <p className="basis-1/3 text-2xl pt-2">Current Balance: </p>
                <p className="basis-2/3 pl-10 text-5xl">$ 9000</p>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={10}
            sm={6}
            md={5}
            sx={{ borderRadius: 2, borderColor: 'black', px: 1, borderWidth: 1, margin: 1 }}
          >
            <div>
              <p className="text-2xl p-5">Monthly Income:</p>
              <div className="flex justify-center items-center ">
                <p className=" text-3xl border-2 rounded-lg p-5">$5000</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* <Grid container spacing={5}>
         
        <Grid item xs={10} sm={6} md={5} classname="border-2 rounded-lg">
          <div className="flex flex-row justify-end">
            <p className="px-4 text-lg border-2 rounded-lg cursor-pointer hover:bg-black hover:text-white">
              + Add
            </p>
          </div>
          <div className="flex flex-row my-6">
            <p className="basis-1/3 text-2xl pt-2">Current Balance: </p>
            <p className="basis-2/3 pl-10 text-5xl">$ 9000</p>
          </div>
        </Grid>
        <Grid item xs={10} sm={6} md={5} classname="border-2 rounded-lg">
          <p className="text-2xl p-5">Monthly Income:</p>
          <div className="flex justify-center items-center ">
            <p className=" text-3xl border-2 rounded-lg p-5">$5000</p>
          </div>
        </Grid>
      </Grid> */}
    </>
  );
}